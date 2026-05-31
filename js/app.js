// 卫星导航答题系统 v3 - BGM + 章节全难度 + 手机适配
// 全局错误防护
window.addEventListener('error', function(e) {
  if (e.message && e.message.includes('getBoundingClientRect')) {
    e.preventDefault(); e.stopPropagation(); return false;
  }
}, true);

const STATE = {
  currentPage: 'home',
  difficulty: 'medium',
  quizMode: 'chapter',
  currentChapter: null,
  examTopics: [],
  questions: [],
  currentIndex: 0,
  answers: {},
  quizSubmitted: false,
  selectedExamChips: [],
  bgmOn: false
};

// ==================== 背景音乐 ====================
function toggleBGM() {
  const audio = document.getElementById('bgmAudio');
  const btn = document.getElementById('bgmBtn');
  const icon = btn ? btn.querySelector('.bgm-icon') : null;
  if (!audio) return;

  if (STATE.bgmOn) {
    audio.pause();
    STATE.bgmOn = false;
    if (icon) icon.textContent = '🔇';
    if (btn) btn.classList.remove('playing');
  } else {
    audio.volume = (document.getElementById('bgmVolume')?.value || 30) / 100;
    audio.play().catch(() => {});
    STATE.bgmOn = true;
    if (icon) icon.textContent = '🎵';
    if (btn) btn.classList.add('playing');
  }
}

function setBGMVolume(val) {
  const audio = document.getElementById('bgmAudio');
  if (audio) audio.volume = val / 100;
}

// 首次用户交互时尝试自动播放
function tryAutoPlay() {
  try {
    if (!STATE.bgmOn) {
      const audio = document.getElementById('bgmAudio');
      if (audio) {
        audio.volume = 0.3;
        audio.play().then(() => {
          STATE.bgmOn = true;
          const icon = document.querySelector('#bgmBtn .bgm-icon');
          if (icon) icon.textContent = '🎵';
          const btn = document.getElementById('bgmBtn');
          if (btn) btn.classList.add('playing');
        }).catch(() => {});
      }
    }
  } catch(e) {}
}

// ==================== 存储 ====================
function loadStorage() {
  try { return JSON.parse(localStorage.getItem('gps_quiz_v2') || '{}'); }
  catch(e) { return {}; }
}
function saveStorage(obj) {
  const d = loadStorage();
  Object.assign(d, obj);
  d.difficulty = STATE.difficulty;
  localStorage.setItem('gps_quiz_v2', JSON.stringify(d));
}

// ==================== 难度 ====================
function selectDifficulty(diff, el) {
  STATE.difficulty = diff;
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('selected'));
  if (el) el.classList.add('selected');
  document.querySelectorAll('.diff-btn[data-diff="'+diff+'"]').forEach(b => b.classList.add('selected'));
  saveStorage({});
  updateLabels();
}

function updateLabels() {
  const cfg = DIFFICULTY_CONFIG[STATE.difficulty];
  const el = document.getElementById('examDiffLabel');
  if (el && cfg) el.textContent = cfg.name;
}

// ==================== 导航 ====================
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const t = document.getElementById('page-' + page);
  if (t) t.classList.add('active');
  STATE.currentPage = page;
  // 移动端底部导航高亮
  document.querySelectorAll('.mobile-nav button').forEach(b => b.classList.remove('mn-active'));
  const mapping = { home:0, chapters:1, exam:2, wrongbook:3 };
  const idx = mapping[page];
  if (idx !== undefined) {
    const btns = document.querySelectorAll('.mobile-nav button');
    if (btns[idx]) btns[idx].classList.add('mn-active');
  }
  // 安全的滚动，防止 getBoundingClientRect 空引用
  try { requestAnimationFrame(() => { try { window.scrollTo({ top:0, behavior:'auto' }); } catch(e){} }); } catch(e){}
}

// ==================== 章节列表 ====================
function showChapterList() {
  STATE.quizMode = 'chapter';
  renderChapterGrid();
  showPage('chapters');
}

