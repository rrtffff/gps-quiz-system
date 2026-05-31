// GPS卫星导航复习题数据 v2 - 基于完整教材内容，按主文件夹20章组织
// 难度: easy=基础概念, medium=理解应用, hard=推导计算/复杂分析

const QUIZ_DATA = {
  chapters: [
    // ==================== 第1章 导航技术与GPS简介 ====================
    {
      id:"ch01", title:"第1章 导航技术与GPS简介", qCount:12,
      questions:[
        { id:"q001", difficulty:"easy", type:"single", question:"以下哪项不是常用的导航手段？", options:["A. 引航","B. 航位推算","C. 天文导航","D. 激光导航"], answer:3, explanation:"常用导航手段包括：引航、航位推算、天文导航、无线电导航、惯性导航。激光导航不是传统导航手段。", tags:["基础概念","导航方式"] },
        { id:"q002", difficulty:"easy", type:"single", question:"无线电导航方式按设备安装基地可分为哪几种？", options:["A. 地基、空基和卫星基","B. 地基和天基","C. 陆基和海基","D. 地面基和空间基"], answer:0, explanation:"无线电导航分为地基（设备安装在地面或海面）、空基（设备安装在飞机上）和卫星基（设备装在导航卫星上）3种。", tags:["无线电导航","分类"] },
        { id:"q003", difficulty:"easy", type:"single", question:"以下哪个不属于全球卫星导航系统（GNSS）？", options:["A. 美国GPS","B. 俄罗斯GLONASS","C. 中国北斗","D. 日本QZSS"], answer:3, explanation:"QZSS是日本的区域卫星导航系统，不属于全球系统。全球卫星导航系统包括美国GPS、俄罗斯GLONASS、中国北斗和欧洲Galileo。", tags:["GNSS","卫星导航系统"] },
        { id:"q004", difficulty:"easy", type:"single", question:"GPS采用的基本测距原理是什么？", options:["A. 双向到达时间(TWTT)","B. 单向到达时间(TOA)","C. 多普勒频移测距","D. 三角测量法"], answer:1, explanation:"GPS采用单向到达时间（TOA）测距原理，根据信号发送时刻和接收时刻之差来确定距离。", tags:["测距原理","TOA"] },
        { id:"q005", difficulty:"easy", type:"single", question:"GPS定位采用什么原理？", options:["A. 三角测量法","B. 空间交会法","C. 多点定位法","D. 时间差定位法"], answer:1, explanation:"GPS定位原理采用空间交会法，通过测量到多颗卫星的距离来确定用户位置。", tags:["定位原理","空间交会"] },
        { id:"q006", difficulty:"medium", type:"single", question:"GPS卫星上装置的高精度时钟是哪种？接收机上使用哪种？", options:["A. 卫星铯钟/铷钟，接收机石英钟","B. 卫星石英钟，接收机原子钟","C. 卫星原子钟，接收机铷钟","D. 卫星氢钟，接收机铯钟"], answer:0, explanation:"卫星上装置高精度铯钟或铷钟，接收机上装置石英钟。GPS时间系统采用世界协调时（UTC）。", tags:["时间系统","时钟"] },
        { id:"q007", difficulty:"medium", type:"single", question:"GPS信号采用什么多址技术？", options:["A. FDMA频分多址","B. TDMA时分多址","C. CDMA码分多址","D. SDMA空分多址"], answer:2, explanation:"GPS采用CDMA（码分多址）技术，通过L1和L2两个频率广播测距码和导航数据，不同卫星使用不同的PRN码。", tags:["信号技术","CDMA"] },
        { id:"q008", difficulty:"medium", type:"single", question:"GPS由几大部分组成？", options:["A. 两大部分","B. 三大部分","C. 四大部分","D. 五大部分"], answer:1, explanation:"GPS由三大部分组成：空间部分（卫星）、地面控制监测部分、用户部分（接收机）。", tags:["GPS组成","系统构成"] },
        { id:"q009", difficulty:"medium", type:"single", question:"GPS可应用在以下哪些领域？", options:["A. 仅导航定位","B. 大地测量、交通、海洋测绘、农业等","C. 仅军事用途","D. 仅航空航海"], answer:1, explanation:"GPS应用广泛：大地控制测量、地形地籍测量、公安交通系统、海洋测绘、航海航空导航、农林旅游野外考察等。", tags:["GPS应用"] },
        { id:"q010", difficulty:"hard", type:"single", question:"关于GPS时间系统，以下说法正确的是？", options:["A. GPS系统时直接等于UTC","B. GPS系统时 = 接收机时钟时间 + 接收机钟差","C. GPS系统时与UTC完全相同无需转换","D. GPS系统时不使用原子时"], answer:1, explanation:"在计算用户PVT时确定其与GPS系统时的偏差tu，将这个偏差加到接收机时钟的时间trcv上便计算出GPS系统时。UTC = Trcv + tu + tn（tn由导航电文提供）。", tags:["时间系统","GPS时"] },
        { id:"q011", difficulty:"hard", type:"single", question:"GPS的测距码是什么类型的信号？", options:["A. 固定频率正弦波","B. 强相关伪随机码","C. 随机噪声","D. 调频信号"], answer:1, explanation:"GPS卫星信号采用CDMA技术，通过L1和L2两个频率广播测距码（强相关伪随机码）和导航数据。", tags:["测距码","伪随机码"] },
        { id:"q012", difficulty:"hard", type:"single", question:"GPS卫星信号的载波频率L1和L2分别是多少？", options:["A. L1=1575.42MHz, L2=1227.60MHz","B. L1=1227.60MHz, L2=1575.42MHz","C. L1=1176.45MHz, L2=1575.42MHz","D. L1=1602MHz, L2=1246MHz"], answer:0, explanation:"GPS L1频率为1575.42MHz，L2频率为1227.60MHz。北斗B1频率为1561.098MHz，GLONASS使用FDMA。", tags:["载波频率","L1","L2"] }
      ]
    },
    // ==================== 第2章 卫星导航系统 ====================
    {
      id:"ch02", title:"第2章 卫星导航系统", qCount:6,
      questions:[
        { id:"q013", difficulty:"easy", type:"single", question:"目前全球四大卫星导航系统包括？", options:["A. GPS、GLONASS、北斗、Galileo","B. GPS、GLONASS、QZSS、IRNSS","C. GPS、北斗、WAAS、EGNOS","D. GPS、Galileo、SBAS、GBAS"], answer:0, explanation:"全球四大卫星导航系统：美国GPS、俄罗斯GLONASS、中国北斗(BDS)、欧洲Galileo。QZSS和IRNSS是区域系统。", tags:["GNSS","卫星导航系统"] },
        { id:"q014", difficulty:"easy", type:"single", question:"GLONASS是哪个国家的卫星导航系统？", options:["A. 美国","B. 俄罗斯","C. 中国","D. 欧洲"], answer:1, explanation:"GLONASS（格洛纳斯）是俄罗斯的全球卫星导航系统。", tags:["GLONASS"] },
        { id:"q015", difficulty:"medium", type:"single", question:"Galileo卫星导航系统由哪个组织建立？", options:["A. 美国","B. 俄罗斯","C. 中国","D. 欧盟"], answer:3, explanation:"Galileo（伽利略）是欧盟建立的全球卫星导航系统。", tags:["Galileo"] },
        { id:"q016", difficulty:"medium", type:"single", question:"北斗卫星导航系统区别于GPS的一个重要特点是？", options:["A. 单向测距","B. 具有短报文通信功能","C. 仅使用一颗卫星","D. 不需要地面控制站"], answer:1, explanation:"北斗系统区别于GPS的重要特点是具备短报文通信功能，可以实现双向信息传输。", tags:["北斗","短报文"] },
        { id:"q017", difficulty:"hard", type:"single", question:"GPS和GLONASS在信号体制上的主要区别是什么？", options:["A. GPS用CDMA，GLONASS用FDMA","B. GPS用FDMA，GLONASS用CDMA","C. 两者都用CDMA","D. 两者都用FDMA"], answer:0, explanation:"GPS使用CDMA（码分多址），所有卫星使用相同频率但不同伪随机码；GLONASS传统上使用FDMA（频分多址），不同卫星使用不同频率。", tags:["信号体制","CDMA","FDMA"] },
        { id:"q018", difficulty:"hard", type:"single", question:"关于卫星导航系统，以下说法错误的是？", options:["A. GPS和GLONASS最初都是军用系统","B. 北斗三号已完成全球组网","C. Galileo是纯民用系统","D. 所有GNSS系统都使用L波段"], answer:2, explanation:"Galileo虽然强调民用，但并非纯民用系统。GPS最初为军用，北斗和GLONASS也有军用背景。所有GNSS系统都使用L波段传输导航信号。", tags:["GNSS","系统比较"] }
      ]
    },
    // ==================== 第3章 GPS系统构成 ====================
    {
      id:"ch03", title:"第3章 GPS系统构成", qCount:14,
      questions:[
        { id:"q019", difficulty:"easy", type:"single", question:"GPS空间部分标准配置有多少颗卫星？分布在几个轨道面？", options:["A. 18颗, 4个面","B. 21+3颗, 6个面","C. 24颗, 8个面","D. 30颗, 3个面"], answer:1, explanation:"GPS空间部分设计星座为21+3颗（当前实际约28颗），均匀分布在6个轨道平面上。", tags:["空间部分","卫星数量"] },
        { id:"q020", difficulty:"easy", type:"single", question:"GPS地面控制部分的主控站主要负责什么？", options:["A. 向卫星注入导航电文","B. 管理协调整个地面控制系统","C. 监测卫星运行状况","D. 提供用户位置服务"], answer:1, explanation:"主控站负责管理、协调整个地面控制系统的工作，收集跟踪数据并计算卫星轨道和时钟参数。", tags:["地面控制","主控站"] },
        { id:"q021", difficulty:"easy", type:"single", question:"GPS卫星轨道面的倾角约为多少度？", options:["A. 45°","B. 55°","C. 60°","D. 65°"], answer:1, explanation:"GPS卫星轨道倾角约为55°，每个轨道平面与赤道平面的倾角约55度。", tags:["轨道参数","轨道倾角"] },
        { id:"q022", difficulty:"easy", type:"single", question:"GPS接收机的基本功能不包括以下哪项？", options:["A. 选择视界内的卫星","B. 获取卫星信号","C. 发射导航信号","D. 测量和跟踪卫星"], answer:2, explanation:"GPS接收机功能包括：选择视界内卫星、获取卫星信号、测量和跟踪卫星、恢复导航信息。接收机不发射信号。", tags:["接收机","功能"] },
        { id:"q023", difficulty:"medium", type:"single", question:"Block IIF卫星相比前代GPS卫星有什么重要改进？", options:["A. 存储星历能力为14天","B. 增设第三民用频率L5","C. 卫星间可相互跟踪","D. 具备SA能力"], answer:1, explanation:"Block IIF是新一代GPS卫星，增设第三民用频率L5（1176.45MHz），提高了民用服务的精度和可靠性。", tags:["卫星类型","Block IIF"] },
        { id:"q024", difficulty:"medium", type:"single", question:"GPS接收机按照工作原理可分为哪几类？", options:["A. 导航型和测地型","B. 码相关型、平方型、混合型、干涉型","C. 单频和双频","D. 车载型和航空型"], answer:1, explanation:"按工作原理分为：码相关型接收机、平方型接收机、混合型接收机、干涉型接收机。", tags:["接收机","分类"] },
        { id:"q025", difficulty:"medium", type:"single", question:"地面控制站对每颗GPS卫星的导航数据注入频率是？", options:["A. 每天一次","B. 每12小时一次","C. 每周一次","D. 每小时一次"], answer:0, explanation:"地面控制站在每颗卫星运行至上空时进行注入，对每颗GPS卫星每天一次，并在卫星离开注入站作用范围之前进行最后的注入。", tags:["地面控制","数据注入"] },
        { id:"q026", difficulty:"medium", type:"single", question:"Block IIA卫星的存储星历能力为多少天？", options:["A. 14天","B. 180天","C. 7天","D. 30天"], answer:1, explanation:"Block IIA（Advanced）卫星间可相互通讯，存储星历能力为180天。Block II仅14天。", tags:["卫星类型","Block IIA"] },
        { id:"q027", difficulty:"medium", type:"single", question:"在地球上任何地点任何时刻能观测到几颗GPS卫星？", options:["A. 2-4颗","B. 5-8颗","C. 8-12颗","D. 12-16颗"], answer:1, explanation:"在地球上任何地点任何时刻都能观测到5-8颗GPS卫星。", tags:["可见卫星"] },
        { id:"q028", difficulty:"hard", type:"single", question:"GPS地面控制部分由多少监测站和控制站组成？", options:["A. 3个监测站, 3个控制站","B. 5个监测站, 3个控制站","C. 5个监测站, 5个控制站","D. 6个监测站, 4个控制站"], answer:1, explanation:"地面控制部分由一个主控站、5个全球监测站和3个地面控制站组成。", tags:["地面控制","监测站"] },
        { id:"q029", difficulty:"hard", type:"single", question:"GPS接收机按用途分类不包括以下哪项？", options:["A. 导航型接收机","B. 测地型接收机","C. 授时型接收机","D. 广播型接收机"], answer:3, explanation:"按用途分为：导航型（车载、航海、航空）、测地型和授时型接收机。", tags:["接收机","用途分类"] },
        { id:"q030", difficulty:"hard", type:"single", question:"如果地面控制站发生故障，对GPS系统的影响是什么？", options:["A. 系统立即停止工作","B. 卫星预存的导航信息还可用一段时间但精度降低","C. 用户接收机无法定位","D. 卫星轨道立即偏离"], answer:1, explanation:"如果某地面站发生故障，卫星中预存的导航信息还可用一段时间，但导航精度会逐渐降低。", tags:["地面控制","故障影响"] },
        { id:"q031", difficulty:"hard", type:"single", question:"关于GPS接收机分类，按载波频率可以分为？", options:["A. 码相关型和平方型","B. 单频接收机和双频接收机","C. 导航型和测地型","D. 车载型和航空型"], answer:1, explanation:"按载波频率分为：单频接收机（只接收L1）和双频接收机（接收L1和L2）。双频可消除电离层延迟。", tags:["接收机","频率分类"] },
        { id:"q032", difficulty:"hard", type:"single", question:"GPS接收机按通道数分类，以下哪项正确？", options:["A. 仅单通道接收机","B. 单通道、多通道、多路多用通道","C. 仅多通道接收机","D. 按通道数不构成分类标准"], answer:1, explanation:"按通道数分为：单通道接收机、多通道接收机、多路多用通道接收机。", tags:["接收机","通道分类"] }
      ]
    },
    // ==================== 第4章 GPS工作原理与坐标时间系统 ====================
    {
      id:"ch04", title:"第4章 GPS工作原理与坐标时间系统", qCount:16,
      questions:[
        { id:"q033", difficulty:"easy", type:"single", question:"GPS定位为什么至少需要4颗卫星？", options:["A. 因为有4个频率","B. 需要解x,y,z和时钟差4个未知数","C. 因为卫星分布在4个轨道面","D. 国际规定"], answer:1, explanation:"需要求解4个未知数：用户三维坐标x、y、z和接收机钟差Δt，因此至少需要4颗卫星的观测值。", tags:["定位原理","4颗卫星"] },
        { id:"q034", difficulty:"easy", type:"single", question:"UTC的中文全称是什么？", options:["A. 世界时","B. 国际原子时","C. 世界协调时","D. GPS系统时"], answer:2, explanation:"UTC（Coordinated Universal Time）是世界协调时，以原子时为基准，时刻与世界时时刻差不超过±0.9s。", tags:["时间系统","UTC"] },
        { id:"q035", difficulty:"easy", type:"single", question:"ECI坐标系中的X轴指向什么方向？", options:["A. 地球北极","B. 春分点","C. 格林尼治子午线","D. 远地点"], answer:1, explanation:"ECI（地心惯性坐标系）：原点在地球质心，X轴由地心指向春分点，Z轴指向北极。该系不与地球一同转动。", tags:["坐标系","ECI"] },
        { id:"q036", difficulty:"easy", type:"single", question:"WGS-84是什么？", options:["A. 一种卫星类型","B. 一种信号编码","C. GPS使用的大地测量坐标系","D. 一种导航算法"], answer:2, explanation:"WGS-84（World Geodetic System 1984）是GPS使用的大地测量坐标系，属于地心地球固连坐标系。", tags:["坐标系","WGS-84"] },
        { id:"q037", difficulty:"medium", type:"single", question:"IAT代表什么？", options:["A. International Atomic Time 国际原子时","B. International Astronomical Time","C. Internal Atomic Timer","D. International Accurate Time"], answer:0, explanation:"IAT是International Atomic Time（国际原子时）的缩写，以原子钟导出的精确秒定义为基准。", tags:["时间系统","IAT"] },
        { id:"q038", difficulty:"medium", type:"single", question:"UT（世界时）是以什么为基准的时间系统？", options:["A. 原子振荡","B. 地球自转运动","C. 光速恒定","D. 卫星轨道周期"], answer:1, explanation:"UT（世界时）是以地球自转运动为标准的时间计量系统。由于地球自转速度变化，它不是均匀时间系统。", tags:["时间系统","UT"] },
        { id:"q039", difficulty:"medium", type:"single", question:"ECEF坐标系的作用是什么？", options:["A. 测量和决定GPS卫星轨道","B. 计算GPS接收机位置","C. 描述天体运动","D. 确定时间基准"], answer:1, explanation:"ECEF（地心地球固连坐标系）与地球一同转动，主要用于计算GPS接收机的位置。ECI则用于确定卫星轨道。", tags:["坐标系","ECEF"] },
        { id:"q040", difficulty:"medium", type:"single", question:"ECI与ECEF坐标系的关系是什么？", options:["A. 完全相同","B. ECI的X轴旋转一个角度（格林尼治恒星时）得到ECEF","C. ECEF的Z轴旋转得到ECI","D. 两者没有关系"], answer:1, explanation:"ECI的X轴（指向春分点）旋转一个角度即可得到ECEF（X轴指向0°经线方向），旋转角度为格林尼治恒星时角。", tags:["坐标系","坐标变换"] },
        { id:"q041", difficulty:"medium", type:"single", question:"如何由GPS系统时得到UTC时间？", options:["A. 直接读取","B. tUTC = Trcv + tu + tn","C. tUTC = Trcv - tu","D. tUTC = GPS时 + 1小时"], answer:1, explanation:"GPS系统时与UTC之间的整数闰秒值tn由导航电文提供，tUTC = Trcv + tu + tn。", tags:["时间系统","GPS与UTC"] },
        { id:"q042", difficulty:"medium", type:"single", question:"坐标系统由哪三个要素定义？", options:["A. 经度、纬度、高度","B. 原点位置、坐标轴指向、尺度","C. X轴、Y轴、Z轴","D. 参考椭球、大地水准面、高程基准"], answer:1, explanation:"坐标系统由坐标原点位置、坐标轴指向和尺度所定义。GPS定位中坐标系原点一般取地球质心。", tags:["坐标系","定义"] },
        { id:"q043", difficulty:"hard", type:"single", question:"关于UTC、IAT、UT1的关系，以下说法正确的是？", options:["A. UTC是完全基于地球自转的时间系统","B. IAT是以原子时为基准，UTC以IAT为基准但时刻接近UT1","C. UT1是均匀的时间系统","D. UTC时刻与IAT完全相同"], answer:1, explanation:"IAT以原子时为基准；UTC以原子时为基准但其时刻与世界时UT1差不超过±0.9s（通过闰秒调整）。UT1不是均匀时间系统。", tags:["时间系统","关系"] },
        { id:"q044", difficulty:"hard", type:"single", question:"GPS中常用的协议坐标系有哪些？", options:["A. 仅WGS-84","B. 协议天球坐标系和协议地球坐标系","C. 仅ECI","D. 仅ECEF"], answer:1, explanation:"GPS中常用的协议坐标系包括协议天球坐标系（用于描述卫星轨道）和协议地球坐标系（用于表达地面站位置）。", tags:["坐标系","协议坐标系"] },
        { id:"q045", difficulty:"hard", type:"single", question:"GPS系统时间是如何定义的？", options:["A. 直接使用接收机时钟","B. 在计算PVT时确定与GPS系统时的偏差tu并修正","C. 使用卫星发射时刻的时间","D. 使用导航电文中的UTC时间"], answer:1, explanation:"在计算用户PVT时确定其与GPS系统时的偏差tu，将这个偏差加到接收机时钟的时间trcv上便计算出GPS系统时。", tags:["时间系统","GPS时"] },
        { id:"q046", difficulty:"hard", type:"single", question:"天球坐标系的Z轴指向什么？", options:["A. 地球质心","B. 春分点","C. 天球北极（北天极）","D. 格林尼治子午线"], answer:2, explanation:"天球空间直角坐标系的Z轴指向天球的北极Pn，X轴指向春分点，Y轴与X、Z轴构成右手坐标系。", tags:["天球坐标系"] },
        { id:"q047", difficulty:"hard", type:"single", question:"接收机时钟误差属于什么类型的偏差？", options:["A. 独立测量误差","B. 公共时钟偏差","C. 随机误差","D. 系统误差无法消除"], answer:1, explanation:"接收机时钟误差对每次测量均是相同的，属于公共时钟偏差。这种偏差能够通过求解方程被消除或补偿掉。", tags:["时钟误差","公共偏差"] },
        { id:"q048", difficulty:"hard", type:"single", question:"在独立测量误差存在时，三个测距圆的交会结果是什么？", options:["A. 交于一点","B. 不相交，形成三角区域","C. 交于两点","D. 完全重合"], answer:1, explanation:"在独立测量误差存在的情况下，三个测距圆不相交于一点，而是一个三角区域，即存在定位误差。", tags:["定位误差","测距圆"] }
      ]
    },
    // ==================== 第5章 GPS卫星运动理论 ====================
    {
      id:"ch05", title:"第5章 GPS卫星运动理论", qCount:16,
      questions:[
        { id:"q049", difficulty:"easy", type:"single", question:"开普勒第一定律的内容是什么？", options:["A. 卫星轨道为圆形","B. 卫星轨道为椭圆，地球质心在焦点上","C. 卫星轨道为抛物线","D. 卫星轨道为双曲线"], answer:1, explanation:"开普勒第一定律：卫星运行的轨道为一椭圆，该椭圆的一个焦点与地球质心重合。", tags:["开普勒定律","第一定律"] },
        { id:"q050", difficulty:"easy", type:"single", question:"根据开普勒第二定律，卫星在何处速度最大？", options:["A. 远地点","B. 近地点","C. 升交点","D. 降交点"], answer:1, explanation:"开普勒第二定律：地心向径在单位时间内扫过的面积相等，因此卫星在近地点处速度最大，远地点处速度最小。", tags:["开普勒定律","第二定律"] },
        { id:"q051", difficulty:"easy", type:"single", question:"开普勒轨道参数共有几个？", options:["A. 4个","B. 5个","C. 6个","D. 7个"], answer:2, explanation:"开普勒轨道参数（轨道根数）共6个：长半径as、偏心率es、升交点赤经Ω、轨道倾角i、近地点角距ωs、真近点角fs。", tags:["轨道参数","开普勒根数"] },
        { id:"q052", difficulty:"easy", type:"single", question:"卫星星历是什么？", options:["A. 卫星发射功率","B. 描述卫星运动轨道的信息","C. 卫星天线方向图","D. 卫星重量参数"], answer:1, explanation:"卫星星历是描述卫星运动轨道的信息，是一组对应某一时刻的轨道参数及其变率，可用于计算任一时刻卫星位置及速度。", tags:["卫星星历","定义"] },
        { id:"q053", difficulty:"medium", type:"single", question:"开普勒第三定律的内容是什么？", options:["A. 卫星质量与周期成正比","B. 周期平方与轨道长半径立方之比为常数","C. 卫星速度与轨道高度成正比","D. 轨道倾角决定运行周期"], answer:1, explanation:"开普勒第三定律：卫星运行周期的平方与轨道椭圆长半径的立方之比为一常量，等于GM的倒数。长半径确定后，平均角速度也随之确定。", tags:["开普勒定律","第三定律"] },
        { id:"q054", difficulty:"medium", type:"single", question:"在6个开普勒轨道参数中，哪个是唯一随时间变化的？", options:["A. 长半径as","B. 偏心率es","C. 轨道倾角i","D. 真近点角fs"], answer:3, explanation:"6个开普勒轨道参数中，只有真近点角fs是时间的函数，其余均为常数。卫星瞬时位置计算的关键在于计算真近点角。", tags:["轨道参数","真近点角"] },
        { id:"q055", difficulty:"medium", type:"single", question:"卫星除受地球引力外还受到哪些力的影响？", options:["A. 仅太阳引力","B. 摄动力（日月引力、大气阻力、光压等）","C. 仅大气阻力","D. 仅地球潮汐力"], answer:1, explanation:"卫星除受地球重力场引力外，还受摄动力影响：日月引力、大气阻力、光辐射压力和地球潮汐力。摄动力作用下的运动称为受摄运动。", tags:["摄动力","轨道扰动"] },
        { id:"q056", difficulty:"medium", type:"single", question:"广播星历（预报星历）的精度一般为多少？", options:["A. 1-5m","B. 数厘米","C. 20-40m","D. 100m以上"], answer:2, explanation:"预报星历（广播星历）精度一般为20-40m。后处理星历（精密星历）精度可达分米级。", tags:["卫星星历","精度"] },
        { id:"q057", difficulty:"medium", type:"single", question:"广播星历多长时间更新一次？", options:["A. 每小时","B. 每天","C. 每周","D. 每月"], answer:0, explanation:"GPS卫星发播的广播星历每小时更新一次，以保证预报星历的必要精度。", tags:["卫星星历","更新频率"] },
        { id:"q058", difficulty:"medium", type:"single", question:"GPS广播星历共包含多少个参数？", options:["A. 6个","B. 16个","C. 24个","D. 32个"], answer:1, explanation:"GPS广播星历包含16个参数：1个参考时刻、6个开普勒轨道参数和9个反映摄动力影响的参数。", tags:["广播星历","参数数量"] },
        { id:"q059", difficulty:"hard", type:"single", question:"中心力和摄动力的本质区别是什么？", options:["A. 中心力是假设地球为均质球体的引力，摄动力为非中心力","B. 中心力是日月引力，摄动力是地球引力","C. 中心力不决定卫星运动规律","D. 两者没有区别"], answer:0, explanation:"中心力是假设地球为均质球体的引力（质量集中于球心），决定卫星运动基本规律。摄动力（非中心力）使卫星运动偏离理想轨道。", tags:["中心力","摄动力"] },
        { id:"q060", difficulty:"hard", type:"single", question:"计算GPS卫星位置时，以下哪个步骤是正确的第一步？", options:["A. 计算升交点经度","B. 计算真近点角fs","C. 直接计算ECEF坐标","D. 计算轨道倾角"], answer:1, explanation:"GPS卫星坐标计算的第一步是计算真近点角fs，然后依次计算升交距角及摄动改正项、卫星地心距离、轨道坐标等。", tags:["卫星位置","计算步骤"] },
        { id:"q061", difficulty:"hard", type:"single", question:"预报星历和后处理星历的主要区别是什么？", options:["A. 预报星历精度更高","B. 后处理星历是事后精密计算的，精度可达分米级","C. 两者完全相同","D. 预报星历不需要更新"], answer:1, explanation:"预报星历（广播星历）是实时外推的，精度20-40m。后处理星历（精密星历）根据精密观测资料事后计算，精度可达分米级。", tags:["卫星星历","比较"] },
        { id:"q062", difficulty:"hard", type:"single", question:"卫星在轨道上受到的各种作用力中，什么力影响为主？", options:["A. 太阳引力","B. 大气阻力","C. 地球引力场","D. 太阳光压"], answer:2, explanation:"在各种作用力对卫星运行轨道的影响中，地球引力场的影响为主。", tags:["轨道力学","地球引力"] }
      ]
    },
    // ==================== 第6章 伪随机码理论 ====================
    {
      id:"ch06", title:"第6章 伪随机码理论", qCount:14,
      questions:[
        { id:"q063", difficulty:"easy", type:"single", question:"伪随机码由什么电路产生？", options:["A. 锁相环","B. 多级反馈移位寄存器","C. 计数器","D. 振荡器"], answer:1, explanation:"伪随机码利用多级反馈移位寄存器产生，具有周期性、可预见性和良好相关性。", tags:["伪随机码","移位寄存器"] },
        { id:"q064", difficulty:"easy", type:"single", question:"C/A码的全称是什么？", options:["A. Code/Acquisition","B. Coarse/Acquisition Code","C. Common/Acquisition","D. Capture/Acquisition"], answer:1, explanation:"C/A码是Coarse/Acquisition Code（粗/捕获码）的缩写。", tags:["C/A码","名词解释"] },
        { id:"q065", difficulty:"easy", type:"single", question:"PRN的全称是什么？", options:["A. Precise Range Navigation","B. Pseudo Random Noise Code","C. Pseudo Range Navigation","D. Precise Radio Navigation"], answer:1, explanation:"PRN是Pseudo Random Noise Code（伪随机噪声码）的缩写。", tags:["PRN","名词解释"] },
        { id:"q066", difficulty:"medium", type:"single", question:"C/A码的码率是多少？周期约多长？", options:["A. 10.23MHz, 7天","B. 1.023MHz, 1ms（1023码元）","C. 50bps, 30s","D. 5.115MHz, 1s"], answer:1, explanation:"C/A码码率1.023MHz，周期约1ms，共1023个码元。P码码率10.23MHz。", tags:["C/A码","码率"] },
        { id:"q067", difficulty:"medium", type:"single", question:"伪随机码测距的基本原理是什么？", options:["A. 相位比较","B. 相关接收（复现码与接收码对齐）","C. 频率测量","D. 功率检测"], answer:1, explanation:"接收机产生与卫星相同的复现码，在时间上移动直到与接收到的测距码相关为止，从而测出信号传播时间。", tags:["测距原理","相关接收"] },
        { id:"q068", difficulty:"medium", type:"single", question:"m序列伪随机码在一个周期内，0和1的个数关系是什么？", options:["A. 0和1个数相等","B. 0比1多1个","C. 0比1少1次","D. 随机分布"], answer:2, explanation:"伪随机码在一个周期内，0个数比1少一次。r级移位寄存器周期为T=(2^r-1)t0。", tags:["伪随机码","m序列"] },
        { id:"q069", difficulty:"medium", type:"single", question:"同一组对齐的伪随机码的自相关系数为多少？", options:["A. 0","B. 1/n","C. 1","D. -1"], answer:2, explanation:"对齐的同一组码间的自相关系数为1。不同码（包括未对齐的码）间的相关系数为0或1/n。", tags:["伪随机码","自相关"] },
        { id:"q070", difficulty:"medium", type:"single", question:"GPS中伪码扩频的优点不包括什么？", options:["A. 提高抗干扰能力","B. 增大发射功率","C. 改善接收信噪比","D. 实现码分多址"], answer:1, explanation:"伪码扩频优点：提高抗干扰能力、改善信噪比、实现码分多址、传送导航电文。不增大发射功率。", tags:["扩频技术","优点"] },
        { id:"q071", difficulty:"hard", type:"single", question:"伪距中包含哪些成分？", options:["A. 仅几何距离","B. 几何距离+用户钟差+卫星钟差","C. 仅用户钟差","D. 仅卫星钟差"], answer:1, explanation:"伪距包括：1)卫星到用户的几何距离；2)系统时与用户时钟偏差；3)系统时与卫星时钟偏差。", tags:["伪距","组成"] },
        { id:"q072", difficulty:"hard", type:"single", question:"为什么通常先捕获C/A码再捕获P码？", options:["A. C/A码精度更高","B. P码码长极长（6.19×10^12bit）难以直接搜索","C. C/A码信号更强","D. P码不公开"], answer:1, explanation:"P码码长极长约6.19×10^12bit，以50码元/秒搜索需约14×10^15天，无法直接捕获。因此先捕获C/A码获取导航电文信息，再捕获P码。", tags:["C/A码","P码","捕获策略"] },
        { id:"q073", difficulty:"hard", type:"single", question:"GPS中扩频是如何实现的？", options:["A. 直接用50Hz D码调制载波","B. 用50Hz D码先调制PRN码（一级），再调制载波（二级）","C. 用扩频码直接替换载波","D. 用两个载波频率同时发送"], answer:1, explanation:"GPS扩频：第一级用50Hz D码调制PRN码，第二级用组合码调制L波段载波（BPSK），实现二级调制。", tags:["扩频","实现方式"] },
        { id:"q074", difficulty:"hard", type:"single", question:"P码的测距精度比C/A码高约多少？", options:["A. 2倍","B. 5倍","C. 约10倍","D. 相同"], answer:2, explanation:"P码码元宽度为C/A码的1/10，对应空间距离精度约高10倍（P码：0.293-2.93m，C/A码：2.9-29.3m）。", tags:["P码","C/A码","测距精度"] },
        { id:"q075", difficulty:"hard", type:"single", question:"二进制随机序列与伪随机序列的区别是什么？", options:["A. 无区别","B. 随机序列不能预先确定和复制；伪随机序列可预见可复制","C. 伪随机序列完全随机","D. 随机序列具有周期性"], answer:1, explanation:"随机序列是非周期的，不能预先确定和复制，1和0出现概率均为1/2。伪随机序列利用移位寄存器产生，具有周期性、可预见性和良好相关性。", tags:["随机序列","伪随机序列"] },
        { id:"q076", difficulty:"hard", type:"single", question:"GPS卫星信号采用什么调制方式？", options:["A. AM调幅","B. FM调频","C. BPSK（二进制相移键控）","D. QAM"], answer:2, explanation:"GPS采用BPSK（二进制相移键控）调制，将导航电文经伪随机码扩频后对L频段载波进行调制。", tags:["BPSK","调制方式"] }
      ]
    },
    // ==================== 第7章 位置速度计算 ====================
    {
      id:"ch07", title:"第7章 位置速度计算", qCount:14,
      questions:[
        { id:"q077", difficulty:"easy", type:"single", question:"测码伪距观测方程中有几个未知量？", options:["A. 2个","B. 3个","C. 4个（xu,yu,zu,tu）","D. 5个"], answer:2, explanation:"测码伪距方程中有4个未知量：用户坐标xu,yu,zu和接收机时钟误差tu，因此需要至少4颗卫星。", tags:["伪距方程","未知量"] },
        { id:"q078", difficulty:"easy", type:"single", question:"多普勒效应是指什么？", options:["A. 信号衰减","B. 发射源与接收体相对运动时接收频率变化","C. 电离层延迟","D. 多路径反射"], answer:1, explanation:"多普勒效应：发射源与接收体之间存在相对运动时，接收频率与发射频率不相同的现象，差值称为多普勒频移。", tags:["多普勒效应"] },
        { id:"q079", difficulty:"medium", type:"single", question:"GPS线性化伪距方程采用什么数学方法？", options:["A. 傅里叶展开","B. 泰勒级数展开","C. 拉普拉斯变换","D. 傅里叶变换"], answer:1, explanation:"将伪距方程组按泰勒级数展开，将位置偏差表示为已知坐标与伪距测量的线性函数。", tags:["线性化","泰勒级数"] },
        { id:"q080", difficulty:"medium", type:"single", question:"当可见星超过4颗时如何求解用户位置？", options:["A. 只用其中4颗","B. 用伪逆（最小二乘）求解超定方程","C. 取平均值","D. 选择信号最强的4颗"], answer:1, explanation:"当可见星数超过4颗时，方程为超定方程，解为Δx=(H^T H)^(-1) H^T Δρ，即最小二乘解。", tags:["超定方程","最小二乘"] },
        { id:"q081", difficulty:"medium", type:"single", question:"利用多普勒频移可以求解什么？", options:["A. 用户位置","B. 用户速度","C. 卫星轨道","D. 大气延迟"], answer:1, explanation:"利用多普勒频移观测可以求解用户三维速度和接收机时钟漂移。", tags:["多普勒","测速"] },
        { id:"q082", difficulty:"medium", type:"single", question:"超定方程的物理含义是什么？", options:["A. 方程无解","B. 对同一事物多次含误差测量后平均求解","C. 方程有唯一解","D. 方程有无穷多解"], answer:1, explanation:"超定方程的物理含义是对同一事物进行多次含有误差的测量，进行平均求解，是工程中常用方法。", tags:["超定方程","物理含义"] },
        { id:"q083", difficulty:"medium", type:"single", question:"GPS位置求解一般需要迭代几次？", options:["A. 1次","B. 3-5次","C. 10次以上","D. 不需要迭代"], answer:1, explanation:"位置求解需要迭代进行直到误差足够小，一般情况下迭代3至5次即可收敛。", tags:["位置求解","迭代"] },
        { id:"q084", difficulty:"hard", type:"single", question:"线性化伪距方程中方向余弦ajx代表什么？", options:["A. 卫星位置","B. (xj-x̂u)/r̂j，即用户指向卫星的单位矢量在x方向的分量","C. 用户速度分量","D. 接收机钟差"], answer:1, explanation:"方向余弦ajx=(xj-x̂u)/r̂j，表示从用户近似位置指向卫星的单位矢量在x方向的分量。", tags:["方向余弦","线性化"] },
        { id:"q085", difficulty:"hard", type:"single", question:"多普勒观测方程中需要求解几个未知数？", options:["A. 3个（速度分量）","B. 4个（三维速度+时钟漂移）","C. 6个","D. 2个"], answer:1, explanation:"多普勒观测方程有4个未知数：用户速度的三个分量和接收机时钟漂移，需至少4颗卫星的多普勒测量。", tags:["多普勒","未知量"] },
        { id:"q086", difficulty:"hard", type:"single", question:"关于矩阵方程解的情况，以下说法正确的是？", options:["A. m<n时为超定方程","B. m>n且rank(A)=n时为超定方程，用伪逆求解","C. m=n时必定无解","D. 超定方程无法求解"], answer:1, explanation:"m>n且rank(A)=n时为超定方程，可利用矩阵广义逆求出唯一解x=(A^T A)^(-1) A^T b。", tags:["矩阵方程","超定"] }
      ]
    },
    // ==================== 第8章 GPS信号结构及导航电文 ====================
    {
      id:"ch08", title:"第8章 GPS信号结构及导航电文", qCount:16,
      questions:[
        { id:"q087", difficulty:"easy", type:"single", question:"GPS卫星信号由哪三部分组成？", options:["A. 载波、测距码、导航电文","B. 载波、编码、数据","C. L1、L2、L5","D. C/A码、P码、M码"], answer:0, explanation:"GPS卫星发射的信号由载波（L1、L2）、测距码（C/A码和P码）和导航电文三部分组成。", tags:["信号结构","组成"] },
        { id:"q088", difficulty:"easy", type:"single", question:"导航电文的码率是多少？", options:["A. 10 b/s","B. 50 b/s","C. 100 b/s","D. 1000 b/s"], answer:1, explanation:"卫星导航电文码率为50 b/s，是一种不归零二进制码组成的编码脉冲串。", tags:["导航电文","码率"] },
        { id:"q089", difficulty:"easy", type:"single", question:"C/A码是什么类型的序列？", options:["A. 纯m序列","B. Gold序列","C. Kasami序列","D. Barker序列"], answer:1, explanation:"C/A码是由两个10级反馈移位寄存器产生的Gold序列（两个结构不同的m序列相乘）。", tags:["C/A码","Gold序列"] },
        { id:"q090", difficulty:"medium", type:"single", question:"一帧完整的导航电文包含多少比特？播发时间多长？", options:["A. 300bit, 6s","B. 1500bit, 30s","C. 37500bit, 12.5min","D. 7500bit, 2.5min"], answer:1, explanation:"一帧完整导航电文（主帧）1500比特（5个子帧×300bit），播发30s。完整导航信息由25帧组成。", tags:["导航电文","帧结构"] },
        { id:"q091", difficulty:"medium", type:"single", question:"TLM（遥测码）的作用是什么？", options:["A. 提供卫星位置","B. 作为捕获导航电文的前导和同步","C. 提供大气数据","D. 辅助从C/A码转换到P码"], answer:1, explanation:"TLM（遥测码）是每个子帧的第1个字，作为捕获导航电文的前导，为各子帧提供同步起点。", tags:["TLM","导航电文"] },
        { id:"q092", difficulty:"medium", type:"single", question:"HOW（转换码）的作用是什么？", options:["A. 提供星历数据","B. 辅助用户从C/A码转换到P码","C. 提供时间参数","D. 提供卫星健康信息"], answer:1, explanation:"HOW（转换码）是每个子帧的第2个字，辅助用户从捕获的C/A码转换到捕获P码。", tags:["HOW","导航电文"] },
        { id:"q093", difficulty:"medium", type:"single", question:"导航电文第2数据块包含什么内容？", options:["A. 历书数据","B. GPS卫星星历","C. UTC数据","D. 电离层模型参数"], answer:1, explanation:"第2数据块（第2和第3子帧）主要内容为GPS卫星星历，提供计算卫星运行位置的信息。", tags:["导航电文","星历","第2数据块"] },
        { id:"q094", difficulty:"medium", type:"single", question:"历书数据与星历数据的主要区别是什么？", options:["A. 无区别","B. 历书粗略（有效期数月），星历精确（有效期数小时）","C. 历书更精确","D. 星历由所有卫星播发"], answer:1, explanation:"历书数据提供粗略轨道位置，有效期可达数月，用于快速确定可见星。星历数据精度更高，每颗卫星只播发自身星历，有效期仅数小时。", tags:["历书","星历","区别"] },
        { id:"q095", difficulty:"hard", type:"single", question:"子帧1、2、3的内容多久更新一次？子帧4、5呢？", options:["A. 都每小时更新","B. 子帧1-3每小时更新，子帧4-5仅注入时更新","C. 都每天更新","D. 都每次注入时更新"], answer:1, explanation:"子帧1、2、3的内容每小时更新一次；子帧4、5的内容仅在地面注入站给卫星注入新的导航电文后才更新。", tags:["导航电文","更新频率"] },
        { id:"q096", difficulty:"hard", type:"single", question:"GPS卫星导航电文包含以下哪些内容？", options:["A. 仅星历数据","B. 历书、星历、时间数据、大气延迟、健康信息","C. 仅时间数据","D. 仅卫星健康信息"], answer:1, explanation:"GPS导航电文包含：历书数据、星历数据、信号时间数据、大气延迟数据、卫星健康信息。", tags:["导航电文","内容"] },
        { id:"q097", difficulty:"hard", type:"single", question:"$GPGGA语句表示什么？", options:["A. 卫星PRN数据","B. 全球定位数据","C. 运输定位数据","D. 地面速度信息"], answer:1, explanation:"$GPGGA表示全球定位数据（GPS Fixed Data），是NMEA-0183标准中最常用的语句之一。", tags:["NMEA","GPGGA"] },
        { id:"q098", difficulty:"hard", type:"single", question:"$GPRMC语句表示什么？", options:["A. 全球定位数据","B. 卫星状态信息","C. 运输定位数据（最小推荐数据）","D. 大地坐标信息"], answer:2, explanation:"$GPRMC表示运输定位数据（Recommended Minimum Specific GPS/TRANSIT Data），包含时间、位置、速度等最基本导航信息。", tags:["NMEA","GPRMC"] }
      ]
    },
    // ==================== 第9章 北斗信号结构及导航电文 ====================
    {
      id:"ch09", title:"第9章 北斗信号结构及导航电文", qCount:6,
      questions:[
        { id:"q099", difficulty:"easy", type:"single", question:"北斗卫星导航系统是由哪个国家开发的？", options:["A. 美国","B. 俄罗斯","C. 中国","D. 日本"], answer:2, explanation:"北斗卫星导航系统（BDS）是中国自主研发的全球卫星导航系统。", tags:["北斗","系统概况"] },
        { id:"q100", difficulty:"easy", type:"single", question:"北斗三号系统已于哪一年完成全球组网？", options:["A. 2012年","B. 2018年","C. 2020年","D. 2024年"], answer:2, explanation:"北斗三号全球卫星导航系统于2020年7月正式建成开通，完成全球组网。", tags:["北斗","组网时间"] },
        { id:"q101", difficulty:"medium", type:"single", question:"北斗系统区别于GPS的独特功能是？", options:["A. 更高定位精度","B. 短报文通信","C. 更多卫星数量","D. 双频信号"], answer:1, explanation:"北斗系统具有短报文通信功能，允许用户通过卫星发送短消息，这是GPS不具备的独特功能。", tags:["北斗","短报文"] },
        { id:"q102", difficulty:"medium", type:"single", question:"北斗系统使用的信号频段包括？", options:["A. 仅L波段","B. B1、B2、B3等多个频段","C. 仅S波段","D. 仅C波段"], answer:1, explanation:"北斗系统使用B1、B2、B3等多个频段发射导航信号，提供多频服务。", tags:["北斗","信号频段"] },
        { id:"q103", difficulty:"hard", type:"single", question:"GPS导航电文与北斗导航电文在结构上的区别是？", options:["A. 完全相同","B. GPS用帧/子帧结构，北斗用超帧/主帧/子帧的D1/D2导航电文","C. 北斗不使用导航电文","D. GPS导航电文更复杂"], answer:1, explanation:"GPS使用帧/子帧结构。北斗D1导航电文采用超帧/主帧/子帧结构，D2导航电文也有其特定结构。", tags:["北斗","导航电文","结构差异"] },
        { id:"q104", difficulty:"hard", type:"single", question:"北斗卫星导航系统为全球用户提供哪些服务？", options:["A. 仅定位","B. 定位、导航、授时（PNT）","C. 仅授时","D. 仅通信"], answer:1, explanation:"北斗系统为全球用户提供定位、导航、授时（PNT）服务，并为亚太地区提供短报文通信等特色服务。", tags:["北斗","服务类型"] }
      ]
    },
    // ==================== 第10章 测码伪距观测方程 ====================
    {
      id:"ch10", title:"第10章 测码伪距观测方程", qCount:8,
      questions:[
        { id:"q105", difficulty:"medium", type:"single", question:"GPS绝对定位的实质是什么？", options:["A. 空间距离前方交会","B. 空间距离后方交会","C. 三点定位","D. 多普勒定位"], answer:1, explanation:"GPS绝对定位方法的实质是测量学中的空间距离后方交会。以卫星为已知点，确定接收机位置。", tags:["绝对定位","后方交会"] },
        { id:"q106", difficulty:"medium", type:"single", question:"伪距与真实几何距离的关系是什么？", options:["A. 伪距=几何距离","B. 伪距=几何距离+c*(δti-δtj)+电离层延迟+对流层延迟","C. 伪距<几何距离","D. 伪距=几何距离-光速"], answer:1, explanation:"伪距=几何距离+c*(接收机钟差δti-卫星钟差δtj)+电离层延迟+对流层延迟。", tags:["伪距","观测方程"] },
        { id:"q107", difficulty:"medium", type:"single", question:"GPS观测量包括以下哪项？", options:["A. 仅码相位伪距","B. 码相位、载波相位、积分多普勒、干涉法","C. 仅载波相位","D. 仅信号功率"], answer:1, explanation:"GPS观测量包括：码相位观测伪距、载波相位观测伪距、积分多普勒计数伪距、干涉法测量时间延迟。", tags:["GPS观测量","类型"] },
        { id:"q108", difficulty:"hard", type:"single", question:"静态绝对定位的优势是什么？", options:["A. 速度快","B. 可在不同历元同步观测不同卫星，用最小二乘提高精度","C. 不需要计算","D. 实时性高"], answer:1, explanation:"静态绝对定位时观测站固定，可在不同历元同步观测不同卫星，取得更多伪距观测量，通过最小二乘平差提高定位精度。", tags:["静态定位","优势"] },
        { id:"q109", difficulty:"hard", type:"single", question:"利用伪距单站单机测时需要几颗卫星？", options:["A. 1颗（已知坐标时）","B. 2颗","C. 3颗","D. 4颗"], answer:0, explanation:"当观测站坐标已知时，只需1颗卫星即可确定接收机钟差。若坐标未知则至少4颗。", tags:["测时","单站单机"] }
      ]
    },
    // ==================== 第11章 测相伪距观测方程 ====================
    {
      id:"ch11", title:"第11章 测相伪距观测方程", qCount:6,
      questions:[
        { id:"q110", difficulty:"medium", type:"single", question:"载波相位测量是测量什么？", options:["A. 信号传播时间","B. 接收信号与参考信号的相位差","C. 信号强度","D. 多普勒频移"], answer:1, explanation:"载波相位观测是测量接收机接收到具有多普勒频移的载波信号与接收机参考载波信号之间的相位差。", tags:["载波相位","测量原理"] },
        { id:"q111", difficulty:"medium", type:"single", question:"载波相位测量需要解决什么关键问题？", options:["A. 信号强度","B. 整周模糊度（整周未知数）","C. 频率漂移","D. 多径效应"], answer:1, explanation:"载波相位测量需要解决整周模糊度（整周未知数）问题，即确定载波相位观测中的整周计数。", tags:["整周模糊度"] },
        { id:"q112", difficulty:"hard", type:"single", question:"载波相位测量的精度远高于伪码测量，原因是什么？", options:["A. 不需要卫星信号","B. L1载波波长约19cm，相位测量精度可达毫米级","C. 不需要考虑大气延迟","D. 不需要接收机"], answer:1, explanation:"L1载波波长约19cm（1575.42MHz），相位测量分辨率远高于码相位（C/A码约293m/码元），因此精度更高。", tags:["载波相位","精度"] },
        { id:"q113", difficulty:"hard", type:"single", question:"测相伪距和测码伪距的主要区别在于？", options:["A. 无区别","B. 测相精度更高但需解整周模糊度；测码无模糊度但精度较低","C. 测码精度更高","D. 测相不需要卫星"], answer:1, explanation:"测相伪距精度高（毫米级）但需解整周模糊度；测码伪距无模糊问题但精度较低（米级）。", tags:["测相伪距","测码伪距","区别"] }
      ]
    },
    // ==================== 第12章 接收机组成与工作原理 ====================
    {
      id:"ch12", title:"第12章 接收机组成与工作原理", qCount:6,
      questions:[
        { id:"q114", difficulty:"easy", type:"single", question:"GPS接收机的基本功能包括？", options:["A. 仅选择卫星","B. 选择卫星、获取信号、测量跟踪、恢复导航信息","C. 仅测量跟踪","D. 仅恢复信息"], answer:1, explanation:"接收机功能：选择视界内卫星、获取卫星信号、测量和跟踪卫星、恢复导航信息。", tags:["接收机","功能"] },
        { id:"q115", difficulty:"medium", type:"single", question:"双频接收机的主要优点是什么？", options:["A. 体积更小","B. 可消除电离层延迟","C. 功耗更低","D. 价格更便宜"], answer:1, explanation:"双频接收机利用L1和L2两个频率的观测值组合，可以较好地消除电离层延迟。", tags:["双频接收机","电离层消除"] },
        { id:"q116", difficulty:"medium", type:"single", question:"接收机通道数指的是什么？", options:["A. 卫星数量","B. 可同时跟踪的卫星信号数量","C. 存储容量","D. 电池容量"], answer:1, explanation:"接收机通道数指可同时跟踪处理的卫星信号数量。多通道接收机可同时跟踪多颗卫星。", tags:["接收机","通道"] },
        { id:"q117", difficulty:"hard", type:"single", question:"测地型接收机与导航型接收机的主要区别是什么？", options:["A. 无区别","B. 测地型精度高（厘米级），导航型侧重实时性","C. 导航型精度更高","D. 测地型速度更快"], answer:1, explanation:"测地型接收机精度高（可达厘米级/毫米级），适合精密测量；导航型侧重实时性和便捷性，精度一般为米级。", tags:["接收机","测地型","导航型"] }
      ]
    },
    // ==================== 第13章 卫星导航信号处理 ====================
    {
      id:"ch13", title:"第13章 卫星导航信号处理", qCount:6,
      questions:[
        { id:"q118", difficulty:"medium", type:"single", question:"GPS信号捕获的主要过程是什么？", options:["A. 仅频率搜索","B. 在码相位和频率二维空间搜索信号","C. 仅码相位搜索","D. 直接锁定信号"], answer:1, explanation:"GPS信号捕获需要在码相位（1023个可能的C/A码相位）和频率（考虑多普勒频移）二维空间搜索信号。", tags:["信号捕获","二维搜索"] },
        { id:"q119", difficulty:"medium", type:"single", question:"信号跟踪通常采用什么技术？", options:["A. 开环跟踪","B. 锁相环（PLL）和延迟锁定环（DLL）","C. 手动跟踪","D. 不跟踪"], answer:1, explanation:"GPS信号跟踪通常采用锁相环（PLL）跟踪载波相位，延迟锁定环（DLL）跟踪码相位。", tags:["信号跟踪","PLL","DLL"] },
        { id:"q120", difficulty:"hard", type:"single", question:"伪码扩频处理增益与什么有关？", options:["A. 载波频率","B. 扩频码码率与数据码率之比","C. 信号功率","D. 卫星距离"], answer:1, explanation:"处理增益=扩频码码率/数据码率。C/A码处理增益=1.023MHz/50Hz≈43dB，体现了扩频的抗干扰优势。", tags:["处理增益","扩频"] }
      ]
    },
    // ==================== 第14章 误差分析与码基差分技术 ====================
    {
      id:"ch14", title:"第14章 误差分析与码基差分技术", qCount:14,
      questions:[
        { id:"q121", difficulty:"easy", type:"single", question:"DGPS的全称是什么？", options:["A. Digital GPS","B. Differential GPS 差分GPS","C. Dynamic GPS","D. Dual GPS"], answer:1, explanation:"DGPS是Differential GPS（差分GPS）的缩写，通过参考站提供改正数提高定位精度。", tags:["DGPS","名词解释"] },
        { id:"q122", difficulty:"easy", type:"single", question:"GPS定位误差来源不包括以下哪项？", options:["A. 卫星时钟误差","B. 星历预测误差","C. 太阳黑子活动","D. 大气层效应"], answer:2, explanation:"GPS定位误差来源：卫星时钟误差、星历预测误差、相对论效应、大气层效应、接收机噪声、多路径、SA等。", tags:["误差来源"] },
        { id:"q123", difficulty:"easy", type:"single", question:"RTK技术代表什么？", options:["A. Real Time Kinematic","B. Real Time Keying","C. Radio Time Kinematic","D. Rapid Time Kinematic"], answer:0, explanation:"RTK（Real Time Kinematic）是实时动态载波相位差分技术，能提供厘米级实时定位结果。", tags:["RTK","名词解释"] },
        { id:"q124", difficulty:"medium", type:"single", question:"码基差分技术主要基于什么测量？", options:["A. 载波相位","B. 伪距测量","C. 多普勒频移","D. 信号强度"], answer:1, explanation:"码基差分技术主要基于GPS码测量（伪距测量）。", tags:["码基差分","伪距"] },
        { id:"q125", difficulty:"medium", type:"single", question:"LADGPS和WADGPS分别是什么？", options:["A. 局域DGPS和广域DGPS","B. 陆基和空基DGPS","C. 低频和高频DGPS","D. 线性和加权DGPS"], answer:0, explanation:"LADGPS（局域DGPS）覆盖范围较小；WADGPS（广域DGPS）覆盖范围较大。", tags:["LADGPS","WADGPS"] },
        { id:"q126", difficulty:"medium", type:"single", question:"DGPS数据传输广泛采用的标准格式是？", options:["A. NMEA-0183","B. RTCM SC-104","C. BINEX","D. RINEX"], answer:1, explanation:"DGPS数据广泛采用RTCM SC-104数据格式进行传输。", tags:["RTCM","数据格式"] },
        { id:"q127", difficulty:"medium", type:"single", question:"卫星钟差由哪两部分组成？", options:["A. 偏差和漂移","B. 固定误差和随机误差","C. 系统误差和偶然误差","D. 绝对误差和相对误差"], answer:0, explanation:"卫星钟差由偏差（bias）和漂移（drift）两部分组成。", tags:["卫星钟差","组成"] },
        { id:"q128", difficulty:"hard", type:"single", question:"对流层造成的测距误差范围约为多少？", options:["A. 0.1-1m","B. 2-20m","C. 20-50m","D. 50-100m"], answer:1, explanation:"对流层造成的测距误差在2m~20m之间。利用对流层模型校正一般可消除90%左右。", tags:["对流层","误差"] },
        { id:"q129", difficulty:"hard", type:"single", question:"减小电离层影响的主要方法是什么？", options:["A. 增加接收功率","B. 电离层模型校正和双频接收机","C. 选择高仰角卫星","D. 增加观测时间"], answer:1, explanation:"减小电离层影响的主要方法是利用电离层模型校正和使用双频接收机，一般可消除75%左右。", tags:["电离层","误差校正"] },
        { id:"q130", difficulty:"hard", type:"single", question:"根据参考站提供的DGPS数据不同，可以分为？", options:["A. 位置DGPS和伪距DGPS","B. 码基和载波","C. 静态和动态","D. 实时和后处理"], answer:0, explanation:"根据参考站提供的DGPS数据不同分为位置DGPS测量和伪距DGPS测量。", tags:["DGPS","分类"] },
        { id:"q131", difficulty:"hard", type:"single", question:"差分GPS的基本原理是什么？", options:["A. 增加卫星数量","B. 在已知点设参考站，计算改正数发送给用户","C. 提高信号功率","D. 改变载波频率"], answer:1, explanation:"差分GPS在已知精确坐标的参考站上测量伪距，计算伪距校正值并广播给用户，用户利用校正值修正自己的测量值。", tags:["DGPS","差分原理"] }
      ]
    },
    // ==================== 第15章 电离层与对流层缓解技术 ====================
    {
      id:"ch15", title:"第15章 电离层与对流层缓解技术", qCount:6,
      questions:[
        { id:"q132", difficulty:"medium", type:"single", question:"电离层延迟与信号频率的关系是什么？", options:["A. 与频率无关","B. 与频率的平方成反比","C. 与频率成正比","D. 与频率的平方成正比"], answer:1, explanation:"电离层延迟与信号频率的平方成反比，因此使用双频观测可以消除一阶电离层延迟。", tags:["电离层","频率关系"] },
        { id:"q133", difficulty:"medium", type:"single", question:"对流层延迟与频率的关系是什么？", options:["A. 与频率无关（非色散介质）","B. 与频率成反比","C. 与频率成正比","D. 与频率平方成正比"], answer:0, explanation:"对流层是非色散介质，其对信号延迟与频率无关，因此不能通过双频组合消除，需用模型校正。", tags:["对流层","非色散"] },
        { id:"q134", difficulty:"hard", type:"single", question:"Klobuchar模型用于校正什么？", options:["A. 对流层延迟","B. 电离层延迟","C. 多径效应","D. 卫星钟差"], answer:1, explanation:"Klobuchar模型是GPS广播星历中使用的电离层延迟校正模型，可校正约50%的电离层延迟。", tags:["电离层","Klobuchar模型"] },
        { id:"q135", difficulty:"hard", type:"single", question:"双频消除电离层组合的原理是什么？", options:["A. 两个频率的延迟相同","B. 利用电离层延迟与频率平方成反比，组合消除一阶项","C. 两个频率相位相加","D. 两个频率功率平均"], answer:1, explanation:"电离层延迟与f^2成反比，通过L1和L2的伪距/相位组合可以消除电离层一阶延迟项，是双频接收机的重要优势。", tags:["电离层","双频组合"] }
      ]
    },
    // ==================== 第16章 多径与干扰 ====================
    {
      id:"ch16", title:"第16章 多径与干扰", qCount:6,
      questions:[
        { id:"q136", difficulty:"medium", type:"single", question:"多径效应是指什么？", options:["A. 信号直接到达","B. 信号经反射后通过多条路径到达接收机","C. 信号衰减","D. 信号增强"], answer:1, explanation:"多径效应指卫星信号经地面或建筑物反射后，通过多条路径到达接收机，造成测距误差。", tags:["多径效应","定义"] },
        { id:"q137", difficulty:"medium", type:"single", question:"以下哪项措施不能有效抑制多径效应？", options:["A. 使用扼流圈天线","B. 选择开阔环境观测","C. 增加信号发射功率","D. 使用相关器技术"], answer:2, explanation:"增加信号发射功率不能抑制多径效应。抑制方法包括：扼流圈天线、选择开阔环境、相关器技术、提高卫星截止高度角等。", tags:["多径","抑制方法"] },
        { id:"q138", difficulty:"hard", type:"single", question:"多径效应造成的最大测距误差对C/A码可达多少？", options:["A. 1-2m","B. 10-20m","C. 100m以上","D. 可忽略"], answer:1, explanation:"多径效应对C/A码测距造成的误差可达10-20m，对载波相位测量影响为厘米级（约λ/4）。", tags:["多径","误差量级"] },
        { id:"q139", difficulty:"hard", type:"single", question:"测地型接收机天线通常采用什么设计来抑制多径？", options:["A. 全向天线","B. 扼流圈天线或大地平面天线","C. 鞭状天线","D. 普通贴片天线"], answer:1, explanation:"测地型接收机通常使用扼流圈天线（Choke Ring）或大地平面设计，可有效抑制来自地面的反射信号。", tags:["多径","天线设计"] }
      ]
    },
    // ==================== 第17章 卫星导航性能评估与数据处理 ====================
    {
      id:"ch17", title:"第17章 卫星导航性能评估", qCount:8,
      questions:[
        { id:"q140", difficulty:"medium", type:"single", question:"DOP（精度因子）代表什么？", options:["A. 卫星信号强度","B. 卫星几何分布对定位精度的影响","C. 接收机性能","D. 卫星数量"], answer:1, explanation:"DOP（Dilution of Precision）反映卫星几何分布对定位精度的影响。卫星分布越好，DOP值越小，精度越高。", tags:["DOP","精度因子"] },
        { id:"q141", difficulty:"medium", type:"single", question:"GDOP与什么成反比？", options:["A. 卫星数量","B. 卫星构成的六面体体积","C. 信号功率","D. 接收机灵敏度"], answer:1, explanation:"GDOP与观测站和4颗卫星构成的六面体体积的倒数成正比。体积越大GDOP越小。", tags:["GDOP","卫星几何"] },
        { id:"q142", difficulty:"hard", type:"single", question:"导航系统完好性是指什么？", options:["A. 定位精度","B. 不能正常工作时向用户告警的能力","C. 连续工作时间","D. 信号覆盖范围"], answer:1, explanation:"完好性指当导航系统不能提供导航信息或达不到所需导航精度时，向用户告警的能力。", tags:["完好性","定义"] },
        { id:"q143", difficulty:"hard", type:"single", question:"GDOP最优时卫星应如何分布？", options:["A. 4颗集中在一起","B. 1颗天顶、3颗相距约120°","C. 全部在地平线上","D. 4颗在同一方向"], answer:1, explanation:"一颗卫星处于天顶，其余3颗卫星相距约120°时，六面体体积接近最大，GDOP接近最优。", tags:["GDOP","最优分布"] },
        { id:"q144", difficulty:"hard", type:"single", question:"导航系统的可用性是指什么？", options:["A. 全天24小时可用","B. 满足精度、完好性、连续性的时间与总运行时间的比值","C. 全球任何地点可用","D. 任何天气可用"], answer:1, explanation:"可用性是系统能够满足定位精度、完好性和连续性的时间与系统整个运行时间的比值。", tags:["可用性","定义"] }
      ]
    },
    // ==================== 第18章 卫星导航空间信号质量 ====================
    {
      id:"ch18", title:"第18章 卫星导航空间信号质量", qCount:6,
      questions:[
        { id:"q145", difficulty:"medium", type:"single", question:"卫星导航空间信号质量主要关注哪些方面？", options:["A. 仅信号功率","B. 信号功率、波形质量、频率稳定性等","C. 仅频率稳定性","D. 仅码性能"], answer:1, explanation:"空间信号质量评估包括：信号功率、波形质量、频率稳定性、码性能、带内杂散等多个指标。", tags:["信号质量","评估"] },
        { id:"q146", difficulty:"medium", type:"single", question:"相对论效应对GPS卫星钟的影响是什么？", options:["A. 无影响","B. 卫星钟频率需预先调低以补偿相对论效应","C. 只需考虑狭义相对论","D. 只需考虑广义相对论"], answer:1, explanation:"相对论效应（狭义+广义）使卫星钟频率相对地面变快约38μs/day，因此在卫星发射前将频率调低约0.00457Hz来补偿。", tags:["相对论效应","卫星钟"] },
        { id:"q147", difficulty:"hard", type:"single", question:"GPS信号最低接收功率约为多少？", options:["A. -100dBm","B. 约-160dBW（-130dBm）","C. -50dBm","D. 0dBm"], answer:1, explanation:"GPS L1 C/A码信号到达地面时的最低功率约为-160dBW（-130dBm），远低于热噪声水平，但通过扩频增益仍可解调。", tags:["信号功率"] }
      ]
    },
    // ==================== 第19章 陆基增强系统GBAS ====================
    {
      id:"ch19", title:"第19章 陆基增强系统：GBAS", qCount:8,
      questions:[
        { id:"q148", difficulty:"easy", type:"single", question:"GBAS的全称是什么？", options:["A. Global Based Augmentation System","B. Ground Based Augmentation System","C. General Based Augmentation System","D. GPS Based Augmentation System"], answer:1, explanation:"GBAS是Ground Based Augmentation System（陆基增强系统）。", tags:["GBAS","名词解释"] },
        { id:"q149", difficulty:"medium", type:"single", question:"GBAS由哪些部分组成？", options:["A. 仅地面站","B. 空间部分（GPS）和地面部分（参考接收机、处理站、VDB等）","C. 仅卫星","D. 仅接收机"], answer:1, explanation:"GBAS空间部分基于GPS星座，地面部分包括参考接收机、天线、数据广播发射机和地面处理功能。", tags:["GBAS","组成"] },
        { id:"q150", difficulty:"medium", type:"single", question:"GBAS中VDB代表什么？", options:["A. Very High Data Base","B. VHF Data Broadcast 甚高频数据广播","C. Visual Data Board","D. Vector Data Broadcast"], answer:1, explanation:"VDB是VHF Data Broadcast（甚高频数据广播），用于GBAS地面站向飞机广播差分改正数据。", tags:["GBAS","VDB"] },
        { id:"q151", difficulty:"hard", type:"single", question:"与ILS相比，GBAS的优势不包括什么？", options:["A. 提高终端区和机场容量","B. 降低机场运行成本","C. 不需要地面设备","D. 解决高原机场进近着陆问题"], answer:2, explanation:"GBAS相比ILS需要更复杂的地面设备。其优势包括：提高容量、降低成本、解决高原机场问题、支持多跑道同时服务。", tags:["GBAS","ILS","比较"] },
        { id:"q152", difficulty:"hard", type:"single", question:"GLS与GBAS的关系是什么？", options:["A. 完全无关","B. GLS是利用GBAS技术实现的卫星着陆系统","C. GLS是GBAS的替代品","D. GLS是星基系统"], answer:1, explanation:"GLS（GNSS Landing System）是利用GBAS技术实现的卫星着陆系统，为飞机提供精密进近着陆引导。", tags:["GLS","GBAS"] }
      ]
    },
    // ==================== 第20章 星基增强系统SBAS ====================
    {
      id:"ch20", title:"第20章 星基增强系统：SBAS", qCount:10,
      questions:[
        { id:"q153", difficulty:"easy", type:"single", question:"SBAS的全称是什么？", options:["A. Space Based Augmentation System","B. Satellite Based Augmentation System","C. Standard Based Augmentation System","D. Signal Based Augmentation System"], answer:1, explanation:"SBAS是Satellite Based Augmentation System（星基增强系统）。", tags:["SBAS","名词解释"] },
        { id:"q154", difficulty:"easy", type:"single", question:"美国的SBAS系统叫什么？", options:["A. EGNOS","B. MSAS","C. WAAS","D. GAGAN"], answer:2, explanation:"WAAS（Wide Area Augmentation System）是美国的广域增强系统。", tags:["WAAS","SBAS"] },
        { id:"q155", difficulty:"medium", type:"single", question:"欧洲的SBAS系统叫什么？", options:["A. WAAS","B. EGNOS","C. MSAS","D. GAGAN"], answer:1, explanation:"EGNOS（European Geostationary Navigation Overlay Service）是欧洲的星基增强系统。", tags:["EGNOS","SBAS"] },
        { id:"q156", difficulty:"medium", type:"single", question:"SBAS系统由哪些部分组成？", options:["A. 仅卫星","B. 监测接收机、中心处理站、上行设施、GEO卫星","C. 仅地面站","D. 仅用户接收机"], answer:1, explanation:"SBAS由监测接收机、中心处理站、卫星上行设施和一个或多个GEO卫星组成。", tags:["SBAS","组成"] },
        { id:"q157", difficulty:"medium", type:"single", question:"ICAO定义的增强方式有哪三种？", options:["A. ABAS、GBAS、SBAS","B. WAAS、EGNOS、MSAS","C. LAAS、WAAS、RAIM","D. GPS、GLONASS、Galileo"], answer:0, explanation:"ICAO定义的增强方式有三种：机载增强系统（ABAS）、陆基增强系统（GBAS）和星基增强系统（SBAS）。", tags:["ICAO","增强系统"] },
        { id:"q158", difficulty:"hard", type:"single", question:"RAIM属于哪种增强方式？", options:["A. SBAS","B. GBAS","C. ABAS（机载增强）","D. 无增强"], answer:2, explanation:"RAIM（接收机自主完好性监测）属于机载增强系统（ABAS），通过冗余观测进行完好性监测。", tags:["RAIM","ABAS"] },
        { id:"q159", difficulty:"hard", type:"single", question:"SBAS基本工作原理是什么？", options:["A. 卫星直接定位","B. 参考站监测GPS→中心站计算改正→GEO广播→用户修正","C. 用户自主计算","D. 地面直接广播"], answer:1, explanation:"SBAS工作原理：分布参考站监测GPS卫星→通过GEO数据链发送到中心站→中心站计算差分改正数和完好性信息→通过GEO广播→用户接收修正。", tags:["SBAS","工作原理"] },
        { id:"q160", difficulty:"hard", type:"single", question:"CNS/ATM系统的核心是什么？", options:["A. ILS仪表着陆系统","B. GNSS全球导航卫星系统","C. VOR全向信标","D. DME测距设备"], answer:1, explanation:"CNS/ATM（通讯导航监视/空中交通管理）系统的核心是GNSS，是保障空地一体化、全球连续无隙导航的有效手段。", tags:["CNS/ATM","GNSS"] },
        { id:"q161", difficulty:"hard", type:"single", question:"PBN的含义是什么？", options:["A. Precise Basic Navigation","B. Performance Based Navigation 基于性能的导航","C. Position Based Navigation","D. Public Broadcast Navigation"], answer:1, explanation:"PBN（Performance Based Navigation）是基于性能的导航，代表从基于传感器导航到基于性能导航的转变。", tags:["PBN","名词解释"] }
      ]
    }
  ],
  // 考试大纲 - 按考试复习指南组织
  examOutline: [
    { topic:"GPS基础概念与系统构成", importance:"high", questionIds:["q001","q004","q005","q008","q019","q020","q022","q023"], desc:"导航手段、GPS组成、空间段" },
    { topic:"时间系统与坐标系", importance:"high", questionIds:["q034","q035","q036","q037","q038","q039","q040","q041","q042","q043","q044","q045"], desc:"UTC、ECI、ECEF、WGS-84" },
    { topic:"定位原理（4星定位）", importance:"high", questionIds:["q033","q077","q078","q079","q080","q081","q082","q083"], desc:"伪距方程、线性化、最小二乘" },
    { topic:"开普勒定律与轨道星历", importance:"high", questionIds:["q049","q050","q051","q052","q053","q054","q055","q056","q057","q058","q059","q060"], desc:"三大定律、6根数、广播星历" },
    { topic:"伪随机码与测距", importance:"high", questionIds:["q063","q064","q065","q066","q067","q068","q069","q070","q071","q072","q074","q076"], desc:"C/A码、P码、扩频、相关接收" },
    { topic:"信号结构与导航电文", importance:"high", questionIds:["q087","q088","q089","q090","q091","q092","q093","q094","q095","q096"], desc:"信号组成、帧结构、TLM/HOW" },
    { topic:"载波频率与调制", importance:"medium", questionIds:["q012","q007","q017","q076"], desc:"L1/L2频率、CDMA、BPSK" },
    { topic:"多普勒测速", importance:"medium", questionIds:["q078","q081","q085"], desc:"多普勒效应、速度求解" },
    { topic:"误差与差分技术", importance:"medium", questionIds:["q121","q122","q123","q124","q125","q128","q129","q131"], desc:"DGPS、RTK、电离层、对流层" },
    { topic:"北斗系统特色", importance:"medium", questionIds:["q099","q100","q101","q102","q103","q104"], desc:"北斗组网、短报文、频率" },
    { topic:"增强系统SBAS/GBAS", importance:"low", questionIds:["q148","q149","q153","q154","q155","q156","q157","q158","q159"], desc:"SBAS、GBAS、WAAS、完好性" },
    { topic:"接收机与信号处理", importance:"low", questionIds:["q024","q025","q026","q114","q115","q116","q117","q118","q119"], desc:"接收机分类、信号捕获跟踪" }
  ],
  // 补充题库 — 基于各章PDF深入内容，覆盖原题库未涉及的知识点
  suppQuestions: [
    // === Ch12: 接收机深入 ===
    { id:"s001", difficulty:"medium", type:"single", question:"接收机天线单元主要由哪两部分组成？", options:["A. 接收天线和功率放大器","B. 接收天线和前置放大器","C. 贴片天线和螺旋天线","D. 微带天线和滤波器"], answer:1, explanation:"天线单元由接收机天线和前置放大器两部分组成。天线接收电磁波并转化为电流，前置放大器放大信号电流并进行变频处理。", tags:["接收机","天线单元"], source:"Ch12" },
    { id:"s002", difficulty:"medium", type:"single", question:"贴片天线相对于四螺旋天线的优势是什么？", options:["A. 对低仰角卫星接收能力更强","B. 结构简单、成本低廉、抗多径能力强","C. 灵敏度更高","D. 体积更大"], answer:1, explanation:"贴片天线结构简单、成本低且抗多径能力强，但对低仰角卫星接收能力不强。四螺旋天线灵敏度更高但更易受多径影响。", tags:["天线类型","贴片天线"], source:"Ch12" },
    { id:"s003", difficulty:"hard", type:"single", question:"接收机射频前端下变频混频的主要作用是什么？", options:["A. 提高信号功率","B. 将射频信号频率降低到中频","C. 直接解调导航电文","D. 滤除多径信号"], answer:1, explanation:"下变频混频通过混频器将射频信号与本振信号相乘，滤除高频成分后载波频率从射频降至中频，同时保留全部调制信息。", tags:["射频前端","下变频"], source:"Ch12" },
    { id:"s004", difficulty:"medium", type:"single", question:"序贯通道的主要优点是什么？", options:["A. 能连续跟踪每颗卫星","B. 结构简单、各通道无延迟误差","C. 信噪比高","D. 能提取导航电文"], answer:1, explanation:"序贯通道（1个通道跟踪多颗星）优点：结构简单、各卫星信号延迟相同无通道间延迟误差。缺点：无法提取导航电文、无法连续跟踪载波。", tags:["信号通道","序贯通道"], source:"Ch12" },
    { id:"s005", difficulty:"medium", type:"single", question:"多通道接收机的主要缺点是什么？", options:["A. 不能连续跟踪","B. 各通道间存在信号延迟误差","C. 无法测量伪距","D. 成本低"], answer:1, explanation:"多通道（1通道跟踪1颗星）优点：不间断跟踪、高信噪比。缺点：通道间存在延迟误差、结构复杂成本高。", tags:["信号通道","多通道"], source:"Ch12" },
    { id:"s006", difficulty:"hard", type:"single", question:"ADC采样率为什么不能与扩频码速率成整数倍关系？", options:["A. 会降低信噪比","B. 接收机将对一定时间偏移不敏感，损失定位精度","C. 会增加功耗","D. 会导致码相位模糊"], answer:1, explanation:"采样率与码速率成整数倍时，接收机对特定时间偏移内的采样结果完全相同，导致定位精度损失。还需考虑码多普勒的影响。", tags:["ADC","采样率"], source:"Ch12" },
    { id:"s007", difficulty:"hard", type:"single", question:"平方型信号通道的主要局限性是什么？", options:["A. 成本高","B. 仅获取二倍载频的重建载波，无法获取导航电文","C. 功耗大","D. 无法测量伪距"], answer:1, explanation:"平方型通道用自乘电路仅获取二倍原载频的重建载波，抑制了数据码，无法获取卫星导航电文。码相位通道也类似受限。", tags:["信号通道","平方型"], source:"Ch12" },
    { id:"s008", difficulty:"easy", type:"single", question:"接收机微处理器的主要功能不包括？", options:["A. 控制信号捕获和跟踪","B. 完成用户位置和速度计算","C. 发射导航信号","D. 完成坐标转换和输入输出"], answer:2, explanation:"微处理器通过指令控制信号处理器完成捕获跟踪，应用导航参数完成用户位置速度计算、坐标转换和输入输出。不发射信号。", tags:["微处理器","接收机"], source:"Ch12" },
    // === Ch13: 信号处理深入 ===
    { id:"s009", difficulty:"medium", type:"single", question:"卫星信号捕获本质上是什么过程？", options:["A. 对载波频率和码相位进行二维搜索","B. 直接测量信号功率","C. 对信号进行滤波","D. 直接解算位置"], answer:0, explanation:"信号捕获通过对载波频率和码相位的二维扫描搜索，粗略估计这两个参数值，用于初始化跟踪环路。", tags:["信号捕获","二维搜索"], source:"Ch13" },
    { id:"s010", difficulty:"hard", type:"single", question:"并行频率空间搜索捕获算法利用什么变换？", options:["A. 小波变换","B. 傅里叶变换(FFT)","C. 拉普拉斯变换","D. Z变换"], answer:1, explanation:"并行频率空间搜索利用傅里叶变换将时域信号转换到频域，本地码对齐时输出连续波，通过FFT找出载波频率。", tags:["捕获算法","FFT"], source:"Ch13" },
    { id:"s011", difficulty:"hard", type:"single", question:"并行码相位搜索捕获算法相比串行搜索的主要优势是什么？", options:["A. 实现更简单","B. 只需对约41个频点搜索，大大加快速度","C. 不需要傅里叶变换","D. 精度更高"], answer:1, explanation:"并行码相位捕获用FFT将时域圆周相关变为频域乘积，只需搜索约41个频点，大大加快运算速度。", tags:["捕获算法","并行码相位"], source:"Ch13" },
    { id:"s012", difficulty:"hard", type:"single", question:"Costas环在GPS接收机中用于什么？", options:["A. 码相位跟踪","B. 载波跟踪（载波环）","C. 信号捕获","D. 位置解算"], answer:1, explanation:"Costas环是载波跟踪环最常用的形式，对相位翻转180°不敏感，能容忍导航电文比特跳变，用于跟踪载波相位。", tags:["Costas环","载波跟踪"], source:"Ch13" },
    { id:"s013", difficulty:"medium", type:"single", question:"延迟锁定环(DLL)在接收机中的作用是什么？", options:["A. 载波频率跟踪","B. 测距码相位跟踪（码环）","C. 导航电文解码","D. 位置计算"], answer:1, explanation:"DLL（延迟锁定环）用于跟踪测距码（C/A码）的相位，通过早迟相关器比较实现精确的码相位锁定。", tags:["DLL","码跟踪"], source:"Ch13" },
    { id:"s014", difficulty:"medium", type:"single", question:"位同步直方图法的基本原理是什么？", options:["A. 统计分析1ms数据流中的比特跳变","B. 直接读取导航电文","C. 使用外部时钟同步","D. 通过载波相位确定"], answer:0, explanation:"直方图法将1ms宽数据比特流用1~20循环编号，逐个统计毫秒间的数据跳变情况，找到计数器值最大的位置确定比特边沿。", tags:["位同步","直方图"], source:"Ch13" },
    { id:"s015", difficulty:"hard", type:"single", question:"GPS帧同步通过验证什么来确认成功？", options:["A. 仅检查同步码","B. 同步码+奇偶校验+HOW验证+下一子帧TLM验证","C. 仅检查信号功率","D. 仅检查载波频率"], answer:1, explanation:"帧同步验证：8位同步码匹配→30位奇偶校验→HOW的截短周内时和子帧ID验证→下一子帧TLM的周内时递增验证。", tags:["帧同步","验证流程"], source:"Ch13" },
    { id:"s016", difficulty:"hard", type:"single", question:"GPS奇偶校验中，每个导航字有多少位校验位？", options:["A. 6位","B. 8位","C. 24位","D. 30位"], answer:0, explanation:"每个导航字30位：24位数据位+6位奇偶校验位(D25~D30)，用于检查传递信息是否有错并能纠正单个错误。", tags:["奇偶校验","导航字"], source:"Ch13" },
    // === Ch15: 电离层与对流层深入 ===
    { id:"s017", difficulty:"medium", type:"single", question:"美国取消SA政策后，GPS最大误差源是什么？", options:["A. 卫星钟差","B. 电离层延迟","C. 接收机噪声","D. 多径效应"], answer:1, explanation:"2000年美国宣布取消SA（Selective Availability）政策后，电离层延迟成为最大误差源，天顶方向可达十几米，必须加以修正。", tags:["电离层","最大误差源"], source:"Ch15" },
    { id:"s018", difficulty:"medium", type:"single", question:"电离层按电子密度极值区通常分为哪几层？", options:["A. A、B、C层","B. D、E、F1、F2层","C. 低、中、高层","D. 仅一层"], answer:1, explanation:"根据电子密度极值区高度不同，电离层分为D层、E层、F1层和F2层。电子密度从60km往上先增大后减少。", tags:["电离层","分层"], source:"Ch15" },
    { id:"s019", difficulty:"hard", type:"single", question:"Klobuchar模型可修正约多少电离层延迟？", options:["A. 约30%","B. 约50%-60%","C. 约90%","D. 约100%"], answer:1, explanation:"Klobuchar模型是GPS广播星历中播发的8参数电离层模型，可修正约50%-60%的电离层延迟影响。", tags:["Klobuchar","电离层模型"], source:"Ch15" },
    { id:"s020", difficulty:"hard", type:"single", question:"TEC代表什么？物理意义是什么？", options:["A. Time Error Correction","B. Total Electron Content 每平方米电子数量总和","C. Total Error Correction","D. Time Elevation Correction"], answer:1, explanation:"TEC（Total Electron Content）是电离层重要特征参数，表示每平方米上从电离层底部到顶部的电子数量总和。", tags:["TEC","电离层"], source:"Ch15" },
    { id:"s021", difficulty:"medium", type:"single", question:"对流层延迟不能用双频法消除的原因是什么？", options:["A. 对流层太厚","B. 对流层是非色散介质，折射率与频率无关","C. 对流层延迟太小","D. 对流层不含电子"], answer:1, explanation:"对流层属于非色散介质，GNSS信号折射率与频率无关，因此不能像电离层那样利用双频组合消除，需用模型校正。", tags:["对流层","非色散"], source:"Ch15" },
    { id:"s022", difficulty:"hard", type:"single", question:"GPS气象学的核心思想是什么？", options:["A. 利用GPS测量天气","B. 将定位中的大气延迟误差转换为大气信息","C. 用GPS预测地震","D. 用GPS测风速"], answer:1, explanation:"GPS气象学将定位测量中的大气折射噪声转换为有意义的大气信号（如可降水量PWV），是GPS定位的逆过程。", tags:["GPS气象学"], source:"Ch15" },
    // === Ch16: 多径与干扰 ===
    { id:"s023", difficulty:"medium", type:"single", question:"以下哪种天线抗多径效果最好？", options:["A. 贴片天线","B. 四螺旋天线","C. 扼流圈天线","D. 鞭状天线"], answer:2, explanation:"扼流圈天线在抗多径能力和低仰角卫星接收能力上都很出众，但体积较大。贴片天线也有良好抗多径能力。", tags:["多径","天线"], source:"Ch16" },
    { id:"s024", difficulty:"easy", type:"single", question:"多径效应对载波相位测量的最大影响约为多少？", options:["A. 数十米","B. 载波波长的1/4（约5cm）","C. 可忽略","D. 与码测量相同"], answer:1, explanation:"多径对载波相位影响约为λ/4（L1约5cm），远小于对码测量的影响（可达10-20m）。", tags:["多径","载波相位"], source:"Ch16" },
    // === Ch17: 性能评估 ===
    { id:"s025", difficulty:"medium", type:"single", question:"PDOP代表什么？", options:["A. Position Dilution of Precision","B. Precision Dilution of Position","C. Power Dilution of Precision","D. Phase Dilution of Precision"], answer:0, explanation:"PDOP是Position Dilution of Precision（位置精度因子），反映卫星几何分布对三维位置精度的影响。", tags:["PDOP","DOP"], source:"Ch17" },
    { id:"s026", difficulty:"hard", type:"single", question:"以下DOP类型中，哪个反映三维位置+时间的综合精度？", options:["A. HDOP","B. VDOP","C. PDOP","D. GDOP"], answer:0, explanation:"HDOP是水平精度因子。GDOP才反映三维位置+时间的综合精度。PDOP只反映三维位置。VDOP反映垂直精度，TDOP反映时间精度。", tags:["DOP","GDOP","HDOP"], source:"Ch17" },
    { id:"s027", difficulty:"medium", type:"single", question:"导航系统的连续性是指什么？", options:["A. 系统持续运行不中断","B. 无中断下满足精度和完好性要求的能力","C. 信号覆盖范围","D. 全天候可用"], answer:1, explanation:"连续性是在无中断的情况下，系统在整个运行阶段中满足定位精度和完好性要求的能力。", tags:["连续性","性能指标"], source:"Ch17" },
    // === Ch18: 空间信号质量 ===
    { id:"s028", difficulty:"hard", type:"single", question:"相对论效应使GPS卫星钟频率相对地面如何变化？", options:["A. 无变化","B. 变快约38μs/天","C. 变慢约38μs/天","D. 变快约3.8μs/天"], answer:1, explanation:"相对论效应（狭义+广义）使卫星钟相对地面变快约38μs/天，卫星发射前将频率调低约0.00457Hz补偿。", tags:["相对论效应","卫星钟"], source:"Ch18" },
    { id:"s029", difficulty:"medium", type:"single", question:"GPS信号在地面接收时的功率约为多少？", options:["A. 约-130dBm（-160dBW）","B. 约-100dBm","C. 约-50dBm","D. 约0dBm"], answer:0, explanation:"GPS L1 C/A码地面最低功率约-160dBW（-130dBm），远低于热噪声水平，但通过扩频处理增益仍可解调。", tags:["信号功率"], source:"Ch18" },
    // === Ch21: RAIM ===
    { id:"s030", difficulty:"medium", type:"single", question:"RAIM的基本原理是什么？", options:["A. 增加卫星信号功率","B. 利用冗余观测值进行完好性监测和故障检测","C. 使用外部参考站","D. 依赖地面监测网络"], answer:1, explanation:"RAIM（接收机自主完好性监测）利用多于4颗卫星的冗余观测值，通过一致性检验检测和排除故障卫星。", tags:["RAIM","完好性"], source:"Ch21" },
    { id:"s031", difficulty:"hard", type:"single", question:"RAIM至少需要几颗可见卫星才能进行故障检测？", options:["A. 4颗","B. 5颗","C. 6颗","D. 7颗"], answer:1, explanation:"RAIM故障检测至少需要5颗卫星（4颗定位+1颗冗余），故障排除至少需要6颗。", tags:["RAIM","卫星数量"], source:"Ch21" },
    // === Ch22: ABAS ===
    { id:"s032", difficulty:"medium", type:"single", question:"ABAS的全称是什么？", options:["A. Aircraft Based Augmentation System","B. Airborne Based Augmentation System","C. Automatic Based Augmentation System","D. Advanced Based Augmentation System"], answer:0, explanation:"ABAS是Aircraft Based Augmentation System（机载增强系统），包括RAIM和GPS/INS组合导航等。", tags:["ABAS","名词解释"], source:"Ch22" },
    { id:"s033", difficulty:"medium", type:"single", question:"GPS/INS组合导航属于哪种增强方式？", options:["A. SBAS","B. GBAS","C. ABAS","D. 无增强"], answer:2, explanation:"GPS/INS（惯性导航系统）组合属于机载增强系统（ABAS），用INS弥补GPS信号中断时的导航连续性。", tags:["ABAS","GPS/INS"], source:"Ch22" },
    // === 综合补充 ===
    { id:"s034", difficulty:"hard", type:"single", question:"双频改正法能消除电离层延迟的哪个分量？", options:["A. 全部电离层延迟","B. 一阶电离层延迟","C. 二阶电离层延迟","D. 对流层延迟"], answer:1, explanation:"双频组合可消除电离层一阶延迟项（与f^2成反比），高阶项影响较小（mm级）。", tags:["双频改正","电离层"], source:"Ch15" },
    { id:"s035", difficulty:"medium", type:"single", question:"SAW滤波器在接收机中的作用是什么？", options:["A. 信号放大","B. 滤除卫星信号频带外的噪声和干扰","C. 信号调制","D. 解算位置"], answer:1, explanation:"声表面波（SAW）带通滤波器通带响应平稳、边缘陡峭，能有效滤除带外干扰和噪声，但不便于集成。", tags:["SAW","滤波器"], source:"Ch12" },
    { id:"s036", difficulty:"hard", type:"single", question:"信号捕获中最大相关功率超过什么值即为捕获成功？", options:["A. 任意正值","B. 预设的信号捕获门限值","C. 零值","D. 最大值的50%"], answer:1, explanation:"若最大输出功率超过预设的信号捕获门限值，相应于该最大功率的复制信号参数值即为捕获对当前信号的参数估计。", tags:["捕获","门限"], source:"Ch13" },
    { id:"s037", difficulty:"medium", type:"single", question:"GPS接收机噪声基底通常在什么范围？", options:["A. -50dBm左右","B. -80dBm左右","C. -110dBm至-120dBm","D. -160dBm以下"], answer:2, explanation:"一般卫星定位接收机噪声基底在-110dBm~-120dBm之间（默认-111dBm），噪声强于卫星信号。", tags:["噪声基底","接收机"], source:"Ch12" },
    { id:"s038", difficulty:"medium", type:"single", question:"对流层集中了大约多少大气质量和水汽质量？", options:["A. 约50%和50%","B. 约75%和90%以上","C. 约90%和50%","D. 约30%和30%"], answer:1, explanation:"对流层集中了大约75%以上的大气质量和90%以上的水汽质量，其中水蒸气在大气运动中扮演重要角色。", tags:["对流层","大气质量"], source:"Ch15" },
    { id:"s039", difficulty:"hard", type:"single", question:"格网电离层模型中WAAS规定的纬度0-55°区域格网点间隔是多少？", options:["A. 2.5°×5°","B. 5°×5°","C. 10°×10°","D. 1°×1°"], answer:1, explanation:"WAAS规定纬度0-55°区域电离层格网点间隔为5°×5°，55-75°为10°×10°，纬度>75°只取极点一个点。", tags:["格网电离层","WAAS"], source:"Ch15" },
    { id:"s040", difficulty:"medium", type:"single", question:"接收机主机单元的信号通道属于哪个部分？", options:["A. 天线单元","B. 接收机主机","C. 电源单元","D. 外部设备"], answer:1, explanation:"接收机由天线单元、接收机主机单元和电源单元三部分组成。信号通道是接收机主机的核心，由硬件和软件组成。", tags:["接收机","主机"], source:"Ch12" }
  ]
};