function renderChapterGrid() {
  const grid = document.getElementById('chapterGrid');
  if (!grid) return;
  const storage = loadStorage();
  const progress = storage.chapterProgress || {};
  const emojis = ['🌍','🌐','🛰️','⏱','🚀','📡','🧮','📻','🛸','🔭','〰','📱','🔬','📊','🌫','🏗','📈','⚡','🏢','✈'];

  grid.innerHTML = QUIZ_DATA.chapters.map((ch,i) => {
    const p = progress[ch.id] || { correct:0, total:0 };
    const pct = p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
    const totalQ = ch.questions.length;
    const easy = ch.questions.filter(q=>q.difficulty==='easy').length;
    const med = ch.questions.filter(q=>q.difficulty==='medium').length;
    const hard = ch.questions.filter(q=>q.difficulty==='hard').length;
    let diffBadges = '';
    if (easy>0) diffBadges += '<span class="tag tag-pink">🌱'+easy+'</span> ';
    if (med>0) diffBadges += '<span class="tag tag-blue">🌿'+med+'</span> ';
    if (hard>0) diffBadges += '<span class="tag tag-purple">🌳'+hard+'</span> ';
    return '<div class="chapter-card" onclick="startChapterQuiz(\''+ch.id+'\')">'+
      '<div class="ch-num">'+(emojis[i]||'📚')+' '+ch.id.replace('ch','Ch.')+'</div>'+
      '<div class="ch-title">'+ch.title+'</div>'+
      '<div class="ch-desc">'+totalQ+'题 '+diffBadges+'</div>'+
      '<div class="ch-progress"><div class="ch-progress-bar" style="width:'+pct+'%"></div></div>'+
      '<div style="font-size:0.7rem;color:var(--text-light);margin-top:4px;">'+
        (p.total>0 ? '正确率 '+pct+'% ('+p.correct+'/'+p.total+')' : '尚未练习')+
      '</div></div>';
  }).join('');
}

// ==================== 考试大纲 ====================
function showExamMode() {
  STATE.quizMode = 'exam';
  STATE.selectedExamChips = [];
  updateLabels();
  renderExamChips();
  showPage('exam');
}

function renderExamChips() {
  const c = document.getElementById('examChips');
  if (!c) return;
  const imp = { high:'🔥 高频', medium:'⭐ 重要', low:'💡 了解' };
  c.innerHTML = QUIZ_DATA.examOutline.map(t => {
    const act = STATE.selectedExamChips.length===0 || STATE.selectedExamChips.includes(t.topic);
    return '<div class="exam-chip '+(act?'active':'')+'" onclick="toggleExamChip(\''+t.topic+'\',this)">'+
      (imp[t.importance]||'') + ' ' + t.topic + '</div>';
  }).join('');
}

function toggleExamChip(topic, el) {
  const i = STATE.selectedExamChips.indexOf(topic);
  if (i>=0) { STATE.selectedExamChips.splice(i,1); el.classList.remove('active'); }
  else { STATE.selectedExamChips.push(topic); el.classList.add('active'); }
}

function startExamQuiz() {
  let tids = [];
  if (STATE.selectedExamChips.length===0) {
    QUIZ_DATA.examOutline.forEach(t => tids = tids.concat(t.questionIds));
  } else {
    QUIZ_DATA.examOutline.forEach(t => {
      if (STATE.selectedExamChips.includes(t.topic)) tids = tids.concat(t.questionIds);
    });
  }
  tids = [...new Set(tids)];
  const qs = [];
  tids.forEach(id => {
    for (const ch of QUIZ_DATA.chapters) {
      const q = ch.questions.find(q => q.id===id);
      if (q && q.difficulty===STATE.difficulty) { qs.push(q); break; }
    }
  });
  if (qs.length===0) { alert('当前难度下无匹配题目，请切换难度或选择更多知识点！'); return; }
  STATE.questions = shuffleArray(qs);
  startQuiz('📋 考试大纲 · '+qs.length+'题');
}

// ==================== 快速刷题 ====================
function quickQuiz() {
  STATE.quizMode = 'quick';
  const allQ = [];
  QUIZ_DATA.chapters.forEach(ch => {
    ch.questions.forEach(q => { if(q.difficulty===STATE.difficulty) allQ.push(q); });
  });
  if (allQ.length===0) { alert('当前难度下无题目！请切换难度。'); return; }
  STATE.questions = shuffleArray(allQ).slice(0, Math.min(20, allQ.length));
  startQuiz('⚡ 快速刷题 · '+STATE.questions.length+'题');
}

// ==================== 补充题模式 ====================
function suppQuiz() {
  STATE.quizMode = 'supp';
  const suppQ = QUIZ_DATA.suppQuestions || [];
  if (suppQ.length===0) { alert('暂无补充题目。'); return; }
  const qs = suppQ.filter(q => q.difficulty===STATE.difficulty);
  if (qs.length===0) { alert('当前难度下无补充题！请切换难度。'); return; }
  STATE.questions = shuffleArray(qs);
  startQuiz('📖 补充题库 · '+qs.length+'题');
}

// ==================== 章节答题（包含全部难度） ====================
function startChapterQuiz(chId) {
  STATE.quizMode = 'chapter';
  STATE.currentChapter = chId;
  const ch = QUIZ_DATA.chapters.find(c => c.id===chId);
  if (!ch || ch.questions.length===0) { alert('该章节暂无题目。'); return; }
  // 按难度排序：easy → medium → hard
  const sorted = [...ch.questions].sort((a,b) => {
    const order = { easy:0, medium:1, hard:2 };
    return order[a.difficulty] - order[b.difficulty];
  });
  STATE.questions = sorted;
  const easyC = sorted.filter(q=>q.difficulty==='easy').length;
  const medC = sorted.filter(q=>q.difficulty==='medium').length;
  const hardC = sorted.filter(q=>q.difficulty==='hard').length;
  startQuiz(ch.title+' · '+sorted.length+'题 (🌱'+easyC+' 🌿'+medC+' 🌳'+hardC+')');
}

// ==================== 答题引擎 ====================
function startQuiz(title) {
  STATE.currentIndex = 0;
  STATE.answers = {};
  STATE.quizSubmitted = false;
  const qc = document.getElementById('quizChapter');
  if (qc) qc.textContent = title;
  const bn = document.getElementById('btnNext');
  if (bn) { bn.disabled = true; bn.textContent = '下一题 →'; bn.style.display = 'inline-flex'; }
  const bs = document.getElementById('btnSubmit');
  if (bs) bs.style.display = 'none';
  const ea = document.getElementById('explanationArea');
  if (ea) ea.innerHTML = '';
  updateQuizProgress();
  renderQuestion();
  showPage('quiz');
}

function renderQuestion() {
  if (STATE.currentIndex >= STATE.questions.length) { submitQuiz(); return; }
  const q = STATE.questions[STATE.currentIndex];
  const answered = STATE.answers[q.id] !== undefined;
  const dc = DIFFICULTY_CONFIG[q.difficulty];

  const qn = document.getElementById('questionNum');
  if (qn) qn.innerHTML = '第 '+(STATE.currentIndex+1)+' 题 &nbsp;<span class="tag tag-'+
    (q.difficulty==='easy'?'pink':q.difficulty==='medium'?'blue':'purple')+'">'+
    dc.icon+' '+dc.name+'</span>';

  const qt = document.getElementById('questionText');
  if (qt) qt.textContent = q.question;

  const ea = document.getElementById('explanationArea');
  if (ea) ea.innerHTML = '';

  const labels = ['A','B','C','D'];
  const ol = document.getElementById('optionsList');
  if (ol) {
    ol.innerHTML = q.options.map((opt,i) => {
      const sel = STATE.answers[q.id]===i;
      let cls = 'option-btn';
      if (answered) {
        if (i===q.answer) cls += ' correct';
        else if (sel) cls += ' wrong';
      } else if (sel) cls += ' selected';
      return '<button class="'+cls+'" onclick="selectAnswer(\''+q.id+'\','+i+')" '+(answered?'disabled':'')+'>'+
        '<span class="option-label">'+labels[i]+'</span>'+
        '<span>'+opt.substring(3)+'</span></button>';
    }).join('');
  }

  updateQuizProgress();
  if (answered) showExplanation(q);

  const bn = document.getElementById('btnNext');
  const bs = document.getElementById('btnSubmit');
  if (STATE.currentIndex >= STATE.questions.length-1) {
    if (bn) bn.style.display = 'none';
    if (bs) { bs.style.display = 'inline-flex'; bs.textContent = '提交答卷 ✅'; }
  } else {
    if (bn) bn.style.display = 'inline-flex';
    if (bs) bs.style.display = 'none';
  }
  if (bn) bn.disabled = !answered;
}

function selectAnswer(qId, idx) {
  if (STATE.quizSubmitted) return;
  STATE.answers[qId] = idx;
  const q = STATE.questions[STATE.currentIndex];
  saveAnswerRecord(q, idx===q.answer);
  renderQuestion();
  const bn = document.getElementById('btnNext');
  if (bn) bn.disabled = false;
  if (STATE.currentIndex >= STATE.questions.length-1) {
    const bs = document.getElementById('btnSubmit');
    if (bs) bs.style.display = 'inline-flex';
  }
}