// ==================== 闪卡数据（32个名词解释术语） ====================
const FLASH_DATA = [
  { abbr:"GPS", full:"Global Positioning System", cn:"全球定位系统", chapter:"Ch1" },
  { abbr:"VOR", full:"Very High Frequency Omnidirectional Ranging", cn:"甚高频全向测距", chapter:"Ch1" },
  { abbr:"DME", full:"Distance Measuring Equipment", cn:"距离测量设备", chapter:"Ch1" },
  { abbr:"SPS", full:"Standard Positioning Service", cn:"标准定位服务", chapter:"Ch3" },
  { abbr:"PPS", full:"Precise Positioning Service", cn:"精密定位服务", chapter:"Ch3" },
  { abbr:"DTT", full:"Data Time Tagging", cn:"数据时间标签", chapter:"Ch3" },
  { abbr:"UT", full:"Universal Time", cn:"世界时", chapter:"Ch3" },
  { abbr:"UTC", full:"Coordinated Universal Time", cn:"世界协调时", chapter:"Ch3" },
  { abbr:"IAT", full:"International Atomic Time", cn:"国际原子时", chapter:"Ch3" },
  { abbr:"ECI", full:"Earth-Centered Inertial", cn:"地心惯性坐标系", chapter:"Ch3" },
  { abbr:"ECEF", full:"Earth-Centered Earth-Fixed", cn:"地心地球固连坐标系", chapter:"Ch3" },
  { abbr:"WGS-84", full:"World Geodetic System 1984", cn:"1984世界大地测量系统", chapter:"Ch3" },
  { abbr:"C/A码", full:"Coarse/Acquisition Code", cn:"粗捕获码", chapter:"Ch5" },
  { abbr:"P码", full:"Precise Code", cn:"精码", chapter:"Ch5" },
  { abbr:"PRN", full:"Pseudo Random Noise Code", cn:"伪随机噪声码", chapter:"Ch5" },
  { abbr:"TLM", full:"Telemetry Word", cn:"遥测码", chapter:"Ch8" },
  { abbr:"HOW", full:"Hand Over Word", cn:"转换码", chapter:"Ch8" },
  { abbr:"NMEA", full:"National Marine Electronics Association", cn:"美国国家海洋电子协会", chapter:"Ch8" },
  { abbr:"DGPS", full:"Differential GPS", cn:"差分GPS", chapter:"Ch10" },
  { abbr:"RTK", full:"Real Time Kinematic", cn:"实时动态载波相位差分技术", chapter:"Ch10" },
  { abbr:"CORS", full:"Continuous Operational Reference System", cn:"连续运行卫星定位服务综合系统", chapter:"Ch10" },
  { abbr:"IGS", full:"International GNSS Service", cn:"国际GNSS服务组织", chapter:"Ch10" },
  { abbr:"SBAS", full:"Satellite-Based Augmentation System", cn:"星基增强系统", chapter:"Ch10" },
  { abbr:"GBAS", full:"Ground-Based Augmentation System", cn:"陆基增强系统", chapter:"Ch10" },
  { abbr:"WAAS", full:"Wide Area Augmentation System", cn:"广域增强系统（美国）", chapter:"Ch11" },
  { abbr:"EGNOS", full:"European Geostationary Navigation Overlay Service", cn:"欧洲地球静止导航重叠服务", chapter:"Ch11" },
  { abbr:"ICAO", full:"International Civil Aviation Organization", cn:"国际民航组织", chapter:"Ch11" },
  { abbr:"CNS/ATM", full:"Communication Navigation Surveillance/Air Traffic Management", cn:"通讯导航监视/空中交通管理系统", chapter:"Ch11" },
  { abbr:"GNSS", full:"Global Navigation Satellite System", cn:"全球导航卫星系统", chapter:"Ch11" },
  { abbr:"RAIM", full:"Receiver Autonomous Integrity Monitoring", cn:"接收机自主完好性监测", chapter:"Ch11" },
  { abbr:"PBN", full:"Performance Based Navigation", cn:"基于性能的导航", chapter:"Ch11" },
  { abbr:"ILS", full:"Instrument Landing System", cn:"仪表着陆系统", chapter:"Ch11" },
  { abbr:"GLS", full:"GNSS Landing System", cn:"卫星着陆系统", chapter:"Ch11" },
  { abbr:"PRC", full:"Pseudorange Correction", cn:"伪距修正", chapter:"Ch12" },
  { abbr:"RRC", full:"Range Rate Correction", cn:"距离变化率修正", chapter:"Ch12" },
  { abbr:"VDB", full:"VHF Data Broadcast", cn:"甚高频数据广播", chapter:"Ch12" },
  { abbr:"VAL", full:"Vertical Alert Limit", cn:"垂直警报限制", chapter:"Ch12" },
  { abbr:"LAL", full:"Lateral Alert Limit", cn:"横向警报限制", chapter:"Ch12" },
  { abbr:"SA", full:"Selective Availability", cn:"选择可用性", chapter:"Ch2" },
  { abbr:"AS", full:"Anti-Spoofing", cn:"反欺骗", chapter:"Ch2" }
];

// 难度配置
const DIFFICULTY_CONFIG = {
  easy:   { name:"🌱 基础", desc:"基础概念和定义类题目", pointsMultiplier:1, icon:"🌱" },
  medium: { name:"🌿 进阶", desc:"理解和简单应用类题目", pointsMultiplier:2, icon:"🌿" },
  hard:   { name:"🌳 挑战", desc:"推导计算和复杂分析题目", pointsMultiplier:3, icon:"🌳" }
};