function showExplanation(q) {
  const user = STATE.answers[q.id];
  const ok = user===q.answer;
  const labels = ['A','B','C','D'];
  const color = ok ? 'var(--correct)' : 'var(--wrong)';
  const icon = ok ? '✅ 回答正确！' : '❌ 回答错误';
  const ea = document.getElementById('explanationArea');
  if (ea) {
    ea.innerHTML = '<div class="explanation-box" style="border-left-color:'+color+';">'+
      '<div class="exp-title" style="color:'+color+';">'+icon+'</div>'+
      '<p style="margin-top:4px;font-size:0.9rem;line-height:1.6;">'+
      '正确答案：<strong>'+labels[q.answer]+'. '+q.options[q.answer].substring(3)+'</strong><br>'+
      q.explanation+'</p></div>';
  }
}

function nextQuestion() {
  STATE.currentIndex++;
  const ea = document.getElementById('explanationArea');
  if (ea) ea.innerHTML = '';
  const bn = document.getElementById('btnNext');
  if (bn) bn.disabled = true;
  renderQuestion();
}

function submitQuiz() {
  STATE.quizSubmitted = true;
  let total = STATE.questions.length, correct = 0;
  const wrongIds = [];
  STATE.questions.forEach(q => {
    if (STATE.answers[q.id]===q.answer) correct++;
    else wrongIds.push(q.id);
  });
  const score = total>0 ? Math.round((correct/total)*100) : 0;
  const multiplier = DIFFICULTY_CONFIG[STATE.difficulty].pointsMultiplier;
  const points = correct * multiplier;
  if (STATE.quizMode==='chapter' && STATE.currentChapter) {
    updateChapterProgress(STATE.currentChapter, correct, total);
  }
  renderResult(score, correct, total, points, wrongIds);
  showPage('result');
}

// ==================== 结果页 ====================
function renderResult(score, correct, total, points, wrongIds) {
  const c = document.getElementById('resultContent');
  if (!c) return;

  let msg, emoji;
  if (score>=90)      { msg='太厉害了！你是卫星导航大师！'; emoji='🏆'; }
  else if (score>=80) { msg='非常棒！基础知识掌握得很好！'; emoji='🎉'; }
  else if (score>=70) { msg='不错哦！再巩固一下薄弱环节！'; emoji='💪'; }
  else if (score>=60) { msg='加油！还需要多多练习！'; emoji='📖'; }
  else                 { msg='别气馁，先从基础章节开始复习吧！'; emoji='🌱'; }

  const weakHtml = analyzeWeakness(wrongIds);
  const wrongQ = STATE.questions.filter(q => wrongIds.includes(q.id));
  const labels = ['A','B','C','D'];

  c.innerHTML = '<div class="result-header">'+
    '<div class="score-circle"><div class="score-num">'+score+'</div><div class="score-label">得分</div></div>'+
    '<div class="result-message">'+emoji+' '+msg+'</div>'+
    '<p style="color:var(--text-light);font-size:0.9rem;">获得 '+points+' 积分</p></div>'+

    '<div class="stats-grid">'+
      '<div class="stat-card"><div class="stat-val">'+total+'</div><div class="stat-label">总题数</div></div>'+
      '<div class="stat-card"><div class="stat-val" style="color:var(--correct);">'+correct+'</div><div class="stat-label">正确</div></div>'+
      '<div class="stat-card"><div class="stat-val" style="color:var(--wrong);">'+(total-correct)+'</div><div class="stat-label">错误</div></div>'+
      '<div class="stat-card"><div class="stat-val">'+Math.round((correct/total)*100)+'%</div><div class="stat-label">正确率</div></div>'+
    '</div>'+

    (weakHtml ? '<div class="card" style="margin-top:16px;"><h3 style="margin-bottom:12px;">🔍 薄弱环节分析</h3><div class="weak-list">'+weakHtml+'</div></div>' : '')+

    (wrongQ.length>0 ?
    '<div class="card" style="margin-top:16px;"><h3 style="margin-bottom:12px;">⚠️ 易错题 ('+wrongQ.length+'题已加入错题本)</h3><div class="wrong-list">'+
      wrongQ.map(q => {
        const ua = STATE.answers[q.id];
        const dc = DIFFICULTY_CONFIG[q.difficulty];
        return '<div class="wrong-item"><div class="wq-text">'+q.question+'</div>'+
          '<div class="wq-meta"><span style="color:var(--wrong);">你的：'+(ua>=0?labels[ua]:'超时')+'</span>'+
          '<span style="color:var(--correct);">正确：'+labels[q.answer]+'</span>'+
          '<span class="tag tag-'+(q.difficulty==='easy'?'pink':q.difficulty==='medium'?'blue':'purple')+'">'+dc.icon+' '+dc.name+'</span>'+
          q.tags.map(t=>'<span class="tag tag-pink">'+t+'</span>').join(' ')+'</div></div>';
      }).join('')+
    '</div></div>'
    : '<div class="card" style="margin-top:16px;text-align:center;"><div style="font-size:2rem;">🎉</div><p>全部正确！太棒了！</p></div>');

  if (wrongIds.length>0) saveWrongQuestions(wrongIds);
}

// ==================== 薄弱分析 ====================
function analyzeWeakness(wrongIds) {
  if (wrongIds.length===0) return '';
  const tagStats = {};
  STATE.questions.forEach(q => {
    q.tags.forEach(tag => {
      if (!tagStats[tag]) tagStats[tag] = { total:0, wrong:0 };
      tagStats[tag].total++;
      if (wrongIds.includes(q.id)) tagStats[tag].wrong++;
    });
  });
  const sorted = Object.entries(tagStats).filter(([,v])=>v.wrong>0)
    .sort((a,b)=>(b[1].wrong/b[1].total)-(a[1].wrong/a[1].total));
  if (sorted.length===0) return '';
  return sorted.slice(0,6).map(([tag,s]) => {
    const rate = Math.round((s.wrong/s.total)*100);
    const color = rate>=50?'var(--wrong)':rate>=30?'#FFB74D':'var(--blue)';
    return '<div class="weak-item"><span class="tag-name">'+tag+'</span>'+
      '<div class="tag-bar"><div class="tag-bar-fill" style="width:'+rate+'%;background:'+color+';"></div></div>'+
      '<span class="tag-rate" style="color:'+color+';">'+s.wrong+'/'+s.total+' ('+rate+'%)</span></div>';
  }).join('');
}

// ==================== 进度 ====================
function updateQuizProgress() {
  const total = STATE.questions.length;
  const answered = Object.keys(STATE.answers).length;
  const el = document.getElementById('quizProgress');
  if (el) el.textContent = answered+'/'+total;
  const pb = document.getElementById('quizProgressBar');
  if (pb) pb.style.width = total>0 ? (answered/total*100)+'%' : '0%';
}

function updateChapterProgress(chId, correct, total) {
  const s = loadStorage();
  if (!s.chapterProgress) s.chapterProgress = {};
  const p = s.chapterProgress[chId] || { correct:0, total:0 };
  s.chapterProgress[chId] = { correct: p.correct+correct, total: p.total+total };
  saveStorage(s);
}

function saveAnswerRecord(q, isCorrect) {
  const s = loadStorage();
  if (!s.questionStats) s.questionStats = {};
  if (!s.questionStats[q.id]) s.questionStats[q.id] = { correct:0, wrong:0 };
  if (isCorrect) s.questionStats[q.id].correct++;
  else s.questionStats[q.id].wrong++;
  saveStorage(s);
}

// ==================== 错题本 ====================
function saveWrongQuestions(wrongIds) {
  const s = loadStorage();
  if (!s.wrongBook) s.wrongBook = [];
  wrongIds.forEach(id => { if (!s.wrongBook.includes(id)) s.wrongBook.push(id); });
  saveStorage(s);
}

function showWrongBook() {
  const s = loadStorage();
  const wb = s.wrongBook || [];
  const cc = document.getElementById('wrongBookContent');
  const cb = document.getElementById('btnClearWrong');

  if (wb.length===0) {
    if (cc) cc.innerHTML = '<div class="empty-state"><div class="icon">🎉</div><div class="text">错题本为空！继续保持！</div></div>';
    if (cb) cb.style.display = 'none';
  } else {
    const wq = [];
    wb.forEach(id => {
      for (const ch of QUIZ_DATA.chapters) {
        const q = ch.questions.find(q => q.id===id);
        if (q) { wq.push(q); break; }
      }
    });
    const st = (s.questionStats||{});
    if (cc) {
      cc.innerHTML = '<p style="color:var(--text-light);margin-bottom:12px;">共 <strong>'+wq.length+'</strong> 道错题</p>'+
        '<div class="wrong-list">'+wq.map(q => {
          const qs = st[q.id]||{correct:0,wrong:1};
          const totalA = qs.correct+qs.wrong;
          const acc = totalA>0?Math.round(qs.correct/totalA*100):0;
          const dc = DIFFICULTY_CONFIG[q.difficulty];
          return '<div class="wrong-item"><div class="wq-text">'+q.question+'</div>'+
            '<div class="wq-meta"><span>答案：'+'ABCD'[q.answer]+'</span><span>正确率：'+acc+'%</span>'+
            '<span class="tag tag-'+(q.difficulty==='easy'?'pink':q.difficulty==='medium'?'blue':'purple')+'">'+dc.icon+' '+dc.name+'</span>'+
            q.tags.map(t=>'<span class="tag tag-pink">'+t+'</span>').join(' ')+'</div></div>';
        }).join('')+'</div>'+
        '<div style="text-align:center;margin-top:16px;"><button class="btn btn-primary" onclick="startWrongBookQuiz()">📝 练习错题</button></div>';
    }
    if (cb) cb.style.display = 'inline-flex';
  }
  showPage('wrongbook');
}

function startWrongBookQuiz() {
  const s = loadStorage();
  const wb = s.wrongBook || [];
  if (wb.length===0) return;
  const qs = [];
  wb.forEach(id => {
    for (const ch of QUIZ_DATA.chapters) {
      const q = ch.questions.find(q => q.id===id);
      if (q) { qs.push(q); break; }
    }
  });
  STATE.quizMode = 'wrongbook';
  STATE.questions = shuffleArray(qs);
  startQuiz('📝 错题复习 · '+qs.length+'题');
}

function clearWrongBook() {
  if (confirm('确定要清空错题本吗？此操作不可恢复！')) {
    const s = loadStorage(); s.wrongBook = []; saveStorage(s); showWrongBook();
  }
}

// ==================== 重做 ====================
function retryQuiz() {
  STATE.questions = shuffleArray([...STATE.questions]);
  STATE.currentIndex = 0;
  STATE.answers = {};
  STATE.quizSubmitted = false;
  document.getElementById('btnNext').textContent = '下一题 →';
  document.getElementById('btnNext').style.display = 'inline-flex';
  document.getElementById('btnSubmit').style.display = 'none';
  document.getElementById('explanationArea').innerHTML = '';
  updateQuizProgress();
  renderQuestion();
  showPage('quiz');
}

function retryWrongOnly() { startWrongBookQuiz(); }

// ==================== 闪卡模式 ====================
const FLASH_STATE = { cards:[], index:0, due:0, reviewed:0, startTime:0 };

function startFlashcards() {
  const cards = [...FLASH_DATA];
  const flashStore = JSON.parse(localStorage.getItem('gps_flash_sr') || '{}');
  const now = Date.now();
  // 间隔重复排序：到期卡片优先，按到期时间升序；未学过的放最后
  cards.sort((a,b) => {
    const sa = flashStore[a.abbr] || 0;
    const sb = flashStore[b.abbr] || 0;
    const dueA = sa > 0 && sa <= now ? 0 : sa;
    const dueB = sb > 0 && sb <= now ? 0 : sb;
    if (dueA !== dueB) return dueA - dueB;
    return sa - sb;
  });
  FLASH_STATE.cards = cards;
  FLASH_STATE.index = 0;
  FLASH_STATE.due = cards.filter(c => {
    const sd = flashStore[c.abbr] || 0;
    return sd > 0 && sd <= now;
  }).length;
  FLASH_STATE.reviewed = 0;
  FLASH_STATE.startTime = Date.now();
  showPage('flashcard');
  renderFlashcard();
}

function renderFlashcard() {
  const c = document.getElementById('flashContent');
  const i = FLASH_STATE.index;
  if (!c || i >= FLASH_STATE.cards.length) {
    finishFlashcards(); return;
  }
  const card = FLASH_STATE.cards[i];
  c.innerHTML =
    '<div class="flash-card" id="flashCard" onclick="flipFlashcard()">'+
      '<div class="flash-front">'+
        '<div class="flash-chapter">'+card.chapter+'</div>'+
        '<div class="flash-abbr">'+card.abbr+'</div>'+
        '<div class="flash-hint">点击翻转查看全称 →</div>'+
      '</div>'+
      '<div class="flash-back">'+
        '<div class="flash-chapter">'+card.chapter+'</div>'+
        '<div class="flash-full">'+card.full+'</div>'+
        '<div class="flash-cn">'+card.cn+'</div>'+
      '</div>'+
    '</div>'+
    '<div class="flash-actions" id="flashActions" style="display:none;">'+
      '<button class="btn flash-btn-hard" onclick="rateFlash(\'hard\')">😰 不会</button>'+
      '<button class="btn flash-btn-ok" onclick="rateFlash(\'ok\')">🤔 不确定</button>'+
      '<button class="btn flash-btn-easy" onclick="rateFlash(\'easy\')">😊 会了</button>'+
    '</div>'+
    '<div class="flash-progress-bar"><div class="flash-progress-fill" id="flashProgress" style="width:'+
      ((i/FLASH_STATE.cards.length)*100)+'%"></div></div>'+
    '<div class="flash-stats">到期复习 '+FLASH_STATE.due+' 张 | 已复习 '+FLASH_STATE.reviewed+'/'+FLASH_STATE.cards.length+'</div>';
}

function flipFlashcard() {
  const card = document.getElementById('flashCard');
  const act = document.getElementById('flashActions');
  if (!card) return;
  card.classList.toggle('flipped');
  if (act) { act.style.display = card.classList.contains('flipped') ? 'flex' : 'none'; }
}

function rateFlash(level) {
  const i = FLASH_STATE.index;
  const card = FLASH_STATE.cards[i];
  const store = JSON.parse(localStorage.getItem('gps_flash_sr') || '{}');
  const now = Date.now();
  const intervals = { hard: now+5*60*1000, ok: now+30*60*1000, easy: now+4*60*60*1000 };
  store[card.abbr] = intervals[level];
  localStorage.setItem('gps_flash_sr', JSON.stringify(store));
  FLASH_STATE.reviewed++;
  FLASH_STATE.index++;
  const cardEl = document.getElementById('flashCard');
  if (cardEl) cardEl.classList.remove('flipped');
  renderFlashcard();
}

function finishFlashcards() {
  const elapsed = Math.round((Date.now()-FLASH_STATE.startTime)/1000);
  const min = Math.floor(elapsed/60); const sec = elapsed%60;
  const c = document.getElementById('flashContent');
  if (c) c.innerHTML =
    '<div class="hero"><div class="mascot">🎉</div>'+
    '<h2>闪卡复习完成！</h2>'+
    '<p style="color:var(--text-light);">已复习 <strong>'+FLASH_STATE.reviewed+'</strong> 个术语</p>'+
    '<p style="color:var(--text-light);">用时 '+min+'分'+sec+'秒</p>'+
    '<div style="margin-top:16px;">'+
    '<button class="btn btn-primary" onclick="startFlashcards()">🔄 再来一轮</button>'+
    '<button class="btn btn-outline" style="margin-left:8px;" onclick="showPage(\'home\')">🏠 返回首页</button>'+
    '</div></div>';
}

function resetFlashSR() {
  if (confirm('确定重置所有闪卡的复习进度？')) {
    localStorage.removeItem('gps_flash_sr');
    startFlashcards();
  }
}

// ==================== 学习模式 ====================
const LEARN_STATE = { questions:[], index:0, round:0, wrong:[], startTime:0, totalReviewed:0 };

function startLearnMode() {
  // 收集所有章节的简答题（取问题和解释作为答案）
  const allQ = [];
  QUIZ_DATA.chapters.forEach(ch => {
    ch.questions.forEach(q => {
      allQ.push({ question: q.question, answer: q.explanation, tags: q.tags, chapter: ch.title });
    });
  });
  LEARN_STATE.questions = shuffleArray(allQ);
  LEARN_STATE.index = 0;
  LEARN_STATE.round = 1;
  LEARN_STATE.wrong = [];
  LEARN_STATE.totalReviewed = 0;
  LEARN_STATE.startTime = Date.now();
  showPage('learn');
  renderLearnCard();
}

function renderLearnCard() {
  const c = document.getElementById('learnContent');
  if (!c) return;
  const qList = LEARN_STATE.wrong.length > 0 ? LEARN_STATE.wrong : LEARN_STATE.questions;
  if (LEARN_STATE.index >= qList.length) {
    if (LEARN_STATE.wrong.length > 0) {
      LEARN_STATE.round++;
      LEARN_STATE.questions = [...LEARN_STATE.wrong];
      LEARN_STATE.wrong = [];
      LEARN_STATE.index = 0;
    } else {
      finishLearnMode(); return;
    }
  }
  const q = LEARN_STATE.wrong.length > 0 ? LEARN_STATE.wrong[LEARN_STATE.index] : LEARN_STATE.questions[LEARN_STATE.index];
  const total = LEARN_STATE.wrong.length > 0 ? LEARN_STATE.wrong.length : LEARN_STATE.questions.length;
  c.innerHTML =
    '<div class="learn-header">第 <strong>'+LEARN_STATE.round+'</strong> 轮 · '+
    (LEARN_STATE.index+1)+'/'+total+' · 已掌握 '+LEARN_STATE.totalReviewed+' 题</div>'+
    '<div class="progress-bar"><div class="progress-fill" style="width:'+((LEARN_STATE.index/total)*100)+'%"></div></div>'+
    '<div class="learn-card" id="learnCard">'+
      '<div class="learn-question">'+q.question+'</div>'+
      '<div class="learn-answer" id="learnAnswer" style="display:none;">'+
        '<div class="explanation-box">'+q.answer+'</div>'+
        '<div class="learn-tags">'+q.tags.map(t=>'<span class="tag tag-pink">'+t+'</span>').join(' ')+'</div>'+
      '</div>'+
    '</div>'+
    '<div class="learn-actions" id="learnReveal">'+
      '<button class="btn btn-primary" onclick="revealLearnAnswer()">💡 显示答案</button>'+
    '</div>'+
    '<div class="learn-actions" id="learnRate" style="display:none;">'+
      '<button class="btn flash-btn-hard" onclick="rateLearn(\'wrong\')">❌ 错了</button>'+
      '<button class="btn flash-btn-ok" onclick="rateLearn(\'partial\')">⚠️ 部分对</button>'+
      '<button class="btn flash-btn-easy" onclick="rateLearn(\'correct\')">✅ 对了</button>'+
    '</div>';
}

function revealLearnAnswer() {
  const ans = document.getElementById('learnAnswer');
  const rev = document.getElementById('learnReveal');
  const rate = document.getElementById('learnRate');
  if (ans) ans.style.display = 'block';
  if (rev) rev.style.display = 'none';
  if (rate) rate.style.display = 'flex';
}

function rateLearn(level) {
  const qList = LEARN_STATE.wrong.length > 0 ? LEARN_STATE.wrong : LEARN_STATE.questions;
  const q = qList[LEARN_STATE.index];
  if (level !== 'correct') {
    LEARN_STATE.wrong.push(q);
  } else {
    LEARN_STATE.totalReviewed++;
  }
  LEARN_STATE.index++;
  const ans = document.getElementById('learnAnswer');
  const rev = document.getElementById('learnReveal');
  const rate = document.getElementById('learnRate');
  if (ans) ans.style.display = 'none';
  if (rev) rev.style.display = 'flex';
  if (rate) rate.style.display = 'none';
  renderLearnCard();
}

function finishLearnMode() {
  const elapsed = Math.round((Date.now()-LEARN_STATE.startTime)/1000);
  const min = Math.floor(elapsed/60); const sec = elapsed%60;
  const c = document.getElementById('learnContent');
  if (c) c.innerHTML =
    '<div class="hero"><div class="mascot">🏆</div>'+
    '<h2>学习完成！</h2>'+
    '<p style="color:var(--text-light);">全部掌握 <strong>'+LEARN_STATE.totalReviewed+'</strong> 题</p>'+
    '<p style="color:var(--text-light);">共 '+LEARN_STATE.round+' 轮 · 用时 '+min+'分'+sec+'秒</p>'+
    '<div style="margin-top:16px;">'+
    '<button class="btn btn-primary" onclick="startLearnMode()">🔄 重新学习</button>'+
    '<button class="btn btn-outline" style="margin-left:8px;" onclick="showPage(\'home\')">🏠 返回首页</button>'+
    '</div></div>';
}
function shuffleArray(arr) {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

// ==================== 初始化 ====================
function init() {
  try {
    const saved = loadStorage();
    STATE.difficulty = saved.difficulty || 'medium';
    document.querySelectorAll('.diff-btn[data-diff="'+STATE.difficulty+'"]').forEach(b => b.classList.add('selected'));
    updateLabels();
    renderChapterGrid();
    // 延迟自动播放，避免与浏览器自动播放策略冲突
    document.addEventListener('click', function once() {
      try { tryAutoPlay(); } catch(e){}
    }, { once: true });
  } catch(e) { console.warn('Init error:', e); }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
