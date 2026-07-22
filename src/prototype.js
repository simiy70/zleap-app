export function initializePrototype() {
      const baseItems = [
        { id: 'article-rag', title: 'RAG vs. 微调：核心优化路径选型指南', summary: '在大语言模型应用落地中，检索增强生成（RAG）与微调是两条截然不同的技术路线。理解适用边界，才能真正提升推理效果与成本效率。', author: '技术宅', handle: 'techhome', type: 'article', agent: 'tech', cat: 'AI', photo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80', imageRatio: 'tall', fav: 3, comments: 2, sourceIds: ['src-cust', 'src-cfo', 'src-arr-standalone'] },
        { id: 'paper-openai', title: 'OpenAI 发布 GPT-5.5 Instant：幻觉大降，记忆功能升级', summary: '新版模型重点强化长上下文记忆与低幻觉能力，同时提升实时响应速度，开发者调用成本进一步下降。', author: 'neo 的 AI', handle: 'neo_ai', type: 'paper', agent: 'ai', cat: 'AI', photo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80', imageRatio: 'wide', fav: 66, comments: 12 },
        { id: 'blue-tool', title: '选 AI 工具别贪大求全，得看场景', summary: 'AI 工具并不是越多越好，针对不同工作流明确分工，才能真正提升效率与稳定性。', author: '商业分析', handle: 'biz_ai', type: 'blue', agent: 'biz', cat: '商业', photo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', imageRatio: 'square', fav: 128, comments: 22 },
        { id: 'ui-home', title: 'AI Agent 工作台首页改版方向', summary: '新版首页尝试弱化复杂功能入口，强化信息流和任务流之间的切换效率。', author: '设计观察', handle: 'design_ai', type: 'ui', agent: 'pm', cat: '职场', photo: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80', imageRatio: 'wide', fav: 45, comments: 9 },
        { id: 'policy-track', title: '全球 AI 治理规则进入密集落地期', summary: '多地开始把大模型备案、数据边界和行业责任写进具体规范，企业侧的产品发布节奏也随之调整。', author: '政经观察', handle: 'policy_watch', type: 'paper', agent: 'biz', cat: '时政', photo: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80', imageRatio: 'wide', fav: 84, comments: 17 },
        { id: 'social-shift', title: '年轻人重新定义通勤时间：信息消费更碎片化', summary: '从播客到短评，再到 AI 摘要，碎片时间里的内容入口正在从“主动搜索”转向“即时投喂”。', author: '城市观察局', handle: 'city_scope', type: 'article', agent: 'pm', cat: '社会', photo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80', imageRatio: 'wide', fav: 57, comments: 11 },
        { id: 'photo-scene', title: '首页卡片视觉方案：场景图样式', summary: '场景图适合承载趋势、活动和品牌内容，能快速建立内容氛围。', author: '体验研究员', handle: 'ux_lab', type: 'photo', agent: 'pm', cat: '科技', photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', imageRatio: 'square', fav: 102, comments: 21 },
        { id: 'long-summary-case', title: '长摘要样例：Agent 信息流如何提升首页消费效率', summary: '这是一条超过二百字的摘要样例，用来验证概述折叠和展开收起的交互效果。新版首页需要同时承载推荐内容、关注 Agent、分类筛选和快捷互动，因此信息密度必须被精细控制。卡片标题负责帮助用户快速判断主题，摘要负责补充背景和价值点，图片负责提供视觉锚点。对于较短摘要，完整展示可以减少一次点击；对于较长摘要，则默认折叠，避免单条内容占据过多首屏空间。', author: '交互设计师', handle: 'interaction_lab', type: 'ui', agent: 'pm', cat: '职场', photo: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80', imageRatio: 'banner', fav: 76, comments: 15 },
        { id: 'life-routine', title: '把生活待办交给 AI 之后，家庭协作开始变轻', summary: '从采购清单到出行安排，轻量 Agent 正在进入更日常的生活分工，重点不在炫技，而在减少沟通成本。', author: '生活研究所', handle: 'daily_lab', type: 'photo', agent: 'ai', cat: '生活', photo: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', imageRatio: 'square', fav: 39, comments: 8 }
      ];

      let items = baseItems.slice();
      let renderedItems = [];
      let currentTab = 'discover';
      let currentAgent = 'all';
      let currentCategory = '推荐';
      const feedCategories = ['推荐', 'AI', '时政', '商业', '职场', '社会', '科技', '生活'];

      const feed = document.getElementById('feed');
      const bottomNav = document.getElementById('bottomNav');
      const app = document.querySelector('.app');
      const profilePage = document.getElementById('profilePage');
      const profileFeed = document.getElementById('profileFeed');
      const agentPage = document.getElementById('agentPage');
      const agentFeed = document.getElementById('agentFeed');
      const messagePage = document.getElementById('messagePage');
      const contactBookPage = document.getElementById('contactBookPage');
      const contactChatPage = document.getElementById('contactChatPage');
      const searchPage = document.getElementById('searchPage');
      const searchResultPage = document.getElementById('searchResultPage');
      const audioPage = document.getElementById('audioPage');
      const audioSearchPage = document.getElementById('audioSearchPage');
      const audioList = document.getElementById('audioList');
      const noticeList = document.getElementById('noticeList');
      const filterSheet = document.getElementById('filterSheet');
      const audioFabBar = document.querySelector('.audio-fab-bar');
      const detailPage = document.getElementById('detailPage');
      const detailContent = document.getElementById('detailContent');
      const detailAuthor = document.getElementById('detailAuthor');
      const eventDetailPage = document.getElementById('eventDetailPage');
      const eventDetailBack = document.getElementById('eventDetailBack');
      const superAgentPage = document.getElementById('superAgentPage');
      const superAgentSettingsPage = document.getElementById('superAgentSettingsPage');
      const superAgentTasksPage = document.getElementById('superAgentTasksPage');
      const superAgentRolePage = document.getElementById('superAgentRolePage');
      const superAgentFab = document.getElementById('superAgentFab');
      const superAgentPageBody = document.getElementById('superAgentPageBody');
      let eventDetailReturn = null;
      if (eventDetailBack && eventDetailPage) {
        eventDetailBack.addEventListener('click', function () {
          eventDetailPage.classList.remove('show');
          var back = eventDetailReturn;
          eventDetailReturn = null;
          if (typeof back === 'function') back();
        });
      }
      let currentPage = 'home';
      let currentProfileTab = 'saved';
      let currentAgentDetail = null;
      const pageHistory = ['home'];
      let searchReturnsToGlobalSearch = false;
      const likedState = new Set();
      const favoritedState = new Set();
      const followingState = new Set();
      const commentDrafts = new Map();
      const currentUserName = 'Simiy';
      const superAgentName = currentUserName + '的agent';
      const superAgentState = {
        unread: true,
        draft: '',
        messages: [
          { id: 'super-report', role: 'agent', type: 'report-card', title: '今日速览', subtitle: '企业关键动态日报', text: '日报已生成，包含重点变化、风险提醒和下一步动作建议。', actionLabel: '查看日报', time: '今天 09:00' },
          { id: 'super-intro', role: 'agent', text: '你好，我是 ' + superAgentName + '。可以总结信息、解释洞察、提炼要点，也可以根据明确行动结论生成任务。', time: '09:02' },
          { id: 'super-rec', role: 'agent', text: '根据近一周的信号，我给出三条要点结论：\n1）客户 A Onboarding 出现明显阻力，主要卡在 SSO 对接；\n2）CFO 在 Slack 抛出「预算再砍 15%」的信号，需要 CS/销售侧同步节奏；\n3）ARR 目标下调后，续费策略需要重排。', time: '09:07', sourceCount: 3, recs: ['帮我总结当前列表', '有哪些重点结论', '创建一个新的自动化任务'] }
        ],
        settings: [
          { title: '基础设置', subtitle: '名称、头像', note: '默认名称为“' + superAgentName + '”，头像同步更新一级导航与助手通讯录。' },
          { title: '角色定义', subtitle: 'Markdown 角色提示词', note: '支持复制助手、导入 .md 与一键完善；保存后仅对新请求生效。' },
          { title: '清空聊天记录', subtitle: '仅清空当前会话', note: '删除当前 Super Agent 历史消息，不影响任务和设置。', action: 'clear-chat' },
          { title: '自动化任务管理', subtitle: '查看任务与推送配置', note: '展示系统默认任务和当前 Agent 承接的自动化任务。', action: 'open-task-list' }
        ],
        tasks: [
          { id: 'task-daily', title: 'zleap 今日速览', desc: '每天 09:00 自动生成企业关键动态日报，并推送重点变化。', status: 'active', nextRun: '明天 09:00' },
          { id: 'task-risk', title: '客户风险跟踪', desc: '聚焦客户 A / 客户 B 的实施阻塞和预算变化，输出风险提醒。', status: 'paused', nextRun: '--' }
        ]
      };

      const contactBookState = {
        active: 'following',
        query: '',
        followed: new Set(['wendy', 'banana', 'cola', 'luoshen', 'coco', 'xiaoran', 'tina', 'noah'])
      };
      const contactChatState = { currentId: '', messages: {} };
      const contactBookData = {
        following: [
          { id: 'wendy', name: 'Wendy织梦', bio: '风吹草动不用说太明白，很多事我听个开头...', photo: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=144&q=80' },
          { id: 'banana', name: '香蕉奶', bio: '流量当然重要，但节奏、合作和后面能不能...', photo: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=144&q=80' },
          { id: 'cola', name: '可乐加冰块', bio: '买车先回家里看，空间、油耗和保值率这些...', photo: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=144&q=80' },
          { id: 'luoshen', name: '洛神饮', bio: '镜头怎么接、情绪怎么走，我一般都是先靠...', photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=144&q=80' },
          { id: 'coco', name: 'Coco晒太阳', bio: '比起把话说满，我更想写那种读完会让人慢...', photo: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=144&q=80' },
          { id: 'xiaoran', name: '夏冉', bio: '一个会撒娇、带点小傲娇的虚拟女友，擅长...', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=144&q=80' },
          { id: 'tina', name: 'Tina织毛衣', bio: '家庭聚餐那些忙半天还不落好的菜，我见得...', photo: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=144&q=80' },
          { id: 'noah', name: 'Noah', bio: '很多应急现场不是靠热血记住的，是靠一次...', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=144&q=80' }
        ],
        assistants: [
          { id: 'my-agent', name: superAgentName, bio: '你的个人 AI 助手，负责总结、洞察与自动化任务。', photo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=144&q=80' },
          { id: 'zleaper', name: 'Zleaper', bio: '从信息到创作的 AI 合作伙伴。', photo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=144&q=80' },
          { id: 'story-granny', name: '爱讲故事的老奶奶', bio: 'ENTP · 天蝎女，擅长把复杂信息讲成故事。', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=144&q=80' }
        ],
        recommended: [
          { id: 'test018', name: 'test018', bio: '关注产品、商业与 AI 的新变化。', photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=144&q=80' },
          { id: 'test01', name: 'test01', bio: '记录日常灵感与新鲜观点。', photo: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=144&q=80' },
          { id: 'songjiang', name: '宋江', bio: '江湖人称及时雨，关注团队协作与组织关系。', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=144&q=80' },
          { id: 'wukong', name: '孙悟空', bio: '花果山仙石所生，擅长打破惯性思维。', photo: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=144&q=80' },
          { id: 'demon', name: '伏地魔（汤姆·马沃罗·里德尔）', bio: '从反面视角审视权力、选择与代价。', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=144&q=80' },
          { id: 'lin', name: '林黛玉', bio: '敏锐、细腻，用文学视角观察情绪与关系。', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=144&q=80' },
          { id: 'buffett', name: '沃伦·巴菲特', bio: '作为思维顾问，用长期主义分析投资与决策。', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=144&q=80' },
          { id: 'musk', name: '埃隆·马斯克', bio: '从第一性原理出发审视产品、工程与未来。', photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=144&q=80' }
        ]
      };

      const agentProfiles = {
        refresh: { name: '系统提醒', bio: '系统推送与内容刷新提醒', handle: 'refresh', avatarClass: '', followers: 3021 },
        techhome: { name: '技术宅', bio: '工程实现、模型落地与架构观察', handle: 'techhome', avatarClass: 'green', followers: 865 },
        neo_ai: { name: 'neo 的 AI', bio: '模型快讯、产品动态与应用判断', handle: 'neo_ai', avatarClass: '', followers: 1902 },
        biz_ai: { name: '商业分析', bio: 'AI 商业化、场景策略与效率方法', handle: 'biz_ai', avatarClass: '', followers: 1468 },
        design_ai: { name: '设计观察', bio: '产品设计、界面体验与交互节奏', handle: 'design_ai', avatarClass: '', followers: 723 },
        policy_watch: { name: '政经观察', bio: '政策变化、产业信号与宏观节奏观察', handle: 'policy_watch', avatarClass: '', followers: 1184 },
        city_scope: { name: '城市观察局', bio: '社会趋势、城市生活与用户行为变化', handle: 'city_scope', avatarClass: '', followers: 902 },
        ux_lab: { name: '体验研究员', bio: '用户研究、视觉方向与消费路径', handle: 'ux_lab', avatarClass: '', followers: 632 },
        interaction_lab: { name: '交互设计师', bio: '信息架构、交互细节与信息流策略', handle: 'interaction_lab', avatarClass: '', followers: 544 },
        daily_lab: { name: '生活研究所', bio: '日常效率、家庭协作与生活方式观察', handle: 'daily_lab', avatarClass: '', followers: 678 }
      };
      const agentAvatarImages = {
        refresh: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=144&q=80',
        techhome: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=144&q=80',
        neo_ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=144&q=80',
        biz_ai: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=144&q=80',
        design_ai: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=144&q=80',
        policy_watch: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?auto=format&fit=crop&w=144&q=80',
        city_scope: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=144&q=80',
        ux_lab: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=144&q=80',
        interaction_lab: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=144&q=80',
        daily_lab: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=144&q=80'
      };

      const sourceLibrary = [
        {
          id: 'src-cust',
          type: 'summary',
          title: '客户运营反馈：SSO 对接排期延后 3 天',
          summary: 'SSO 联调进度延后，主要卡在客户 IT 侧的证书审批流程；建议本周内推动客户 IT 走完 fast-track。',
          tags: ['客户-客户 A', '角色-客户运营', '时间-2026-06-30'],
          link: 'https://example.com/zleap/customer-a-sso',
          children: [
            {
              id: 'src-cust-1',
              type: 'child',
              title: '客户 A 的 SSO 联调比原排期落后 3 天',
              summary: '客户运营在周会中明确反馈，本周客户 A 的 SSO 联调较原排期落后 3 天。',
              tags: ['客户-客户 A', '角色-客户运营', '时间-2026-06-30'],
              reference: '客户运营（周会 06-30）：本周客户 A 的 SSO 联调比原排期落后 3 天，主要卡在客户内部证书审批。',
              link: 'https://example.com/zleap/customer-a-sso'
            },
            {
              id: 'src-cust-2',
              type: 'child',
              title: '客户 IT 证书审批进入安全评审队列',
              summary: '客户 IT 提到证书审批需进入安全评审队列，最快下周三才能完成。',
              tags: ['客户-客户 A', '角色-客户 IT', '时间-2026-06-30'],
              reference: '客户 IT：审批需要走安全评审队列，最快下周三。',
              link: 'https://example.com/zleap/customer-a-sso'
            },
            {
              id: 'src-cust-3',
              type: 'child',
              title: 'CSM 将推动 fast-track 缩短等待时间',
              summary: '客户运营已同步 CSM，准备推动 fast-track 流程以减少联调等待。',
              tags: ['客户-客户 A', '角色-CSM', '时间-2026-06-30'],
              reference: '客户运营：已同步 CSM 尝试 fast-track。',
              link: 'https://example.com/zleap/customer-a-sso'
            }
          ]
        },
        {
          id: 'src-cfo',
          type: 'summary',
          title: 'CFO 抛出“预算再砍 15%”信号',
          summary: '预算进一步收紧已成高概率事件，CS 与销售节奏需要同步下修，重点保护高续费客户。',
          tags: ['部门-财务', '角色-CFO', '时间-2026-07-01'],
          link: 'https://example.com/zleap/budget-cut',
          children: [
            {
              id: 'src-cfo-1',
              type: 'child',
              title: 'Slack 中释放预算下修预期',
              summary: 'CFO 在 Slack 提醒管理层预留 15% 的预算回撤空间。',
              tags: ['部门-财务', '角色-CFO', '时间-2026-07-01'],
              reference: 'CFO 在 Slack 中表示：若本月回款继续承压，预算需要再砍 15%。',
              link: 'https://example.com/zleap/budget-cut'
            },
            {
              id: 'src-cfo-2',
              type: 'child',
              title: '销售与客户成功需要同步节奏',
              summary: '财务侧建议 CS 与销售共同调整客户节奏，优先保护续费概率更高的账户。',
              tags: ['部门-财务', '角色-销售/CS', '时间-2026-07-01'],
              reference: '财务建议：CS/销售先统一节奏，优先保高续费概率账户。',
              link: 'https://example.com/zleap/budget-cut'
            }
          ]
        },
        {
          id: 'src-arr-standalone',
          type: 'child',
          title: 'ARR 目标下调后，续费策略需要重排',
          summary: '本季度 ARR 目标已下调，续费和扩容动作需要重新设定优先级。',
          tags: ['主题-续费策略', '角色-营收负责人', '时间-2026-07-02'],
          reference: '营收负责人：ARR 目标下调后，需要把续费保盘放在扩容前面，重新规划销售节奏。',
          link: 'https://example.com/zleap/arr-renewal'
        }
      ];

      const audioItems = [
        { title: '智跃Zleap宣讲会.m4a', source: '产品路演', time: '2026-04-28 10:32', statusTime: '2026-04-28 10:35', summary: '本次宣讲聚焦产品能力、场景与报告生成机制，已整理为清晰章节摘要，便于后续分发。会议指出传统企业管理存在四大痛点……', duration: '36分12秒', status: 'done', viewed: true },
        { title: '集团高层战略闭门会议.m4a', source: '集团高管战略闭门讨论会议第三季度', time: '2026-04-28 14:00', statusTime: '2026-04-28 14:05', summary: '本次闭门会议围绕集团下半年战略方向、组织调整与重点投入领域进行了讨论，明确了未来三个季度的重点工作。', duration: '52分08秒', status: 'done', viewed: false },
        { title: '华东客户访谈录音.m4a', source: '客户回访', time: '2026-04-27 18:06', statusTime: '2026-04-27 18:10', summary: '围绕客户交付周期、案例需求与报价方式做了集中讨论，可直接抽取后续跟进重点。', duration: '18分40秒', status: 'done', viewed: true },
        { title: '技术选型评估会.m4a', source: '研发周会', time: '2026-04-27 09:15', statusTime: '2026-04-27 09:16', summary: null, duration: '15分33秒', status: 'processing_transcript' },
        { title: '新品发布彩排纪要.m4a', source: '市场部会议', time: '2026-04-26 20:12', statusTime: '2026-04-26 20:15', summary: null, duration: '12分09秒', status: 'processing', entryStatus: 'summary_generating' },
        { title: '销售渠道周例会.m4a', source: '销售例会', time: '2026-04-25 09:18', statusTime: '2026-04-25 09:21', summary: '梳理了渠道投放、客户推进和下周动作安排，已压缩成两段重点摘要供快速浏览。', duration: '24分51秒', status: 'done', viewed: true },
        { title: '产品需求评审.m4a', source: '市场部会议', time: '2026-04-24 15:00', statusTime: '2026-04-24 15:04', summary: null, duration: '08分22秒', status: 'failed_transcript' },
        { title: '季度复盘分享会.m4a', source: '销售例会', time: '2026-04-23 11:00', statusTime: '2026-04-23 11:05', summary: null, duration: '31分05秒', status: 'failed_summary' },
        { title: '会议室静默测试.m4a', source: '研发周会', time: '2026-04-22 09:00', statusTime: '2026-04-22 09:02', summary: null, duration: '02分18秒', status: 'empty' }
      ];

      const noticeItems = [
        { name: '小妍子', time: '19:22', action: '回复了你的评论', text: '你的诗好写实hhh', ref: '｜快来看我写的诗啊啊啊啊....', liked: true },
        { name: '小妍子', time: '19:22', action: '回复了你的评论', text: '你的诗好写实hhh', ref: '｜快来看我写的诗啊啊啊啊....', liked: false },
        { name: '小妍子超长省略....', time: '2025-10-08', action: '评论了你的动态', text: '你的诗好写实hhh', ref: '', liked: false },
        { name: '小妍子', time: '2025-10-08', action: '在评论中@了你', text: '@小燕子的粉丝', ref: '', liked: false }
      ];

      const searchTerms = ['市场部会议', '产品路演', '宣讲会', '客户访谈', '培训录音', '发布会复盘', '销售例会', '导入音频'];
      const guessTerms = ['市场部会议', '产品路演', '宣讲会录音', '客户访谈', '培训录音', '发布会复盘', '渠道共创', '会议纪要', 'Q2 周例会', '导入音频文件'];

      const agentOptions = [
        { key: 'all', name: '全部', bg: 'linear-gradient(135deg,#f0f2f5,#d8dce4)' },
        { key: 'tech', name: '技术宅', bg: 'linear-gradient(135deg,#ffe27a,#35b85a)' },
        { key: 'pm', name: '产品观察', bg: 'linear-gradient(135deg,#9fd4ff,#575fcf)' },
        { key: 'ai', name: 'neo的AI', bg: 'linear-gradient(135deg,#e0f7ff,#9be7ff)' },
        { key: 'news', name: 'AI快讯', bg: 'linear-gradient(135deg,#ffb199,#ff0844)' },
        { key: 'biz', name: '商业分析', bg: 'linear-gradient(135deg,#d4fc79,#96e6a1)' },
        { key: 'ops', name: '运营速览', bg: 'linear-gradient(135deg,#fbc2eb,#a6c1ee)' },
        { key: 'design', name: '设计研报', bg: 'linear-gradient(135deg,#fddb92,#d1fdff)' },
        { key: 'finance', name: '财务洞察', bg: 'linear-gradient(135deg,#f6d365,#fda085)' },
        { key: 'hr', name: '组织观察', bg: 'linear-gradient(135deg,#cfd9df,#e2ebf0)' },
        { key: 'legal', name: '法务助手', bg: 'linear-gradient(135deg,#f093fb,#f5576c)' },
        { key: 'sales', name: '销售情报', bg: 'linear-gradient(135deg,#84fab0,#8fd3f4)' }
      ];

      /* ─── TOAST ─── */
      function showToast(msg) {
        const wrap = document.getElementById('toastWrap');
        const el = document.createElement('div');
        el.className = 'toast';
        el.textContent = msg;
        wrap.appendChild(el);
        setTimeout(function () {
          el.classList.add('out');
          setTimeout(function () { el.remove(); }, 400);
        }, 1800);
      }

      /* ─── ICONS ─── */
      function icon(name) {
        const icons = {
          comment: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 5h16v12H8l-4 4V5Z"></path></svg>',
          heart: '<svg class="icon" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg>',
          star: '<svg class="icon" viewBox="0 0 24 24"><path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"></path></svg>',
          share: '<svg class="icon" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="m16 6-4-4-4 4"></path><path d="M12 2v13"></path></svg>'
        };
        return icons[name] || '';
      }

      function cardKey(item) {
        const scope = currentPage === 'profile' ? 'profile' : (currentPage === 'agent' ? 'agent' : 'feed');
        return item.id + '::' + scope;
      }

      /* ─── MEDIA HTML ─── */
      function mediaHTML(item) {
        if (item.photo) {
          return '<div class="article-preview">' +
            '<img class="article-image ' + (item.imageRatio || '') + '" src="' + item.photo + '" alt="' + item.title + '">' +
            '<div class="article-preview-body">' +
              '<div class="article-preview-title">' + item.title + '</div>' +
              '<p class="article-preview-desc">' + (item.summary || '') + '</p>' +
            '</div>' +
          '</div>';
        }
        const coverTitle = item.type === 'article' ? '内容社区？ 信息工具？' : item.title;
        const coverSub = item.type === 'article' ? 'Zleap 真身大揭秘' : 'Zleap 产品介绍';
        return '<div class="article-preview">' +
          '<div class="article-cover">' +
            '<div class="article-logo">zleap</div>' +
            '<div class="article-cover-title">' + coverTitle + '</div>' +
            '<div class="article-cover-subtitle">' + coverSub + '</div>' +
          '</div>' +
          '<div class="article-preview-body">' +
            '<div class="article-preview-title">' + item.title + '</div>' +
            '<p class="article-preview-desc">' + (item.summary || '') + '</p>' +
          '</div>' +
        '</div>';
      }

      /* ─── AGENT FILTER ─── */
      function renderAgentFilter() {
        document.getElementById('agentFilter').innerHTML = agentOptions.slice(0, 10).map(function (agent) {
          var img = agentAvatarImages[agent.key] || agentAvatarImages.refresh;
          return '<button class="agent ' + (currentAgent === agent.key ? 'active' : '') + '" data-agent="' + agent.key + '">' +
            '<div class="agent-avatar" style="background:' + agent.bg + '">' + (agent.key === 'all' ? '' : '<img src="' + img + '" alt="' + agent.name + '">') + '</div>' +
            '<span class="agent-name">' + agent.name + '</span>' +
          '</button>';
        }).join('');
      }

      function renderCategoryFilter() {
        document.getElementById('categoryFilter').innerHTML = feedCategories.map(function (cat) {
          return '<button class="category-chip ' + (currentCategory === cat ? 'active' : '') + '" data-category="' + cat + '">' + cat + '</button>';
        }).join('');
      }

      /* ─── CARD ACTIONS ─── */
      function cardActionsHTML(item) {
        const key = cardKey(item);
        const liked = likedState.has(key);
        const favorited = favoritedState.has(key);
        const commentOpen = commentDrafts.has(key);
        const likeCount = item.fav + (liked ? 1 : 0);
        const commentValue = commentDrafts.get(key) || '';
        return '<div class="actions">' +
          '<button class="action ' + (liked ? 'active' : '') + '" data-action="like">' + icon('heart') + '<span>' + likeCount + '</span></button>' +
          '<button class="action ' + (favorited ? 'active' : '') + '" data-action="favorite">' + icon('star') + '<span>' + (favorited ? '已收藏' : '收藏') + '</span></button>' +
          '<div class="action-spacer"></div>' +
          '<button class="action" data-action="comment">' + icon('comment') + '<span>' + item.comments + '</span></button>' +
          '<button class="action" data-action="share" aria-label="分享">' + icon('share') + '</button>' +
        '</div>';
      }

      function getVisibleItems() {
        var list = items;
        if (currentTab === 'discover' && currentCategory !== '推荐') {
          list = list.filter(function (i) { return i.cat === currentCategory; });
        }
        if (currentTab === 'discover') return list;
        if (currentAgent === 'all') return list.filter(function (i) { return ['tech', 'pm', 'ai', 'biz'].includes(i.agent); });
        return list.filter(function (i) { return i.agent === currentAgent; });
      }

      function avatarHTML(item) {
        const cls = item.type === 'article' ? 'green' : '';
        const img = agentAvatarImages[item.handle] || agentAvatarImages.refresh;
        return '<button class="avatar-wrap" type="button" data-open-agent="' + item.handle + '" aria-label="查看 ' + item.author + '">' +
          '<div class="avatar ' + cls + '"><img src="' + img + '" alt="' + item.author + '"></div>' +
        '</button>';
      }

      /* ─── RENDER FEED ─── */
      function renderFeed(data) {
        const safeData = Array.isArray(data) && data.length ? data : getVisibleItems();
        renderedItems = safeData.concat(safeData);
        feed.innerHTML = renderedItems.map(function (item, index) {
          const summary = item.summary || item.title;
          const shouldClamp = summary.length > 180;
          const hideText = item.handle === 'refresh';
          return '<article class="feed-card" data-render-index="' + index + '">' +
            '<div class="feed-body">' +
              avatarHTML(item) +
              '<div class="content">' +
                '<div class="meta">' +
                  '<span class="name">' + item.author + '</span>' +
                  '<span class="handle">' + (index + 2) + '小时前</span>' +
                '</div>' +
                (hideText ? '' : '<p class="summary ' + (shouldClamp ? 'clamped' : '') + '">' + summary + '</p>') +
                (hideText || !shouldClamp ? '' : '<button class="summary-toggle">展开 ↓</button>') +
                '<div class="media">' + mediaHTML(item) + '</div>' +
                cardActionsHTML(item) +
              '</div>' +
            '</div>' +
          '</article>';
        }).join('');
      }

      function getProfileItems() {
        if (currentProfileTab === 'liked') return baseItems.filter(function (i) { return i.fav >= 66; });
        if (currentProfileTab === 'shared') return baseItems.filter(function (i) { return ['blue-tool', 'ui-home', 'article-rag'].includes(i.id); });
        if (currentProfileTab === 'viewed') return baseItems.slice(0, 5);
        return baseItems.filter(function (i) { return i.fav >= 45 || i.type === 'article'; });
      }

      function renderProfileFeed() {
        const list = getProfileItems();
        document.querySelectorAll('.profile-tab').forEach(function (tab) {
          tab.classList.toggle('active', tab.dataset.profileTab === currentProfileTab);
        });
        if (!list.length) { profileFeed.innerHTML = '<div class="profile-empty">还没有内容</div>'; return; }
        renderedItems = list;
        profileFeed.innerHTML = list.map(function (item, index) {
          const summary = item.summary || item.title;
          return '<article class="feed-card" data-render-index="' + index + '">' +
            '<div class="feed-body">' + avatarHTML(item) +
              '<div class="content">' +
                '<div class="meta"><span class="name">' + item.author + '</span><span class="handle">' + (index + 1) + '天前</span></div>' +
                '<p class="summary clamped">' + summary + '</p>' +
                '<div class="media">' + mediaHTML(item) + '</div>' +
                cardActionsHTML(item) +
              '</div>' +
            '</div>' +
          '</article>';
        }).join('');
      }

      function renderAgentFeed() {
        if (!currentAgentDetail) return;
        const list = items.filter(function (i) { return i.handle === currentAgentDetail.handle; });
        renderedItems = list;
        agentFeed.innerHTML = list.length ? list.map(function (item, index) {
          const summary = item.summary || item.title;
          const shouldClamp = summary.length > 180;
          return '<article class="feed-card" data-render-index="' + index + '">' +
            '<div class="feed-body">' + avatarHTML(item) +
              '<div class="content">' +
                '<div class="meta"><span class="name">' + item.author + '</span><span class="handle">' + (index + 1) + '天前</span></div>' +
                '<p class="summary ' + (shouldClamp ? 'clamped' : '') + '">' + summary + '</p>' +
                (shouldClamp ? '<button class="summary-toggle">展开 ↓</button>' : '') +
                '<div class="media">' + mediaHTML(item) + '</div>' +
                cardActionsHTML(item) +
              '</div>' +
            '</div>' +
          '</article>';
        }).join('') : '<div class="profile-empty">还没有动态</div>';
      }

      var playingIndex = -1;

      function renderAudioList() {
        audioList.innerHTML = audioItems.map(function (item, idx) {
          var isUploading = item.status === 'uploading';
          var isUploadFailed = item.status === 'upload_failed';
          var isProcessingTranscript = item.status === 'processing_transcript';
          var isProcessing = item.status === 'processing';
          var isFailedTranscript = item.status === 'failed_transcript' || item.status === 'failed';
          var isFailedSummary = item.status === 'failed_summary';
          var isEmpty = item.status === 'empty';
          var isPlaying = playingIndex === idx;

          // Summary area
          var summaryHTML;
          if (isUploading) {
            summaryHTML = '<div class="audio-summary-loading">' +
              '<span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>' +
              '<span style="margin-left:6px;color:var(--text-tertiary);font-size:12px">上传中</span>' +
            '</div>';
          } else if (isUploadFailed) {
            summaryHTML = '<div class="audio-fail-row audio-fail-row--transcript">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>' +
              '<span class="audio-fail-label">上传失败</span>' +
              '<button class="retry-btn" data-retry="' + idx + '" data-retry-type="upload" type="button">重新上传</button>' +
            '</div>';
          } else if (isProcessingTranscript) {
            summaryHTML = '<div class="audio-summary-loading">' +
              '<span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>' +
              '<span style="margin-left:6px;color:var(--text-tertiary);font-size:12px">转写中</span>' +
            '</div>';
          } else if (isProcessing) {
            summaryHTML = '<div class="audio-summary-loading">' +
              '<span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>' +
              '<span style="margin-left:6px;color:var(--text-tertiary);font-size:12px">智能摘要生成中</span>' +
            '</div>';
          } else if (isFailedTranscript) {
            summaryHTML = '<div class="audio-fail-row audio-fail-row--transcript">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>' +
              '<span class="audio-fail-label">转写失败</span>' +
              '<button class="retry-btn" data-retry="' + idx + '" data-retry-type="transcript" type="button">重新处理</button>' +
            '</div>';
          } else if (isFailedSummary) {
            summaryHTML = '<div class="audio-fail-row audio-fail-row--summary">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>' +
              '<span class="audio-fail-label">摘要生成失败</span>' +
              '<button class="retry-btn" data-retry="' + idx + '" data-retry-type="summary" type="button">重新生成</button>' +
            '</div>';
          } else if (isEmpty) {
            summaryHTML = '<div class="audio-fail-row audio-fail-row--empty">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"></path><path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path><path d="M5 11a7 7 0 0 0 11.5 5.33"></path></svg>' +
              '<span class="audio-fail-label">空录音 · 未识别到有效语音</span>' +
            '</div>';
          } else {
            summaryHTML = '<div class="audio-summary-text">' + (item.summary || '暂无摘要') + '</div>';
          }

          var canPlay = !isUploading && !isUploadFailed && !isFailedTranscript && !isProcessingTranscript;
          var sourceLabel = item.source
            ? '<span class="audio-foot-source"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path></svg><span class="audio-foot-source-name">' + item.source + '</span></span>'
            : '';

          return '<article class="audio-card" data-audio-index="' + idx + '">' +
            '<div class="audio-card-head">' +
              '<h3 class="audio-title">' + item.title + '</h3>' +
              '<button class="audio-more-btn" data-ctx-index="' + idx + '" type="button">···</button>' +
            '</div>' +
            summaryHTML +
            '<div class="audio-card-foot">' +
              '<div class="audio-foot-meta">' +
                '<span class="audio-foot-time">' + item.time + '</span>' +
                sourceLabel +
              '</div>' +
              (canPlay
                ? '<button class="audio-play-btn ' + (isPlaying ? 'playing' : '') + '" data-play-index="' + idx + '" type="button">' +
                    (isPlaying
                      ? '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="4" height="16"></rect><rect x="15" y="4" width="4" height="16"></rect></svg>'
                      : '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>') +
                    '<span>' + (isPlaying ? '暂停' : item.duration) + '</span>' +
                  '</button>'
                : '<span class="audio-duration-plain">' + item.duration + '</span>') +
            '</div>' +
          '</article>';
        }).join('');
      }

      function parseAudioEntryTime(item, fallbackIndex) {
        var raw = item.statusTime || item.updatedAt || item.createdAt || item.time;
        if (!raw || raw === '刚刚') return Date.now() - (fallbackIndex || 0);
        var normalized = String(raw).replace(/-/g, '/');
        var time = new Date(normalized).getTime();
        return Number.isNaN(time) ? Date.now() - (fallbackIndex || 0) : time;
      }

      function getAudioEntryStatus(item) {
        var status = item.entryStatus || item.status;
        if (status === 'uploading') return 'uploading';
        if (status === 'upload_failed') return 'upload_failed';
        if (status === 'processing') return 'processing';
        if (status === 'processing_transcript') return 'processing_transcript';
        if (status === 'summary_generating' || status === 'processing_summary') return 'summary_generating';
        if (status === 'failed_transcript' || status === 'failed') return 'failed_transcript';
        if (status === 'failed_summary') return 'failed_summary';
        if (status === 'empty') return 'empty';
        if (status === 'done') return item.viewed ? 'done_viewed' : 'done_unviewed';
        return 'processing';
      }

      function formatAudioAssistantTime(raw) {
        if (!raw || raw === '刚刚') return raw || '';
        var match = String(raw).match(/^(\d{4})-(\d{2})-(\d{2})(?:\s+(\d{2}):(\d{2}))?/);
        if (!match) return raw;
        return match[4] ? match[2] + '-' + match[3] + ' ' + match[4] + ':' + match[5] : match[2] + '-' + match[3];
      }

      function getAudioAssistantEntryState() {
        if (!audioItems.length) {
          return { preview: '暂无音频，点击开始录音', time: '', badge: 0 };
        }
        var latest = audioItems.reduce(function (current, item, idx) {
          var itemTime = parseAudioEntryTime(item, idx);
          if (!current || itemTime > current.timeValue) return { item: item, timeValue: itemTime };
          return current;
        }, null).item;
        var title = latest.title || '未命名音频';
        var state = getAudioEntryStatus(latest);
        var map = {
          uploading: { prefix: '正在上传：', badge: 0 },
          upload_failed: { prefix: '上传失败：', badge: 'dot' },
          processing: { prefix: '正在处理：', badge: 0 },
          processing_transcript: { prefix: '正在转写：', badge: 0 },
          summary_generating: { prefix: '正在生成摘要：', badge: 0 },
          done_unviewed: { prefix: '已处理完成：', badge: 'dot' },
          done_viewed: { prefix: '最近处理完成：', badge: 0 },
          failed_transcript: { prefix: '转写失败：', badge: 'dot' },
          failed_summary: { prefix: '摘要生成失败：', badge: 'dot' },
          empty: { prefix: '空录音：', badge: 0 }
        };
        var config = map[state] || map.processing;
        return {
          preview: config.prefix + title,
          badge: config.badge,
          time: formatAudioAssistantTime(latest.statusTime || latest.updatedAt || latest.createdAt || latest.time || '')
        };
      }

      function markAudioAssistantEntryViewed() {
        audioItems.forEach(function (item) {
          if (item.status === 'done') item.viewed = true;
        });
      }

      function updateSuperFab() {
        if (!superAgentFab) return;
        superAgentFab.classList.toggle('has-unread', !!superAgentState.unread);
        superAgentFab.setAttribute('aria-label', superAgentState.unread ? '打开 ' + superAgentName + '，有新消息' : '打开 ' + superAgentName);
      }

      function markSuperAgentRead() {
        superAgentState.unread = false;
        updateSuperFab();
      }

      function superMessageHTML(message, index, messageCount) {
        if (message.type === 'report-card') {
          return '<div class="super-msg-row agent"><div class="super-msg-main">' +
            '<div class="super-msg-meta">' + escapeHTML(message.time || '') + '</div>' +
            '<div class="super-msg-card clickable" data-super-action="open-report" data-report-id="report-daily">' +
              '<div class="article-preview">' +
                '<div class="article-cover">' +
                  '<div class="article-logo">zleap</div>' +
                  '<div class="article-cover-title">' + escapeHTML(message.title) + '</div>' +
                  '<div class="article-cover-subtitle">' + escapeHTML(message.subtitle) + '</div>' +
                '</div>' +
                '<div class="article-preview-body">' +
                  '<div class="article-preview-title">企业关键动态日报</div>' +
                  '<p class="article-preview-desc">' + escapeHTML(message.text) + '</p>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div></div>';
        }
        var bubble = '<div class="super-msg-row ' + (message.role === 'user' ? 'user' : 'agent') + '"><div class="super-msg-main">' +
          '<div class="super-msg-bubble">' + escapeHTML(message.text || '').replace(/\n/g, '<br>') + '</div>';
        if (message.role !== 'user' && message.sourceCount) {
          bubble += '<button class="super-source-pill" type="button" data-super-action="open-sources" data-source-count="' + escapeHTML(message.sourceCount) + '">' +
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path></svg>' +
            '<span>来源 · ' + escapeHTML(message.sourceCount) + '</span>' +
          '</button>';
        }
        if (message.recs && message.recs.length && index === messageCount - 1 && message.role !== 'user') {
          bubble += '<div class="super-rec-wrap">' + message.recs.map(function (rec) {
            return '<button class="super-rec-btn" type="button" data-super-question="' + escapeHTML(rec) + '">' + escapeHTML(rec) + '</button>';
          }).join('') + '</div>';
        }
        bubble += '<div class="super-msg-meta">' + escapeHTML(message.time || '') + '</div></div></div>';
        return bubble;
      }

      function renderSuperAgent() {
        if (!superAgentPageBody) return;
        var title = document.getElementById('superAgentTitle');
        if (title) title.textContent = superAgentName;
        superAgentPageBody.innerHTML = superAgentState.messages.map(function (message, index) {
          return superMessageHTML(message, index, superAgentState.messages.length);
        }).join('');
        var input = document.getElementById('superAgentInput');
        if (input) input.value = superAgentState.draft || '';
      }

      function renderSuperSettings() {
        var wrap = document.getElementById('superSettingList');
        if (!wrap) return;
        var chev = '<svg class="setting-row-chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>';
        wrap.innerHTML =
          '<div class="setting-profile">' +
            '<div class="setting-profile-avatar"><img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=180&q=80" alt="' + escapeHTML(superAgentName) + '"></div>' +
            '<div class="setting-profile-name">' + escapeHTML(superAgentName) + '</div>' +
          '</div>' +
          '<div class="setting-group">' +
            '<button class="setting-row" type="button" data-super-action="open-role">' +
              '<span class="setting-row-label">角色定义</span><span class="setting-row-value">Markdown 提示词</span>' + chev +
            '</button>' +
            '<button class="setting-row" type="button" data-super-action="open-task-list">' +
              '<span class="setting-row-label">自动化任务管理</span><span class="setting-row-value">任务与推送</span>' + chev +
            '</button>' +
          '</div>' +
          '<div class="setting-group">' +
            '<button class="setting-row destructive" type="button" data-super-action="clear-chat">' +
              '<span class="setting-row-label">清空聊天记录</span>' +
            '</button>' +
          '</div>';
      }

      function renderSuperTasks() {
        var filters = document.getElementById('superTaskFilters');
        var list = document.getElementById('superTaskList');
        if (!filters || !list) return;
        filters.innerHTML = '<button class="active" type="button">全部</button><button type="button">进行中</button><button type="button">已暂停</button>';
        list.innerHTML = superAgentState.tasks.map(function (task) {
          return '<div class="super-task-card" data-task-id="' + escapeHTML(task.id) + '">' +
            '<div class="super-task-title">' + escapeHTML(task.title) + '</div>' +
            '<div class="super-task-meta">' + escapeHTML(task.desc) + '<br>下次执行：' + escapeHTML(task.nextRun) + '</div>' +
            '<div class="super-task-actions">' +
              '<span class="super-task-status ' + (task.status === 'paused' ? 'paused' : '') + '">' + (task.status === 'paused' ? '已暂停' : '运行中') + '</span>' +
              '<button class="super-task-toggle" type="button" data-super-action="toggle-task" data-task-id="' + escapeHTML(task.id) + '">' + (task.status === 'paused' ? '恢复' : '暂停') + '</button>' +
            '</div>' +
          '</div>';
        }).join('') || '<div class="super-empty">暂无自动化任务</div>';
      }

      function openReportDetail() {
        renderDetail(baseItems[0]);
        setDetailMode('sources');
      }

      function retireSuperRecommendations() {
        superAgentState.messages.forEach(function (message) {
          if (message.recs) delete message.recs;
        });
      }

      function startNewTopic() {
        retireSuperRecommendations();
        superAgentState.messages.push({ role: 'agent', text: '可以开始一个新话题了。你想继续讨论什么，或者要我帮你安排什么新的任务？', time: '刚刚', recs: ['总结一个新主题', '创建一个新的自动化任务', '帮我梳理下一步动作'] });
        superAgentState.draft = '';
        renderSuperAgent();
      }

      function sendSuperMessage(text) {
        var content = (text || superAgentState.draft || '').trim();
        if (!content) return;
        retireSuperRecommendations();
        superAgentState.messages.push({ role: 'user', text: content, time: '刚刚' });
        superAgentState.draft = '';
        var reply = /任务|自动化/.test(content)
          ? '我可以基于当前页面内容为你创建自动化任务。你也可以先去任务管理页查看已有规则。'
          : /总结|重点|结论/.test(content)
            ? '我已结合当前页面和最近信号做了收敛，当前最值得关注的是客户阻塞、预算收紧和 ARR 续费压力。'
            : '我已经收到你的问题。你也可以继续让我总结、排序，或者直接安排自动化任务。';
        superAgentState.messages.push({ role: 'agent', text: reply, time: '刚刚', recs: /任务|自动化/.test(content) ? ['查看自动化任务', '开启新话题'] : ['帮我总结当前列表', '有哪些重点结论', '创建一个新的自动化任务'] });
        renderSuperAgent();
      }

      function renderContactBook() {
        var list = document.getElementById('contactBookList');
        var searchWrap = document.getElementById('contactBookSearchWrap');
        var searchInput = document.getElementById('contactBookSearch');
        if (!list || !searchWrap || !searchInput) return;
        document.querySelectorAll('[data-contact-tab]').forEach(function (tab) {
          var selected = tab.dataset.contactTab === contactBookState.active;
          tab.classList.toggle('active', selected);
          tab.setAttribute('aria-selected', selected ? 'true' : 'false');
        });
        var isRecommended = contactBookState.active === 'recommended';
        searchWrap.hidden = isRecommended;
        searchInput.placeholder = contactBookState.active === 'assistants' ? '搜索创建的助手' : '搜索已关注的人';
        if (searchInput.value !== contactBookState.query) searchInput.value = contactBookState.query;
        var query = contactBookState.query.trim().toLowerCase();
        var entries = (contactBookData[contactBookState.active] || []).filter(function (item) {
          if (contactBookState.active === 'following' && !contactBookState.followed.has(item.id)) return false;
          return !query || (item.name + ' ' + item.bio).toLowerCase().includes(query);
        });
        list.classList.toggle('recommended', isRecommended);
        list.innerHTML = entries.map(function (item) {
          var isAssistant = contactBookState.active === 'assistants';
          var followed = contactBookState.followed.has(item.id);
          var actionLabel = isAssistant ? '去聊天' : (followed ? '已关注' : '关注');
          var actionClass = isAssistant ? '' : (followed ? 'followed' : 'follow');
          var action = isAssistant ? 'chat' : 'follow';
          return '<div class="contact-person" data-contact-id="' + escapeHTML(item.id) + '" role="button" tabindex="0" aria-label="打开与' + escapeHTML(item.name) + '的会话">' +
            '<div class="contact-person-avatar"><img src="' + escapeHTML(item.photo) + '" alt="' + escapeHTML(item.name) + '"></div>' +
            '<div class="contact-person-main"><div class="contact-person-name">' + escapeHTML(item.name) + '</div><div class="contact-person-bio">' + escapeHTML(item.bio) + '</div></div>' +
            '<button class="contact-person-action ' + actionClass + '" type="button" data-contact-action="' + action + '" data-contact-id="' + escapeHTML(item.id) + '">' + actionLabel + '</button>' +
          '</div>';
        }).join('') || '<div class="contact-book-empty">没有找到匹配的内容</div>';
      }

      function findContactBookItem(id) {
        var groups = ['following', 'assistants', 'recommended'];
        for (var i = 0; i < groups.length; i++) {
          var found = contactBookData[groups[i]].find(function (item) { return item.id === id; });
          if (found) return found;
        }
        return null;
      }

      function renderContactChat() {
        var person = findContactBookItem(contactChatState.currentId);
        if (!person) return;
        var name = document.getElementById('contactChatName');
        var avatar = document.getElementById('contactChatAvatar');
        var body = document.getElementById('contactChatBody');
        if (name) name.textContent = person.name;
        if (avatar) { avatar.src = person.photo; avatar.alt = person.name; }
        var messages = contactChatState.messages[person.id] || [];
        body.innerHTML = messages.map(function (message) {
          return '<div class="contact-chat-row ' + (message.mine ? 'mine' : '') + '"><div class="contact-chat-bubble">' + escapeHTML(message.text) + '</div></div>';
        }).join('');
        requestAnimationFrame(function () { body.scrollTop = body.scrollHeight; });
      }

      function openContactChat(id) {
        if (id === 'my-agent') {
          renderSuperAgent();
          markSuperAgentRead();
          switchPage('superAgent');
          return;
        }
        var person = findContactBookItem(id);
        if (!person) return;
        contactChatState.currentId = id;
        if (!contactChatState.messages[id]) {
          contactChatState.messages[id] = [{ mine: false, text: '你好，我是' + person.name + '。' + (person.bio || '很高兴和你聊天。') }];
        }
        var input = document.getElementById('contactChatInput');
        if (input) input.value = '';
        renderContactChat();
        switchPage('contactChat');
      }

      function sendContactChatMessage() {
        var input = document.getElementById('contactChatInput');
        var text = (input.value || '').trim();
        if (!text || !contactChatState.currentId) return;
        var person = findContactBookItem(contactChatState.currentId);
        contactChatState.messages[contactChatState.currentId].push({ mine: true, text: text });
        input.value = '';
        contactChatState.messages[contactChatState.currentId].push({ mine: false, text: '收到，我会继续围绕这个话题和你聊。' });
        renderContactChat();
        if (person) showToast('消息已发送给' + person.name);
      }

      function renderConvList() {
        var audioAssistantState = getAudioAssistantEntryState();
        var convItems = [
          { id: 'audio-ast', name: '录音助手', preview: audioAssistantState.preview, time: audioAssistantState.time, badge: audioAssistantState.badge, avatarType: 'audio-ast', avatarRole: 'agent', system: true, icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="12" rx="3"></rect><path d="M5 11a7 7 0 0 0 14 0"></path><line x1="12" y1="18" x2="12" y2="22"></line><line x1="8.5" y1="22" x2="15.5" y2="22"></line></svg>' },
          { id: 'story-granny', name: '爱讲故事的老奶奶', preview: '但如果拿面相去断人一生吉凶，那我就摇...', time: '3月31日', badge: 0, avatarType: 'photo', avatarRole: 'human', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80' },
          { id: 'notif-center', name: '通知中心', preview: '新报告已生成', time: '4月23日', badge: 0, avatarType: 'system-notif', avatarRole: 'agent', system: true, icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>' },
          { id: 'file-trans', name: '文件传输助手-APP', preview: '这是什么输入框', time: '4月22日', badge: 0, avatarType: 'file-trans', avatarRole: 'agent', system: true, icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"></path><path d="M9 13h6"></path><path d="M9 17h4"></path></svg>' },
          { id: 'zleaper', name: 'Zleaper', preview: '刚才自动生成的报告因为内容安全原因被拦...', time: '5月6日', badge: 0, avatarType: 'photo', avatarRole: 'agent', photo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=96&q=80' },
          { id: 'coco', name: 'Coco晒太阳', preview: 'aily......这个名字我不太熟悉，能多说一点...', time: '4月15日', badge: 0, avatarType: 'photo', avatarRole: 'human', photo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=96&q=80' },
          { id: 'loshen', name: '洛神饮', preview: '你好呀，很开心见到你。以后你想聊天、了...', time: '4月2日', badge: 0, avatarType: 'photo', avatarRole: 'human', photo: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=96&q=80' },
          { id: 'hongdou', name: '煮红豆', preview: '你好呀，很开心见到你。以后你想聊天、了...', time: '4月2日', badge: 0, avatarType: 'photo', avatarRole: 'human', photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=96&q=80' },
          { id: 'kongqi', name: '空气刘海君', preview: '你可以当我是个过来人，不是老师，也不卖...', time: '4月2日', badge: 0, avatarType: 'photo', avatarRole: 'human', photo: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&w=96&q=80' },
          { id: 'cola', name: '可乐加冰块', preview: '好的！', time: '4月2日', badge: 0, avatarType: 'photo', avatarRole: 'human', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=96&q=80' }
        ];
        var convListEl = document.getElementById('convList');
        convListEl.innerHTML = convItems.map(function (item) {
          var avatarHTML;
          var roleClass = item.system ? 'conv-avatar-system' : (item.avatarRole === 'agent' ? 'agent-avatar-glow' : 'human-avatar');
          if (item.system) {
            avatarHTML = '<div class="conv-avatar conv-avatar-system conv-avatar-system--' + item.avatarType + '">' + (item.icon || '') + '</div>';
          } else if (item.avatarType === 'photo') {
            avatarHTML = '<div class="conv-avatar ' + roleClass + '"><img src="' + item.photo + '" alt="' + item.name + '"></div>';
          } else if (item.zleapLogo) {
            avatarHTML = '<div class="conv-avatar zleaper agent-avatar-glow" style="font-style:italic;font-weight:900;font-size:13px;color:#555;letter-spacing:-1px">zleap</div>';
          } else {
            avatarHTML = '<div class="conv-avatar ' + item.avatarType + ' ' + roleClass + '">' + (item.icon || '') + '</div>';
          }
          return '<div class="conv-item" data-conv-id="' + item.id + '">' +
            avatarHTML +
            '<div class="conv-body">' +
              '<div class="conv-head">' +
                '<span class="conv-name">' + item.name + '</span>' +
                '<span class="conv-time">' + item.time + '</span>' +
              '</div>' +
              '<div class="conv-preview">' + item.preview + '</div>' +
            '</div>' +
            (item.badge ? '<div class="conv-badge ' + (item.badge === 'dot' ? 'dot' : '') + '">' + (item.badge === 'dot' ? '' : item.badge) + '</div>' : '') +
          '</div>';
        }).join('');
        convListEl.onclick = function (e) {
          var item = e.target.closest('[data-conv-id]');
          if (!item) return;
          if (item.dataset.convId === 'audio-ast') {
            markAudioAssistantEntryViewed();
            switchPage('audio');
            return;
          }
        };
      }

      function renderAudioSearch() {
        document.getElementById('recentSearchChips').innerHTML = searchTerms.map(function (t) {
          return '<span class="search-chip" style="cursor:pointer">' + t + '</span>';
        }).join('');
        // Reset to empty state
        var input = document.getElementById('audioSearchInput');
        if (input) { input.value = ''; }
        showSearchEmpty();
      }

      function showSearchEmpty() {
        document.getElementById('searchEmptyState').style.display = '';
        document.getElementById('searchResultsState').style.display = 'none';
        var clr = document.getElementById('audioSearchClear');
        if (clr) clr.style.display = 'none';
      }

      function showSearchResults(query) {
        document.getElementById('searchEmptyState').style.display = 'none';
        document.getElementById('searchResultsState').style.display = '';
        var clr = document.getElementById('audioSearchClear');
        if (clr) clr.style.display = '';
        var q = query.toLowerCase();
        var results = audioItems.filter(function(item) {
          return item.title.toLowerCase().indexOf(q) !== -1 ||
            (item.summary && item.summary.toLowerCase().indexOf(q) !== -1) ||
            (item.source && item.source.toLowerCase().indexOf(q) !== -1);
        });
        var meta = document.getElementById('searchResultsMeta');
        var resultsList = document.getElementById('audioSearchResults');
        var noResult = document.getElementById('searchNoResult');
        if (results.length === 0) {
          meta.textContent = '未找到相关录音';
          resultsList.innerHTML = '';
          noResult.style.display = '';
        } else {
          meta.textContent = '找到 ' + results.length + ' 条结果';
          noResult.style.display = 'none';
          var re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
          var mark = function(s) { return s.replace(re, '<mark style="background:rgba(255,139,33,.25);border-radius:2px;padding:0 1px">$1</mark>'); };
          resultsList.innerHTML = results.map(function(item) {
            var idx = audioItems.indexOf(item);
            var hiTitle = mark(item.title);
            var hiSource = item.source ? mark(item.source) : '';
            var isProcessingTranscript = item.status === 'processing_transcript';
            var isProcessing = item.status === 'processing';
            var isFailedTranscript = item.status === 'failed_transcript' || item.status === 'failed';
            var isFailedSummary = item.status === 'failed_summary';
            var isEmpty = item.status === 'empty';
            var summaryHTML;
            if (isProcessingTranscript) {
              summaryHTML = '<div class="audio-summary-loading">' +
                '<span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>' +
                '<span style="margin-left:6px;color:var(--text-tertiary);font-size:12px">转写中</span>' +
              '</div>';
            } else if (isProcessing) {
              summaryHTML = '<div class="audio-summary-loading">' +
                '<span class="loading-dot"></span><span class="loading-dot"></span><span class="loading-dot"></span>' +
                '<span style="margin-left:6px;color:var(--text-tertiary);font-size:12px">智能摘要生成中</span>' +
              '</div>';
            } else if (isFailedTranscript) {
              summaryHTML = '<div class="audio-fail-row audio-fail-row--transcript">' +
                '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>' +
                '<span class="audio-fail-label">转写失败</span>' +
              '</div>';
            } else if (isFailedSummary) {
              summaryHTML = '<div class="audio-fail-row audio-fail-row--summary">' +
                '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>' +
                '<span class="audio-fail-label">摘要生成失败</span>' +
              '</div>';
            } else if (isEmpty) {
              summaryHTML = '<div class="audio-fail-row audio-fail-row--empty">' +
                '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"></path><path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path><path d="M5 11a7 7 0 0 0 11.5 5.33"></path></svg>' +
                '<span class="audio-fail-label">空录音 · 未识别到有效语音</span>' +
              '</div>';
            } else {
              summaryHTML = '<div class="audio-summary-text">' + (item.summary || '暂无摘要') + '</div>';
            }
            return '<article class="audio-card" data-audio-index="' + idx + '">' +
              '<div class="audio-card-head">' +
                '<h3 class="audio-title">' + hiTitle + '</h3>' +
                '<button class="audio-more-btn" data-ctx-index="' + idx + '" type="button">···</button>' +
              '</div>' +
              summaryHTML +
              '<div class="audio-card-foot">' +
                '<div class="audio-foot-meta">' +
                  '<span class="audio-foot-time">' + item.time + '</span>' +
                  (hiSource ? '<span class="audio-foot-source"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path></svg><span class="audio-foot-source-name">' + hiSource + '</span></span>' : '') +
                '</div>' +
                '<span class="audio-duration-plain">' + item.duration + '</span>' +
              '</div></article>';
          }).join('');
        }
      }

      /* ─── PAGE SWITCH ─── */
      /* ═══════════════════ 信息源搜索 ═══════════════════ */
      var searchState = {
        range: 'public',
        dailyDate: '7/6',
        // group: own = 我的信息源；shared = 与我共享（仅企业版）
        mySources: [
          { id: 'ms1', name: '团队周报', group: 'own' }, { id: 'ms2', name: '客户情报库', group: 'own' },
          { id: 'ms3', name: '市场竞品', group: 'own' }, { id: 'ms4', name: '财务动态', group: 'own' },
          { id: 'ms5', name: '设计资产库', group: 'shared' }, { id: 'ms6', name: '产品路线图', group: 'shared' },
          { id: 'ms7', name: '运营数据', group: 'shared' }
        ],
        selectedSources: new Set(['ms2', 'ms5', 'ms6']),
        placeholders: [
          '假婆婆纳属包含哪两个物种？',
          '客户 A 最近有哪些风险信号？',
          '汇总本周 CFO 的预算相关表态',
          '竞品在 AI 方向的最新动作'
        ],
        phIdx: 0,
        dailyEvents: [
          {
            id: 'de1', title: 'AI 科研工具双轨发布，推动人机协作科研范式变革',
            summary: '2026 年 6 月 30 日 OpenAI、Anthropic 分别发布 AI 科研基准测试与工作台，共同标志 AI for Science 进入双轨验证阶段。',
            source: 'PaperAgent', avatar: 'P', time: '18:30',
            tags: ['主题-AI科研', '时间-2026-06-30', '来源-科技媒体'],
            reference: 'OpenAI（06-30）：发布 AI 科研基准测试，覆盖 12 个学科的推理评测。\nAnthropic（06-30）：发布科研工作台，支持文献综述与实验编排。',
            link: 'https://example.com/ai-science',
            children: [
              { id: 'de1-1', title: '1、OpenAI 发布 AI 科研基准测试', summary: '覆盖 12 个学科的推理评测，用于衡量模型的科研能力。', tags: ['来源-OpenAI', '时间-2026-06-30'], reference: 'OpenAI：基准包含 12 个学科…', link: '#' },
              { id: 'de1-2', title: '2、Anthropic 发布科研工作台', summary: '支持文献综述、实验编排与结果复现的一体化工作台。', tags: ['来源-Anthropic'], reference: 'Anthropic：工作台支持文献综述…', link: '#' },
              { id: 'de1-3', title: '3、学界评价：进入双轨验证阶段', summary: '多位学者认为基准测试与工作台互补，标志 AI for Science 进入双轨验证。', tags: ['来源-学界'], reference: '学者：两条路线互补…', link: '#' },
              { id: 'de1-4', title: '4、下一步：推动科研范式向人机协作变革', summary: '未来科研流程将更多由人机协作完成，评测与工具双轮驱动。', tags: ['主题-趋势'], reference: '评论：人机协作科研范式…', link: '#' }
            ]
          },
          {
            id: 'de2', title: '打工人自制“人粮”新型饮食方式兴起',
            summary: '打工人自制冷冻预制菜“人粮”兴起，周末批量备餐可满足 3–7 天需求，主打省事高效，适配租房人群。',
            source: '三联生活实验室', avatar: '三', time: '18:30',
            tags: ['主题-生活方式', '人群-租房打工人'],
            reference: '受访者：周末批量备餐，工作日直接加热。\n评论：降低用餐时间与情绪消耗。',
            link: '#',
            children: [
              { id: 'de2-1', title: '1、批量备餐满足 3–7 天需求', summary: '周末集中采购与烹饪，分装冷冻，覆盖一周工作日。', tags: ['主题-备餐'], reference: '受访者：一次备一周…', link: '#' },
              { id: 'de2-2', title: '2、受众评价存在分歧', summary: '有人认可其高效省心，也有人认为口感与新鲜度打折。', tags: ['主题-评价'], reference: '评论：口感见仁见智…', link: '#' },
              { id: 'de2-3', title: '3、认可其降低情绪消耗的价值', summary: '减少每日做饭决策，降低用餐时间与情绪成本。', tags: ['主题-价值'], reference: '评论：减少决策疲劳…', link: '#' }
            ]
          },
          {
            id: 'de3', title: '《金瓶梅》映射企业运营与职场生态逻辑',
            summary: '以《金瓶梅》为载体类比企业运营与职场生态：西门庆发家映射企业发展与融资路径，妻妾、帮闲等角色对应股东与岗位。',
            source: '职场观察', avatar: '职', time: '18:30',
            tags: ['主题-职场', '主题-企业经营'],
            reference: '作者：西门庆的经营版图类比企业扩张。\n作者：帮闲角色对应 Marketing / Sales。',
            link: '#',
            children: [
              { id: 'de3-1', title: '1、发家路径映射企业发展与融资', summary: '西门庆的财富积累类比企业融资与扩张路径。', tags: ['主题-融资'], reference: '作者：发家即融资扩张…', link: '#' },
              { id: 'de3-2', title: '2、角色对应股东与岗位', summary: '妻妾、帮闲等角色分别对应股东结构与职能岗位。', tags: ['主题-组织'], reference: '作者：角色即岗位…', link: '#' }
            ]
          }
        ]
      };
      var dailyExpanded = new Set();
      var searchPhTimer = null;

      var searchResultState = { query: '', events: [], sortMode: 'smart', pathOpen: false };
      var rangeDraft = { range: 'public', sub: 'own', selected: new Set(), query: '', selectedOnly: false };

      function updateRangeButton() {
        var el = document.getElementById('searchRangeText');
        if (!el) return;
        el.textContent = searchState.range === 'public'
          ? '公共信息源'
          : '个人信息源 · ' + searchState.selectedSources.size + ' 个';
      }

      function renderSearchHome() {
        var input = document.getElementById('searchInput');
        if (input) input.placeholder = searchState.placeholders[searchState.phIdx];
        var dateEl = document.getElementById('searchDailyDate');
        if (dateEl) dateEl.textContent = searchState.dailyDate;
        updateRangeButton();
        renderDailyTimeline();
      }

      /* ── 往期事件：日期选择 ── */
      var calState = null;

      function openDatePicker() {
        var now = new Date();
        var parts = (searchState.dailyDate || (now.getMonth() + 1) + '/' + now.getDate()).split('/');
        var selM = parseInt(parts[0], 10) - 1, selD = parseInt(parts[1], 10);
        calState = { viewYear: now.getFullYear(), viewMonth: selM, selY: now.getFullYear(), selM: selM, selD: selD };
        renderCalendar();
        document.getElementById('datePickerSheet').classList.add('show');
      }

      function renderCalendar() {
        var el = document.getElementById('datePickerList');
        var now = new Date();
        var y = calState.viewYear, m = calState.viewMonth;
        var startWeekday = new Date(y, m, 1).getDay();
        var daysInMonth = new Date(y, m + 1, 0).getDate();
        var tY = now.getFullYear(), tM = now.getMonth(), tD = now.getDate();
        var canNext = (y < tY) || (y === tY && m < tM); // 往期事件：不可翻到未来月
        var chevL = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"></polyline></svg>';
        var chevR = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>';
        var head = '<div class="cal-head">' +
          '<button class="cal-nav" type="button" data-cal-prev aria-label="上个月">' + chevL + '</button>' +
          '<span class="cal-title">' + y + '年' + (m + 1) + '月</span>' +
          '<button class="cal-nav" type="button" data-cal-next' + (canNext ? '' : ' disabled') + ' aria-label="下个月">' + chevR + '</button>' +
        '</div>';
        var weekdays = ['日', '一', '二', '三', '四', '五', '六'].map(function (w) { return '<span class="cal-wd">' + w + '</span>'; }).join('');
        var cells = '';
        for (var i = 0; i < startWeekday; i++) cells += '<span class="cal-cell empty"></span>';
        for (var d = 1; d <= daysInMonth; d++) {
          var isToday = (y === tY && m === tM && d === tD);
          var isSel = (y === calState.selY && m === calState.selM && d === calState.selD);
          var isFuture = (y > tY) || (y === tY && (m > tM || (m === tM && d > tD)));
          var cls = 'cal-cell' + (isSel ? ' selected' : '') + (isToday ? ' today' : '') + (isFuture ? ' disabled' : '');
          cells += isFuture
            ? '<span class="' + cls + '">' + d + '</span>'
            : '<button class="' + cls + '" type="button" data-cal-day="' + d + '">' + d + '</button>';
        }
        el.innerHTML = head + '<div class="cal-weekdays">' + weekdays + '</div><div class="cal-grid">' + cells + '</div>';
        var prev = el.querySelector('[data-cal-prev]');
        if (prev) prev.onclick = function () { calState.viewMonth--; if (calState.viewMonth < 0) { calState.viewMonth = 11; calState.viewYear--; } renderCalendar(); };
        var next = el.querySelector('[data-cal-next]');
        if (next && !next.disabled) next.onclick = function () { calState.viewMonth++; if (calState.viewMonth > 11) { calState.viewMonth = 0; calState.viewYear++; } renderCalendar(); };
        el.querySelectorAll('[data-cal-day]').forEach(function (b) {
          b.onclick = function () {
            var d = parseInt(b.dataset.calDay, 10);
            calState.selY = calState.viewYear; calState.selM = calState.viewMonth; calState.selD = d;
            searchState.dailyDate = (calState.viewMonth + 1) + '/' + d;
            var lbl = document.getElementById('searchDailyDate');
            if (lbl) lbl.textContent = searchState.dailyDate;
            renderDailyTimeline();
            closeSheet('datePickerSheet');
          };
        });
      }

      function timelineCardHTML(ev) {
        var expanded = dailyExpanded.has(ev.id);
        var kids = ev.children || [];
        var childrenHTML = expanded ? '<div class="tl-children">' + kids.map(function (c) {
          return '<div class="tl-child" data-daily-open="' + escapeHTML(c.id) + '">' +
            '<div class="tl-child-title">' + escapeHTML(c.title) + '</div>' +
            (c.summary ? '<div class="tl-child-desc">' + escapeHTML(c.summary) + '</div>' : '') +
          '</div>';
        }).join('') + '</div>' : '';
        return '<div class="tl-item">' +
          '<div class="tl-rail"><span class="tl-time">' + escapeHTML(ev.time || '') + '</span><span class="tl-line"></span></div>' +
          '<div class="tl-card">' +
            '<div class="tl-card-body" data-daily-open="' + escapeHTML(ev.id) + '">' +
              '<div class="tl-card-title">' + escapeHTML(ev.title) + '</div>' +
              (ev.summary ? '<div class="tl-card-desc">' + escapeHTML(ev.summary) + '</div>' : '') +
            '</div>' +
            '<div class="tl-card-foot">' +
              '<span class="tl-card-source"><span class="tl-card-source-avatar">' + escapeHTML((ev.avatar || ev.source || '·').slice(0, 1)) + '</span><span class="tl-card-source-name">' + escapeHTML(ev.source || '') + '</span></span>' +
              (kids.length ? '<button class="tl-card-sub ' + (expanded ? 'expanded' : '') + '" type="button" data-daily-toggle="' + escapeHTML(ev.id) + '">' + kids.length + ' 个相关子事项 <svg class="chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button>' : '') +
            '</div>' +
            childrenHTML +
          '</div>' +
        '</div>';
      }

      function renderDailyTimeline() {
        var el = document.getElementById('searchTimeline');
        if (!el) return;
        el.innerHTML = searchState.dailyEvents.map(timelineCardHTML).join('');
        el.querySelectorAll('[data-daily-toggle]').forEach(function (btn) {
          btn.onclick = function (e) {
            e.stopPropagation();
            var id = btn.dataset.dailyToggle;
            if (dailyExpanded.has(id)) dailyExpanded.delete(id); else dailyExpanded.add(id);
            renderDailyTimeline();
          };
        });
        el.querySelectorAll('[data-daily-open]').forEach(function (node) {
          node.onclick = function (e) {
            e.stopPropagation();
            openEventDetail(findDailyEvent(node.dataset.dailyOpen));
          };
        });
      }

      function findDailyEvent(id) {
        for (var i = 0; i < searchState.dailyEvents.length; i++) {
          var ev = searchState.dailyEvents[i];
          if (ev.id === id) return ev;
          var kids = ev.children || [];
          for (var j = 0; j < kids.length; j++) if (kids[j].id === id) return kids[j];
        }
        for (var k = 0; k < searchResultState.events.length; k++) {
          var rv = searchResultState.events[k];
          if (rv.id === id) return rv;
          var rk = rv.children || [];
          for (var m = 0; m < rk.length; m++) if (rk[m].id === id) return rk[m];
        }
        return null;
      }

      function rotateSearchPlaceholder() {
        if (!searchPage || !searchPage.classList.contains('show')) return;
        var input = document.getElementById('searchInput');
        if (!input || input.value) return;
        searchState.phIdx = (searchState.phIdx + 1) % searchState.placeholders.length;
        input.placeholder = searchState.placeholders[searchState.phIdx];
      }

      /* ── 搜索范围 sheet ── */
      function openRangeSheet() {
        rangeDraft.range = searchState.range;
        rangeDraft.sub = 'own';
        rangeDraft.selected = new Set(searchState.selectedSources);
        rangeDraft.query = '';
        rangeDraft.selectedOnly = false;
        renderRangeOptions();
        document.getElementById('searchRangeSheet').classList.add('show');
      }

      function renderRangeOptions(keepSearchFocus) {
        var el = document.getElementById('rangeOptions');
        var segment = '<div class="range-segmented" role="tablist" aria-label="搜索范围类型">' +
          '<button type="button" class="range-segment ' + (rangeDraft.range === 'public' ? 'active' : '') + '" data-range-opt="public" role="tab" aria-selected="' + (rangeDraft.range === 'public') + '">公共信息源</button>' +
          '<button type="button" class="range-segment ' + (rangeDraft.range === 'mine' ? 'active' : '') + '" data-range-opt="mine" role="tab" aria-selected="' + (rangeDraft.range === 'mine') + '">个人信息源</button>' +
        '</div>';
        var content = '';
        if (rangeDraft.range === 'mine') {
          var normalizedQuery = (rangeDraft.query || '').trim().toLowerCase();
          var list = searchState.mySources.filter(function (s) {
            var inScope = rangeDraft.selectedOnly ? rangeDraft.selected.has(s.id) : s.group === rangeDraft.sub;
            var matchesName = !normalizedQuery || s.name.toLowerCase().indexOf(normalizedQuery) > -1;
            return inScope && matchesName;
          });
          var subTabs = '<div class="range-source-tabs">' +
            '<button type="button" class="range-subtab ' + (!rangeDraft.selectedOnly && rangeDraft.sub === 'own' ? 'active' : '') + '" data-range-sub="own" aria-pressed="' + (!rangeDraft.selectedOnly && rangeDraft.sub === 'own') + '">我的信息源</button>' +
            '<button type="button" class="range-subtab ' + (!rangeDraft.selectedOnly && rangeDraft.sub === 'shared' ? 'active' : '') + '" data-range-sub="shared" aria-pressed="' + (!rangeDraft.selectedOnly && rangeDraft.sub === 'shared') + '">与我共享</button>' +
            '<button type="button" class="range-selected-chip ' + (rangeDraft.selectedOnly ? 'active' : '') + '" data-range-selected-only aria-pressed="' + rangeDraft.selectedOnly + '"><img src="/check.svg" alt=""><span>已选 ' + rangeDraft.selected.size + '</span></button>' +
          '</div>';
          var listHTML = list.length
            ? list.map(function (s) {
                var checked = rangeDraft.selected.has(s.id);
                var origin = rangeDraft.selectedOnly ? '<span class="range-origin-badge ' + (s.group === 'shared' ? 'shared' : '') + '">' + (s.group === 'shared' ? '共享' : '我的') + '</span>' : '';
                return '<button type="button" class="range-check ' + (checked ? 'checked' : '') + '" data-range-src="' + escapeHTML(s.id) + '" role="checkbox" aria-checked="' + checked + '"><span class="range-check-box"></span><span class="range-source-name">' + escapeHTML(s.name) + '</span>' + origin + '</button>';
              }).join('')
            : '<div class="range-sub-empty">' + (normalizedQuery ? '未找到匹配的信息源' : (rangeDraft.selectedOnly ? '暂无已选信息源' : (rangeDraft.sub === 'shared' ? '暂无共享给你的信息源' : '暂无自建信息源'))) + '</div>';
          var searchBox = '<label class="range-source-search"><img src="/search.svg" alt=""><input id="rangeSourceSearch" type="search" value="' + escapeHTML(rangeDraft.query) + '" placeholder="搜索信息源…" autocomplete="off" aria-label="搜索信息源名称"></label>';
          content = '<div class="range-personal-state">' + subTabs + searchBox + '<div class="range-checklist">' + listHTML + '</div></div>';
        } else {
          content = '<div class="range-summary">默认包含全部公共信息，无需单独配置</div>' +
            '<div class="range-public-state"><div class="range-public-icon"><img src="/globe.svg" alt=""></div><span>包含全部公共知识库与开放数据</span></div>';
        }
        el.innerHTML = segment + content;
        var confirm = document.getElementById('rangeConfirmBtn');
        if (confirm) confirm.textContent = rangeDraft.range === 'mine' ? '确定 (' + rangeDraft.selected.size + ')' : '确定';
        el.querySelectorAll('[data-range-opt]').forEach(function (opt) {
          opt.onclick = function () { rangeDraft.range = opt.dataset.rangeOpt; renderRangeOptions(); };
        });
        el.querySelectorAll('[data-range-sub]').forEach(function (t) {
          t.onclick = function () { rangeDraft.sub = t.dataset.rangeSub; rangeDraft.selectedOnly = false; renderRangeOptions(); };
        });
        el.querySelectorAll('[data-range-src]').forEach(function (c) {
          c.onclick = function () {
            var id = c.dataset.rangeSrc;
            if (rangeDraft.selected.has(id)) rangeDraft.selected.delete(id); else rangeDraft.selected.add(id);
            renderRangeOptions();
          };
        });
        var selectedOnly = el.querySelector('[data-range-selected-only]');
        if (selectedOnly) selectedOnly.onclick = function () { rangeDraft.selectedOnly = !rangeDraft.selectedOnly; renderRangeOptions(); };
        var sourceSearch = document.getElementById('rangeSourceSearch');
        if (sourceSearch) {
          sourceSearch.oninput = function () { rangeDraft.query = sourceSearch.value; renderRangeOptions(true); };
          if (keepSearchFocus) {
            sourceSearch.focus();
            sourceSearch.setSelectionRange(sourceSearch.value.length, sourceSearch.value.length);
          }
        }
      }

      function confirmRange() {
        if (rangeDraft.range === 'mine' && !rangeDraft.selected.size) { showToast('请至少选择一个信息源'); return; }
        searchState.range = rangeDraft.range;
        searchState.selectedSources = new Set(rangeDraft.selected);
        updateRangeButton();
        closeSheet('searchRangeSheet');
      }

      function closeSheet(id) { var el = document.getElementById(id); if (el) el.classList.remove('show'); }

      /* ── 搜索结果 ── */
      function buildResultEvents() {
        return [
          { id: 'r1', title: '湘潭大学与江西财经大学并列第 106 名', summary: '湘潭大学在 2026 年 ABC 中国大学排名中位列第 106 名，总分 68.53；江西财经大学同分并列第 106 名（带星号）。综合来看，两校在学科结构上差异明显：湘潭大学为综合类高校，法学、数学等学科较强；江西财经大学以财经类见长，其带星号排名表示按财经类高校折算得出。评价体系上，该榜单综合了科研产出、师资规模、生源质量与社会声誉等多维指标，两校总分接近但优势领域不同，考生择校时应结合专业方向、地域偏好与就业去向综合判断，而非只看综合排名的名次高低。', source: '小木虫', avatar: '木', time: '01-23 12:40', tags: ['地点-湖南', '指标-68.53', '话题-综合类'], reference: '数据来源：ABC 排名官微、中国大学排行榜（CNUR）网站。\n湘潭大学：综合类，湖南省湘潭市，总分 68.53，位列第 106 名。\n江西财经大学：财经类，江西省南昌市，总分 68.53，并列第 106 名（带星号）。\n星号说明：带星号表示该校排名为按其所属类别（财经类）折算后的参考排名，与综合类高校不完全可比。\n指标构成：综合得分由科研（论文、项目、奖项）、师资（规模与结构）、生源（录取分数）、声誉（学界与用人单位评价）等维度加权得出。\n更新时间：2026 年 1 月发布，数据以当年官方公示为准。\n备注：不同榜单口径存在差异，建议交叉核对多个来源后再做结论。', link: 'https://example.com/rank' },
          { id: 'r2', title: '湘潭理工学院概况与发展历程', summary: '湘潭理工学院地处湘潭市九华经开区，是湖南省首个完成独立学院转设的民办本科高校，前身为湖南工商大学北津学院。', source: '募格学术', avatar: '募', time: '04-24 12:23', tags: ['地点-湖南', '类型-民办本科'], reference: '湘潭理工学院：2018 年完成转设，人社部博士后科研工作站联合培养单位。', link: '#' },
          { id: 'r3', title: '湘潭大学法学学部学科评估获 B+', summary: '法学学部历史悠久，拥有本硕博完整培养体系及博士后流动站，学科评估获 B+，师资规模居省内前列。', source: '考研帮', avatar: '研', time: '03-11 09:12', tags: ['学科-法学', '评估-B+'], reference: '法学学部：本硕博 + 博士后流动站，与最高检共建检察公益诉讼研究基地。', link: '#' },
          { id: 'r4', title: '2026 博士研究生招生简章发布', summary: '学校发布 2026 年博士研究生招生简章及多个暑期学校项目，研究生招生与培养工作稳步推进。', source: '研招网', avatar: '招', time: '02-28 15:40', tags: ['时间-2026', '类型-招生'], reference: '2026 博士招生简章：多学科招生，含暑期学校项目。', link: '#' },
          { id: 'r5', title: '计算机等学科考情：吸引力持续增强', summary: '考研方面，计算机等学科考情分析显示其吸引力持续增强，部分学员成功上岸。', source: '小木虫', avatar: '木', time: '04-02 20:15', tags: ['学科-计算机', '话题-考研'], reference: '考情：计算机学科报考热度上升…', link: '#' }
        ];
      }

      var searchResultLoadingToken = 0;
      function openSearchResults(query, options) {
        var loading = !!(options && options.loading);
        var input = document.getElementById('searchResultInput');
        if (input) input.value = query;
        bottomNav.classList.add('hide');
        searchResultPage.classList.add('show');
        if (loading) {
          searchResultPage.classList.add('loading');
          var token = ++searchResultLoadingToken;
          setTimeout(function () {
            if (token !== searchResultLoadingToken) return;
            populateSearchResults(query);
            searchResultPage.classList.remove('loading');
          }, 1400);
          return;
        }
        searchResultPage.classList.remove('loading');
        searchResultLoadingToken++;
        populateSearchResults(query);
      }

      function populateSearchResults(query) {
        searchResultState.query = query;
        searchResultState.events = buildResultEvents();
        // 给每条结果事项挂上「推理路径」——说明该事项是怎么被检索到的
        searchResultState.events.forEach(function (ev) {
          ev.path = { query: query, source: ev.source, via: '关键词 + 语义相似度检索', hit: ev.title };
        });
        searchResultState.sortMode = 'smart';
        renderResultSummary();
        renderResultControls();
        renderResultList();
        document.getElementById('searchResultBody').scrollTop = 0;
      }

      function closeSearchResults() {
        searchResultPage.classList.remove('show');
        if (currentPage === 'search') bottomNav.classList.remove('hide');
      }

      function buildResultSummaryText() {
        var q = escapeHTML(searchResultState.query);
        var n = searchResultState.events.length;
        return '围绕「' + q + '」共汇总 ' + n + ' 条来源事项' + cite(1) + '。综合来看，相关信息主要集中在排名、学科建设与招生动态三个方面' + cite(3) + '；其中并列排名与学科评估结论的置信度较高' + cite(2) + '，招生与考情类信息更新较为频繁，建议结合原文参考进一步核对' + cite(5) + '。';
      }
      function renderResultSummary() {
        var el = document.getElementById('srSummary');
        el.innerHTML =
          '<div class="sr-summary-text clamped">' + buildResultSummaryText() + '</div>' +
          '<div class="sr-summary-foot">' +
            '<span class="sr-summary-tag"><span class="ai-badge">Ai</span>总结参考以下前 12 个数据</span>' +
            '<button class="sr-summary-more" type="button" id="srSummaryMore">更多' +
              '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>' +
            '</button>' +
          '</div>';
        var more = el.querySelector('#srSummaryMore');
        if (more) more.onclick = openAiSummarySheet;
      }
      function cite(n) { return '<span class="sr-cite" data-cite="' + n + '" role="button" tabindex="0">' + n + '</span>'; }

      function openEventByCite(n) {
        var events = searchResultState.events || [];
        if (!events.length) return;
        var idx = Math.min(Math.max(0, n - 1), events.length - 1);
        var ev = events[idx];
        if (ev) openEventDetail(ev);
      }

      function openAiSummarySheet() {
        document.getElementById('aiSummarySheetBody').innerHTML =
          '<div class="ai-summary-body">' + buildResultSummaryText() + '</div>';
        document.getElementById('aiSummarySheet').classList.add('show');
      }

      function renderResultControls() {
        var sortBtn = document.querySelector('[data-sr-ctrl="sort"]');
        if (!sortBtn) return;
        var isTime = searchResultState.sortMode === 'time';
        var icon = isTime
          ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 2"></path></svg>'
          : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M11 18h2"></path></svg>';
        sortBtn.innerHTML = icon + (isTime ? '时间排序' : '智能排序');
      }

      function resultCardHTML(ev, idx) {
        return '<div class="sr-result" data-result-id="' + escapeHTML(ev.id) + '">' +
          '<div class="sr-result-body">' +
            '<div class="sr-result-main" data-result-open="' + escapeHTML(ev.id) + '">' +
              '<div class="sr-result-title">' + (idx + 1) + '、' + escapeHTML(ev.title) + '</div>' +
              (ev.summary ? '<div class="sr-result-desc">' + escapeHTML(ev.summary) + '</div>' : '') +
            '</div>' +
            '<div class="sr-result-foot">' +
              '<span class="sr-result-source"><span class="sr-result-source-avatar">' + escapeHTML((ev.avatar || ev.source || '·').slice(0, 1)) + '</span>' + escapeHTML(ev.source || '') + '</span>' +
              '<span class="sr-result-time">' + escapeHTML(ev.time || '') + '</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      }

      function renderResultList() {
        var el = document.getElementById('searchResultList');
        var events = searchResultState.events;
        if (searchResultState.sortMode === 'time') {
          events = events.slice().sort(function (a, b) { return (b.time || '').localeCompare(a.time || ''); });
        }
        if (!events.length) { el.innerHTML = '<div class="sr-empty">暂无搜索结果</div>'; return; }
        el.innerHTML = events.map(resultCardHTML).join('');
        el.querySelectorAll('.sr-result').forEach(function (card) {
          card.onclick = function () {
            openEventDetail(findDailyEvent(card.dataset.resultId));
          };
        });
      }

      function runSearch(query) {
        var input = document.getElementById('searchInput');
        var q = (query != null ? query : (input ? input.value : '')).trim();
        if (!q) q = searchState.placeholders[searchState.phIdx];
        if (searchState.range === 'mine' && !searchState.selectedSources.size) { showToast('请先选择信息源'); return; }
        openSearchResults(q);
      }

      function switchPage(page, options) {
        currentPage = ['profile', 'agent', 'message', 'contacts', 'contactChat', 'search', 'audio', 'audioSearch', 'superAgent', 'superSettings', 'superTasks', 'superRole'].includes(page) ? page : 'home';
        app.classList.toggle('profile-mode', currentPage === 'profile');
        app.classList.toggle('alt-mode', currentPage !== 'home' && currentPage !== 'profile');
        profilePage.classList.toggle('show', currentPage === 'profile');
        agentPage.classList.toggle('show', currentPage === 'agent');
        messagePage.classList.toggle('show', currentPage === 'message');
        if (contactBookPage) contactBookPage.classList.toggle('show', currentPage === 'contacts');
        if (contactChatPage) contactChatPage.classList.toggle('show', currentPage === 'contactChat');
        if (searchPage) searchPage.classList.toggle('show', currentPage === 'search');
        if (superAgentPage) superAgentPage.classList.toggle('show', currentPage === 'superAgent');
        if (superAgentSettingsPage) superAgentSettingsPage.classList.toggle('show', currentPage === 'superSettings');
        if (superAgentTasksPage) superAgentTasksPage.classList.toggle('show', currentPage === 'superTasks');
        if (superAgentRolePage) superAgentRolePage.classList.toggle('show', currentPage === 'superRole');
        audioPage.classList.toggle('show', currentPage === 'audio');
        audioSearchPage.classList.toggle('show', currentPage === 'audioSearch');
        if (!options || !options.skipHistory) {
          if (pageHistory[pageHistory.length - 1] !== currentPage) pageHistory.push(currentPage);
        }
        // Nav active: audio & audioSearch both highlight "message" since audio is sub-page of message
        var navActive = currentPage;
        if (navActive === 'contacts' || navActive === 'contactChat' || navActive === 'audio' || navActive === 'audioSearch' || navActive === 'superAgent' || navActive === 'superSettings' || navActive === 'superTasks' || navActive === 'superRole') navActive = 'message';
        if (navActive === 'agent') navActive = 'profile';
        document.querySelectorAll('.nav-item').forEach(function (item) {
          item.classList.toggle('active', item.dataset.nav === navActive);
        });
        if (currentPage === 'profile') { bottomNav.classList.remove('hide'); audioFabBar.classList.remove('visible'); renderProfileFeed(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        else if (currentPage === 'agent') { bottomNav.classList.remove('hide'); audioFabBar.classList.remove('visible'); renderAgentFeed(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        else if (currentPage === 'message') { bottomNav.classList.remove('hide'); audioFabBar.classList.remove('visible'); renderConvList(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        else if (currentPage === 'contacts') { bottomNav.classList.add('hide'); audioFabBar.classList.remove('visible'); renderContactBook(); }
        else if (currentPage === 'contactChat') { bottomNav.classList.add('hide'); audioFabBar.classList.remove('visible'); renderContactChat(); }
        else if (currentPage === 'search') { bottomNav.classList.add('hide'); audioFabBar.classList.remove('visible'); renderSearchHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        else if (currentPage === 'superAgent') { bottomNav.classList.add('hide'); audioFabBar.classList.remove('visible'); renderSuperAgent(); markSuperAgentRead(); }
        else if (currentPage === 'superSettings') { bottomNav.classList.add('hide'); audioFabBar.classList.remove('visible'); renderSuperSettings(); }
        else if (currentPage === 'superTasks') { bottomNav.classList.add('hide'); audioFabBar.classList.remove('visible'); renderSuperTasks(); }
        else if (currentPage === 'superRole') { bottomNav.classList.add('hide'); audioFabBar.classList.remove('visible'); }
        else if (currentPage === 'audio') { bottomNav.classList.add('hide'); audioFabBar.classList.add('visible'); renderAudioList(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        else if (currentPage === 'audioSearch') { bottomNav.classList.add('hide'); audioFabBar.classList.remove('visible'); renderAudioSearch(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
        else { audioFabBar.classList.remove('visible'); renderFeed(getVisibleItems()); }
        updateSuperFab();
        requestAnimationFrame(updateSearchBackToTop);
      }

      function openAgentPage(handle) {
        const profile = agentProfiles[handle];
        if (!profile) return;
        currentAgentDetail = profile;
        const avatarEl = document.getElementById('agentProfileAvatar');
        var img = agentAvatarImages[profile.handle] || agentAvatarImages.refresh;
        avatarEl.innerHTML = '<div class="avatar ' + (profile.avatarClass || '') + '"><img src="' + img + '" alt="' + profile.name + '"></div>';
        avatarEl.style.cssText = 'width:72px;height:72px;border-radius:50%;overflow:hidden;border:2.5px solid rgba(255,139,33,.72);box-shadow:0 0 0 4px rgba(255,139,33,.18),0 0 22px rgba(255,139,33,.36);display:grid;place-items:center;';
        document.getElementById('agentProfileName').textContent = profile.name;
        document.getElementById('agentProfileBio').textContent = profile.bio;
        document.getElementById('agentProfileId').textContent = '@' + profile.handle;
        document.getElementById('agentProfileFollowCount').textContent = String(profile.followers);
        document.getElementById('agentProfilePostCount').textContent = String(items.filter(function (i) { return i.handle === handle; }).length);
        switchPage('agent');
      }

      /* ─── Detail page comments ─── */
      var currentDetailItem = null;
      var commentsByItem = {
        'paper-openai': [
          { id: 'c1', author: '产品观察', avatarKey: 'pm', time: '2天前', content: 'GPT-5.5 在长上下文召回上很惊艳，不过 API 定价相比 5.0 还是涨了一截。', likes: 8, liked: false, mine: false, replies: [
            { id: 'c1r1', author: '商业分析', avatarKey: 'biz', time: '2天前', content: '@产品观察 看具体的使用场景吧，对一些原本要用 32k 拼接的需求其实变便宜了。', likes: 2, liked: false, mine: false, replies: [
              { id: 'c1r1r1', author: '我', avatarKey: 'me', time: '1天前', content: '@商业分析 我们 RAG + 5.5 实测召回率比 5.0 高 7-8 个点，比拼接长上下文成本更低。', likes: 1, liked: false, mine: true, replies: [
                { id: 'c1r1r1r1', author: '技术宅', avatarKey: 'tech', time: '1天前', content: '@我 关键还是 chunking 策略，模型升级不能完全替代检索质量。', likes: 0, liked: false, mine: false }
              ] }
            ] }
          ] },
          { id: 'c2', author: '我', avatarKey: 'me', time: '昨天', content: '试用了一周，幻觉确实降了不少，记忆功能还需要更长时间观察。', likes: 3, liked: true, mine: true, replies: [] }
        ],
        'article-rag': [
          { id: 'c1', author: '技术宅', avatarKey: 'tech', time: '3天前', content: '其实在大多数中小企业场景下，RAG + 简单微调（如 LoRA）组合是最稳的路径。', likes: 15, liked: false, mine: false, replies: [] }
        ]
      };
      function getComments(itemId) {
        if (!commentsByItem[itemId]) commentsByItem[itemId] = [];
        return commentsByItem[itemId];
      }
      function countTotalRecursive(list) {
        return (list || []).reduce(function (n, c) { return n + 1 + countTotalRecursive(c.replies || []); }, 0);
      }
      function countTotal(list) { return countTotalRecursive(list); }
      // Find a comment + its parent + the containing list, anywhere in the tree
      function findComment(rootList, id) {
        function walk(list, parent) {
          for (var i = 0; i < list.length; i++) {
            if (list[i].id === id) return { node: list[i], parent: parent, list: list };
            if (list[i].replies && list[i].replies.length) {
              var r = walk(list[i].replies, list[i]);
              if (r) return r;
            }
          }
          return null;
        }
        return walk(rootList, null);
      }
      function escapeHTML(s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); }
      function renderCommentText(t) {
        return escapeHTML(t).replace(/@([^\s]+)/g, '<span class="at-mention">@$1</span>');
      }
      function commentHTML(c, depth) {
        depth = depth || 0;
        var isReply = depth > 0;
        var cls = isReply ? 'comment-reply' : 'comment-item';
        var nestedRepliesHTML = '';
        if (c.replies && c.replies.length) {
          var innerCls = 'comment-replies' + (isReply ? ' nested' : '');
          nestedRepliesHTML = '<div class="' + innerCls + '">' +
            c.replies.map(function (r) { return commentHTML(r, depth + 1); }).join('') +
          '</div>';
        }
        return '<div class="' + cls + '" data-cmt-id="' + c.id + '">' +
          '<div class="comment-avatar ' + (c.avatarKey || 'pm') + '">' + (c.author || '?').slice(0, 1) + '</div>' +
          '<div class="comment-body">' +
            '<div class="comment-head">' +
              '<span class="comment-author ' + (c.mine ? 'is-me' : '') + '">' + escapeHTML(c.author) + '</span>' +
              '<span class="comment-time">' + escapeHTML(c.time) + '</span>' +
            '</div>' +
            '<div class="comment-text">' + renderCommentText(c.content) + '</div>' +
            '<div class="comment-actions">' +
              '<button class="comment-action-btn ' + (c.liked ? 'liked' : '') + '" data-cmt-action="like">' +
                '<svg width="13" height="13" viewBox="0 0 24 24" fill="' + (c.liked ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path></svg>' +
                '<span>' + (c.likes || 0) + '</span>' +
              '</button>' +
              '<button class="comment-action-btn" data-cmt-action="reply">回复</button>' +
              (c.mine ? '<button class="comment-action-btn danger" data-cmt-action="delete">删除</button>' : '') +
            '</div>' +
            nestedRepliesHTML +
          '</div>' +
        '</div>';
      }

      var currentDetailMode = 'content';
      var articleSourceExpanded = new Set();
      var sheetSourceExpanded = new Set();
      var currentEventSource = null;

      function cloneSourceNode(node) {
        if (!node) return null;
        var next = {
          id: node.id,
          type: node.type || (node.children && node.children.length ? 'summary' : 'child'),
          title: node.title,
          summary: node.summary || node.desc || '',
          tags: (node.tags || []).slice(),
          reference: node.reference || '',
          link: node.link || ''
        };
        if (node.children && node.children.length) {
          next.children = node.children.map(cloneSourceNode);
        }
        return next;
      }

      function findSourceById(id) {
        for (var i = 0; i < sourceLibrary.length; i++) {
          var root = sourceLibrary[i];
          if (root.id === id) return cloneSourceNode(root);
          var children = root.children || [];
          for (var j = 0; j < children.length; j++) {
            if (children[j].id === id) return cloneSourceNode(children[j]);
          }
        }
        return null;
      }

      function truncateSources(sources, limit) {
        var count = 0;
        var result = [];
        for (var i = 0; i < sources.length && count < limit; i++) {
          var item = cloneSourceNode(sources[i]);
          if (!item) continue;
          count += 1;
          if (count > limit) break;
          if (item.children && item.children.length) {
            var kept = [];
            for (var j = 0; j < item.children.length && count < limit; j++) {
              kept.push(cloneSourceNode(item.children[j]));
              count += 1;
            }
            item.children = kept;
          }
          result.push(item);
        }
        return result;
      }

      function buildEventReference(source) {
        if (!source) return '';
        if (source.reference) return source.reference;
        if (source.children && source.children.length) {
          return source.children.map(function (child) {
            return child.reference || child.summary || '';
          }).filter(Boolean).join('\n');
        }
        return source.summary || '';
      }

      function eventDetailHTML(source) {
        if (!source) {
          return '<div class="event-detail-empty">暂未找到这条事件的详细内容</div>';
        }
        var tags = (source.tags || []).map(function (tag) {
          return '<span class="event-tag">' + escapeHTML(tag) + '</span>';
        }).join('');
        var reference = buildEventReference(source);
        var refHead = reference || source.link
          ? '<div class="event-detail-ref-head"><span class="event-detail-ref-title">原文参考</span>' +
              (source.link ? '<a class="event-detail-ref-link" href="' + escapeHTML(source.link) + '" target="_blank" rel="noreferrer">查看链接</a>' : '') +
            '</div>'
          : '';
        var refBody = reference
          ? '<div class="event-detail-ref-body">' + escapeHTML(reference) + '</div>'
          : '';
        var refInfo = source.source
          ? '<div class="event-detail-refinfo">参考信息：' + escapeHTML(source.source) + '</div>'
          : '';
        return '<div class="event-detail-card">' +
          '<h2 class="event-detail-item-title">' + escapeHTML(source.title || '未命名事件') + '</h2>' +
          (tags
            ? '<div class="event-detail-tags-wrap">' +
                '<div class="event-detail-tags-row">' +
                  '<div class="event-detail-tags" data-tag-list>' + tags + '</div>' +
                  '<button class="event-detail-tags-toggle" type="button" data-tag-toggle hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></button>' +
                '</div>' +
                '<div class="event-detail-tags-panel" data-tag-panel hidden>' +
                  '<div class="event-detail-tags-panel-inner">' + tags + '</div>' +
                '</div>' +
              '</div>'
            : '') +
          (source.summary ? '<div class="event-detail-summary">' + escapeHTML(source.summary) + '</div>' : '') +
          refInfo +
        '</div>' + refHead + refBody;
      }

      function renderEventDetail(source) {
        currentEventSource = source || null;
        var body = document.getElementById('eventDetailBody');
        body.innerHTML = eventDetailHTML(currentEventSource);
        // 标签展开/收起逻辑：右侧圆形按钮始终显示，点击后在下方展开面板
        var tagList = body.querySelector('[data-tag-list]');
        if (tagList) {
          var toggle = body.querySelector('[data-tag-toggle]');
          var panel = body.querySelector('[data-tag-panel]');
          if (toggle) {
            toggle.hidden = false;
            toggle.onclick = function () {
              var willExpand = panel.hidden;
              panel.hidden = !willExpand;
              toggle.classList.toggle('expanded', willExpand);
              if (willExpand) {
                setTimeout(function () {
                  function onDocClick(e) {
                    if (!e.target.closest('.event-detail-tags-wrap')) {
                      panel.hidden = true;
                      toggle.classList.remove('expanded');
                      document.removeEventListener('click', onDocClick);
                    }
                  }
                  document.addEventListener('click', onDocClick);
                }, 0);
              }
            };
          }
        }
        var pathFab = document.getElementById('eventPathFab');
        if (pathFab) {
          pathFab.hidden = !(source && source.path);
          pathFab.classList.remove('hide');
        }
      }

      function openPathSheet() {
        var p = currentEventSource && currentEventSource.path;
        if (!p) return;
        var query = p.query || '';
        var hit = p.hit || (currentEventSource && currentEventSource.title) || '';
        var tags = (currentEventSource.tags || []).slice();
        while (tags.length < 3) tags.push('属性类型名称–属性名称');
        // 每个属性槽位可以承载多个属性，逗号分隔
        var joiner = '、';
        var attrs = [
          tags.slice(0, Math.max(1, Math.ceil(tags.length / 3))).join(joiner),
          tags.join(joiner),
          tags.slice(Math.floor(tags.length / 2)).join(joiner)
        ];

        var arrow = '<div class="path-arrow"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="6 13 12 19 18 13"></polyline></svg></div>';

        function tagRow(text) {
          return '<div class="path-attr-wrap"><span class="path-attr-tag">' + escapeHTML(text) + '</span></div>';
        }
        function nodeSimple(variant, num, title, body) {
          return '<div class="path-node path-node--' + variant + '">' +
            '<div class="path-node-head">' +
              (num ? '<span class="path-node-num">' + num + '</span>' : '') +
              '<span class="path-node-title">' + escapeHTML(title) + '</span>' +
            '</div>' +
            '<div class="path-node-body">' + escapeHTML(body) + '</div>' +
          '</div>';
        }
        function nodeSearch(num, subtitle, content, sourceId) {
          return '<div class="path-node path-node--blue"' + (sourceId ? ' data-path-open="' + escapeHTML(sourceId) + '"' : '') + '>' +
            '<div class="path-node-head">' +
              '<span class="path-node-num">' + num + '</span>' +
              '<span class="path-node-title">事件搜索</span>' +
            '</div>' +
            '<div class="path-node-divider"></div>' +
            '<div class="path-node-subtitle">' + escapeHTML(subtitle) + '</div>' +
            '<div class="path-node-content">' + escapeHTML(content) + '</div>' +
          '</div>';
        }

        document.getElementById('pathSheetBody').innerHTML =
          nodeSimple('warm', null, '原始问题', query) + arrow +
          nodeSimple('warm', '1', '问题重写', '这里展示重写的问题描述') + arrow +
          tagRow(attrs[0]) + arrow +
          nodeSearch('2', '这里展示事项的标题', '客户 feif7519 在 Proxy302 项目中反馈，购买后无法激活，希望排查授权链路问题…', currentEventSource && currentEventSource.id) + arrow +
          tagRow(attrs[1]) + arrow +
          nodeSearch('3', '这里展示事项的标题', '客户 feif7519 在 Proxy302 项目中反馈，购买后无法激活，希望排查授权链路问题…', currentEventSource && currentEventSource.id) + arrow +
          tagRow(attrs[2]) + arrow +
          nodeSimple('orange', '4', '最终结果', hit);
        document.getElementById('pathSheetBody').querySelectorAll('[data-path-open]').forEach(function (node) {
          node.addEventListener('click', function () {
            var source = findSourceById(node.dataset.pathOpen) || currentEventSource;
            document.getElementById('pathSheet').classList.remove('show');
            openEventDetail(source, function () {
              document.getElementById('pathSheet').classList.add('show');
            });
          });
        });
        document.getElementById('pathSheet').classList.add('show');
      }

      function openEventDetail(source, returnTo) {
        eventDetailReturn = typeof returnTo === 'function' ? returnTo : null;
        eventDetailPage.classList.add('show'); // 先显示，renderEventDetail 内测量折叠需要真实布局
        eventDetailPage.scrollTop = 0;
        renderEventDetail(source);
      }

      function renderSourceTree(sources, expandedSet, emptyText) {
        if (!sources || !sources.length) {
          return '<div class="source-empty">' + escapeHTML(emptyText || '暂无来源') + '</div>';
        }
        return '<div class="source-tree">' + sources.map(function (source) {
          var hasChildren = !!(source.children && source.children.length);
          var expanded = hasChildren && expandedSet.has(source.id);
          var toggle = hasChildren
            ? '<button class="source-card-toggle' + (expanded ? ' expanded' : '') + '" type="button" data-source-toggle="' + escapeHTML(source.id) + '">' +
                '<span>' + (expanded ? '收起' : '展开 ' + source.children.length + ' 个相关子事项') + '</span>' +
                '<svg class="source-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
              '</button>'
            : '';
          var children = expanded
            ? '<div class="source-children">' + source.children.map(function (child) {
                return '<button class="source-card source-card--child" type="button" data-source-open="' + escapeHTML(child.id) + '">' +
                  '<div class="source-card-title">' + escapeHTML(child.title || '未命名事件') + '</div>' +
                  '<div class="source-card-desc">' + escapeHTML(child.summary || '') + '</div>' +
                '</button>';
              }).join('') + '</div>'
            : '';
          if (hasChildren) {
            // 总结事项：展开 / 收起入口包在卡片内部
            return '<div class="source-item">' +
              '<div class="source-card source-card--summary' + (expanded ? ' expanded' : '') + '">' +
                '<div class="source-card-main" data-source-open="' + escapeHTML(source.id) + '">' +
                  '<div class="source-card-title">' + escapeHTML(source.title || '未命名事件') + '</div>' +
                  '<div class="source-card-desc">' + escapeHTML(source.summary || '') + '</div>' +
                '</div>' +
                toggle +
                children +
              '</div>' +
            '</div>';
          }
          // 单独子事项：整卡可点
          return '<div class="source-item">' +
            '<button class="source-card" type="button" data-source-open="' + escapeHTML(source.id) + '">' +
              '<div class="source-card-title">' + escapeHTML(source.title || '未命名事件') + '</div>' +
              '<div class="source-card-desc">' + escapeHTML(source.summary || '') + '</div>' +
            '</button>' +
          '</div>';
        }).join('') + '</div>';
      }

      function bindSourceTree(container, sources, expandedSet, rerender, onOpenDetail, returnTo) {
        if (!container) return;
        container.querySelectorAll('[data-source-toggle]').forEach(function (button) {
          button.addEventListener('click', function () {
            var id = button.dataset.sourceToggle;
            if (expandedSet.has(id)) expandedSet.delete(id);
            else expandedSet.add(id);
            rerender();
          });
        });
        container.querySelectorAll('[data-source-open]').forEach(function (button) {
          button.addEventListener('click', function () {
            if (typeof onOpenDetail === 'function') onOpenDetail();
            openEventDetail(findSourceById(button.dataset.sourceOpen), returnTo);
          });
        });
      }

      function renderDetailBodyHTML(item) {
        if (item && item.id === 'article-rag') {
          return '<section class="info-panel"><div class="info-title-row"><h2 class="info-title">RAG</h2><span class="info-label">RETRIEVAL-AUGMENTED</span></div><div class="info-text">外挂知识库，推理时动态注入信息。<br><br>◎ 优势：知识更新及时、经济成本低，无需重新训练模型。<br>◎ 风险：依赖高质量知识库，推理耗时可能增加。<br>◎ 场景：电商客服、需实时反映商品属性变化的场景。</div></section>' +
            '<section class="info-panel orange"><div class="info-title-row"><h2 class="info-title">微调</h2><span class="info-label orange">FINE-TUNING</span></div><div class="info-text">内部权重调整，适应特定任务分布。<br><br>☆ 优势：在简单任务上可能触及更高性能上限，强化指令遵循。<br>☆ 场景：稳定、重复、边界清晰的专业任务。</div></section>';
        }
        return '<section class="info-panel"><div class="info-title-row"><h2 class="info-title">核心观点</h2><span class="info-label">REPORT</span></div><div class="info-text">' + escapeHTML((item && item.summary) || '暂无正文内容') + '</div></section>';
      }

      function setDetailMode(mode) {
        currentDetailMode = mode === 'sources' ? 'sources' : 'content';
        detailPage.classList.toggle('detail-page--sources', currentDetailMode === 'sources');
        detailContent.querySelectorAll('[data-detail-mode]').forEach(function (button) {
          button.classList.toggle('active', button.dataset.detailMode === currentDetailMode);
        });
        detailContent.querySelectorAll('[data-detail-pane]').forEach(function (pane) {
          pane.classList.toggle('active', pane.dataset.detailPane === currentDetailMode);
        });
        if (currentDetailMode === 'sources') detailPage.scrollTop = 0;
      }

      function renderDetailSourcesPane(item) {
        var pane = document.getElementById('detailSourcesPane');
        if (!pane) return;
        var ids = (item && item.sourceIds) || [];
        var sources = ids.map(findSourceById).filter(Boolean);
        var capped = truncateSources(sources, 100);
        function rerender() {
          pane.innerHTML = renderSourceTree(capped, articleSourceExpanded, '该报告暂未关联具体的信息来源数据');
          bindSourceTree(pane, capped, articleSourceExpanded, rerender);
        }
        rerender();
      }

      /* ─── SOURCES SHEET (message page 来源 entry) ─── */
      function openSourcesSheet(count) {
        sheetSourceExpanded.clear();
        var ids = (baseItems[0] && baseItems[0].sourceIds) || [];
        var sources = ids.map(findSourceById).filter(Boolean);
        var capped = truncateSources(sources, 100);
        var body = document.getElementById('sourcesSheetBody');
        document.getElementById('sourcesSheetCount').textContent = (count != null && count !== '') ? count : sources.length;
        function rerender() {
          body.innerHTML = renderSourceTree(capped, sheetSourceExpanded, '暂无来源');
          // 点击事项卡片：先关闭来源 sheet，再打开事件详情页；返回时重新打开 sheet
          bindSourceTree(body, capped, sheetSourceExpanded, rerender, closeSourcesSheet, function () {
            document.getElementById('sourcesSheet').classList.add('show');
          });
        }
        rerender();
        document.getElementById('sourcesSheet').classList.add('show');
      }

      function closeSourcesSheet() {
        document.getElementById('sourcesSheet').classList.remove('show');
        sheetSourceExpanded.clear();
      }

      function renderDetailComments() {
        if (!currentDetailItem) return;
        var list = getComments(currentDetailItem.id);
        var total = countTotal(list);
        var html = '<div class="detail-comments-head">' +
          '<span class="detail-comments-title">评论</span>' +
          '<span class="detail-comments-count">' + total + '</span>' +
        '</div>';
        if (!list.length) {
          html += '<div class="detail-comments-empty">还没有评论，第一个来说点什么吧～</div>';
        } else {
          html += list.map(function (c) { return commentHTML(c, 0); }).join('');
        }
        document.getElementById('detailComments').innerHTML = html;
        // sync bottom action count
        currentDetailItem.comments = total;
        var commentCountEl = document.querySelector('.detail-actions .detail-action:last-child span');
        if (commentCountEl) commentCountEl.textContent = total;
      }

      function renderDetail(item) {
        if (!item) return;
        currentDetailItem = item;
        currentDetailMode = 'content';
        articleSourceExpanded.clear();
        detailAuthor.textContent = item.type === 'article' ? '技术宅' : item.author;
        // sync action button states
        var key = item.id + '::feed';
        var likeBtn = document.getElementById('detailActLike');
        var favBtn = document.getElementById('detailActFav');
        var liked = likedState.has(key);
        var favorited = favoritedState.has(key);
        likeBtn.classList.toggle('liked', liked);
        favBtn.classList.toggle('favorited', favorited);
        document.getElementById('detailActLikeCount').textContent = (item.fav || 0) + (liked ? 1 : 0);
        document.getElementById('detailActFavCount').textContent = (favorited ? '已收藏' : '收藏');
        // sync follow button
        var handleKey = item.type === 'article' ? 'techhome' : (item.handle || '');
        var followBtn = document.getElementById('detailFollowBtn');
        var following = followingState.has(handleKey);
        followBtn.classList.toggle('followed', following);
        followBtn.textContent = following ? '已关注' : '关注';
        followBtn.dataset.handle = handleKey;
        // reset scroll & back-to-top
        detailPage.scrollTop = 0;
        document.getElementById('detailBackToTop').classList.remove('show');
        detailContent.innerHTML =
          '<section class="detail-cover"><div class="kicker">LLM OPTIMIZATION PATHS</div><div class="blue-line"></div><h1 class="detail-title">' + escapeHTML(item.title || '未命名内容') + '</h1><p class="detail-desc">' + escapeHTML(item.summary || '') + '</p></section>' +
          '<section class="detail-view-section">' +
            '<div class="detail-view-switch">' +
              '<button class="detail-view-tab active" type="button" data-detail-mode="content">查看正文</button>' +
              '<button class="detail-view-tab" type="button" data-detail-mode="sources">信息来源</button>' +
            '</div>' +
            '<div class="detail-view-pane active" data-detail-pane="content">' + renderDetailBodyHTML(item) + '</div>' +
            '<div class="detail-view-pane" id="detailSourcesPane" data-detail-pane="sources"></div>' +
          '</section>';
        renderDetailSourcesPane(item);
        setDetailMode('content');
        renderDetailComments();
        detailPage.classList.add('show');
        document.body.style.overflow = 'hidden';
      }

      function rerenderCurrentList() {
        if (currentPage === 'profile') renderProfileFeed();
        else if (currentPage === 'agent') renderAgentFeed();
        else renderFeed(getVisibleItems());
      }

      function handleCardAction(event, containerType) {
        const actionButton = event.target.closest('.action, .comment-submit');
        if (!actionButton) return false;
        const card = event.target.closest('.feed-card');
        if (!card) return false;
        const item = renderedItems[Number(card.dataset.renderIndex)];
        if (!item) return false;
        const key = item.id + '::' + containerType;
        const action = actionButton.dataset.action;
        if (action === 'like') {
          if (likedState.has(key)) { likedState.delete(key); }
          else { likedState.add(key); showToast('已点赞 ❤'); }
          rerenderCurrentList(); return true;
        }
        if (action === 'favorite') {
          if (favoritedState.has(key)) { favoritedState.delete(key); showToast('已取消收藏'); }
          else { favoritedState.add(key); showToast('收藏成功 ★'); }
          rerenderCurrentList(); return true;
        }
        if (action === 'comment') {
          openCommentModal(item, key);
          return true;
        }
        if (action === 'share') {
          openShareModal(item);
          return true;
        }
        return false;
      }

      /* ── Share modal ── */
      var shareModalEl = document.getElementById('shareModal');
      var shareContext = null;
      function openShareModal(item) {
        shareContext = item;
        shareModalEl.classList.add('show');
      }
      function closeShareModal() { shareModalEl.classList.remove('show'); }
      document.getElementById('shareCancel').addEventListener('click', closeShareModal);
      shareModalEl.addEventListener('click', function (e) {
        if (e.target === shareModalEl) closeShareModal();
      });
      shareModalEl.querySelectorAll('[data-share]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var type = btn.dataset.share;
          closeShareModal();
          if (type === 'wechat') {
            showToast('已唤起微信分享');
          } else if (type === 'link') {
            var title = shareContext ? (shareContext.title || shareContext.author || '内容') : '内容';
            var url = 'https://zleap.app/share/' + (shareContext && shareContext.id ? shareContext.id : 'xxx');
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(url).then(function () {
                showToast('链接已复制到剪贴板');
              }).catch(function () {
                showToast('链接已复制');
              });
            } else {
              showToast('链接已复制');
            }
          }
        });
      });

      /* ── Comment modal ── */
      var commentModalEl = document.getElementById('commentModal');
      var commentModalInputEl = document.getElementById('commentModalInput');
      var commentModalTargetEl = document.getElementById('commentModalTarget');
      var commentModalContext = null;
      if (commentModalInputEl) {
        commentModalInputEl.setAttribute('maxlength', '200');
      }

      function ensureCommentCounter() {
        var toolbar = commentModalEl.querySelector('.comment-panel-toolbar');
        var counter = document.getElementById('commentModalCounter');
        if (!counter && toolbar) {
          var hint = toolbar.querySelector('.comment-panel-hint');
          if (hint) {
            hint.innerHTML = '<span id="commentModalCounter">0</span> / 200';
            counter = document.getElementById('commentModalCounter');
          }
        }
        return counter;
      }
      var commentCounter = ensureCommentCounter();
      function updateCommentCounter() {
        if (!commentCounter || !commentModalInputEl) return;
        commentCounter.textContent = commentModalInputEl.value.length;
        commentCounter.parentElement.classList.toggle('over', commentModalInputEl.value.length >= 200);
      }
      if (commentModalInputEl) commentModalInputEl.addEventListener('input', updateCommentCounter);

      function openCommentModal(item, key, replyCtx) {
        commentModalContext = { item: item, key: key, reply: replyCtx || null };
        if (replyCtx) {
          commentModalTargetEl.textContent = '回复 @' + replyCtx.replyToAuthor;
          commentModalInputEl.value = '';
          commentModalInputEl.placeholder = '回复 @' + replyCtx.replyToAuthor + '...';
        } else {
          commentModalTargetEl.textContent = item.title || item.summary || '';
          commentModalInputEl.value = (key ? (commentDrafts.get(key) || '') : '');
          commentModalInputEl.placeholder = '写下你的回复...';
        }
        updateCommentCounter();
        commentModalEl.classList.add('show');
        setTimeout(function () { commentModalInputEl.focus(); }, 50);
      }
      function closeCommentModal() {
        if (commentModalContext && !commentModalContext.reply && commentModalContext.key) {
          var v = commentModalInputEl.value;
          if (v.trim()) commentDrafts.set(commentModalContext.key, v);
          else commentDrafts.delete(commentModalContext.key);
        }
        commentModalEl.classList.remove('show');
      }
      document.getElementById('commentModalClose').addEventListener('click', closeCommentModal);
      commentModalEl.addEventListener('click', function (e) {
        if (e.target === commentModalEl) closeCommentModal();
      });
      document.getElementById('commentModalSubmit').addEventListener('click', function () {
        var value = commentModalInputEl.value.trim();
        if (!value) { showToast('请输入评论内容'); return; }
        if (value.length > 200) { showToast('评论不能超过 200 字'); return; }
        var ctx = commentModalContext;
        if (ctx && ctx.item) {
          var onDetail = detailPage.classList.contains('show') && currentDetailItem && currentDetailItem.id === ctx.item.id;
          if (onDetail) {
            // Add to detail comments
            var list = getComments(ctx.item.id);
            var newId = 'c' + Date.now();
            var myEntry = {
              id: newId,
              author: '我',
              avatarKey: 'me',
              time: '刚刚',
              content: ctx.reply ? '@' + ctx.reply.replyToAuthor + ' ' + value : value,
              likes: 0, liked: false, mine: true,
              replies: []
            };
            if (ctx.reply) {
              var found = findComment(list, ctx.reply.parentId);
              if (found && found.node) {
                if (!found.node.replies) found.node.replies = [];
                found.node.replies.push(myEntry);
              }
            } else {
              list.unshift(myEntry);
            }
            renderDetailComments();
            rerenderCurrentList();
          } else if (ctx.key) {
            commentDrafts.delete(ctx.key);
            ctx.item.comments += 1;
            rerenderCurrentList();
          }
        }
        commentModalEl.classList.remove('show');
        commentModalInputEl.value = '';
        commentModalInputEl.placeholder = '写下你的回复...';
        showToast(ctx && ctx.reply ? '回复已发送 ✓' : '评论已发送 ✓');
      });

      /* ─── Detail comments interactions ─── */
      var detailCommentsEl = document.getElementById('detailComments');
      detailCommentsEl.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-cmt-action]');
        if (!btn) return;
        var action = btn.dataset.cmtAction;
        var nodeEl = btn.closest('[data-cmt-id]');
        if (!nodeEl || !currentDetailItem) return;
        var list = getComments(currentDetailItem.id);
        var found = findComment(list, nodeEl.dataset.cmtId);
        if (!found) return;
        var comment = found.node;
        if (action === 'like') {
          comment.liked = !comment.liked;
          comment.likes = (comment.likes || 0) + (comment.liked ? 1 : -1);
          if (comment.likes < 0) comment.likes = 0;
          renderDetailComments();
        } else if (action === 'reply') {
          // Reply target = the comment we clicked; we attach the new reply under that comment
          openCommentModal(currentDetailItem, null, { parentId: comment.id, replyToAuthor: comment.author });
        } else if (action === 'delete') {
          if (!comment.mine) { showToast('只能删除自己的评论'); return; }
          pendingDeleteComment = { list: found.list, parent: found.parent, comment: comment };
          deleteCommentModal.classList.add('show');
        }
      });

      /* ─── Delete comment confirm ─── */
      var deleteCommentModal = document.getElementById('deleteCommentModal');
      var pendingDeleteComment = null;
      document.getElementById('deleteCommentCancel').addEventListener('click', function () {
        deleteCommentModal.classList.remove('show');
        pendingDeleteComment = null;
      });
      deleteCommentModal.addEventListener('click', function (e) {
        if (e.target === deleteCommentModal) { deleteCommentModal.classList.remove('show'); pendingDeleteComment = null; }
      });
      document.getElementById('deleteCommentConfirm').addEventListener('click', function () {
        if (!pendingDeleteComment) { deleteCommentModal.classList.remove('show'); return; }
        var p = pendingDeleteComment;
        var idx = p.list.indexOf(p.comment);
        if (idx >= 0) p.list.splice(idx, 1);
        renderDetailComments();
        rerenderCurrentList();
        deleteCommentModal.classList.remove('show');
        pendingDeleteComment = null;
        showToast('评论已删除');
      });

      /* ─── Bottom "说点什么" entry on detail page ─── */
      var detailCommentInputBtn = document.getElementById('detailCommentInputBtn');
      function openDetailComposer() {
        if (!currentDetailItem) return;
        openCommentModal(currentDetailItem, null, null);
      }
      detailCommentInputBtn.addEventListener('click', openDetailComposer);
      detailCommentInputBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDetailComposer(); }
      });

      /* ─── Detail actions: like / favorite / comment ─── */
      document.querySelectorAll('.detail-action[data-detail-act]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (!currentDetailItem) return;
          var item = currentDetailItem;
          var key = item.id + '::feed';
          var act = btn.dataset.detailAct;
          if (act === 'like') {
            if (likedState.has(key)) { likedState.delete(key); }
            else { likedState.add(key); showToast('已点赞 ❤'); }
            var liked = likedState.has(key);
            btn.classList.toggle('liked', liked);
            document.getElementById('detailActLikeCount').textContent = (item.fav || 0) + (liked ? 1 : 0);
            rerenderCurrentList();
          } else if (act === 'favorite') {
            if (favoritedState.has(key)) { favoritedState.delete(key); showToast('已取消收藏'); }
            else { favoritedState.add(key); showToast('收藏成功 ★'); }
            var favorited = favoritedState.has(key);
            btn.classList.toggle('favorited', favorited);
            document.getElementById('detailActFavCount').textContent = favorited ? '已收藏' : '收藏';
            rerenderCurrentList();
          } else if (act === 'comment') {
            var target = document.getElementById('detailComments');
            if (target) {
              var offset = target.getBoundingClientRect().top + detailPage.scrollTop - 90;
              detailPage.scrollTo({ top: offset, behavior: 'smooth' });
            }
          }
        });
      });

      /* ─── Follow button toggle ─── */
      document.getElementById('detailFollowBtn').addEventListener('click', function () {
        var handle = this.dataset.handle;
        if (!handle) return;
        if (followingState.has(handle)) {
          followingState.delete(handle);
          this.classList.remove('followed');
          this.textContent = '关注';
          showToast('已取消关注');
        } else {
          followingState.add(handle);
          this.classList.add('followed');
          this.textContent = '已关注';
          showToast('关注成功 ✓');
        }
      });

      /* ─── Avatar click → agent profile page ─── */
      document.getElementById('detailAuthorBtn').addEventListener('click', function () {
        if (!currentDetailItem) return;
        var handle = currentDetailItem.type === 'article' ? 'techhome' : (currentDetailItem.handle || '');
        if (!agentProfiles[handle]) { showToast('暂无该作者主页'); return; }
        detailPage.classList.remove('show');
        document.body.style.overflow = '';
        openAgentPage(handle);
      });

      /* ─── Back-to-top ─── */
      var backToTopBtn = document.getElementById('detailBackToTop');
      detailPage.addEventListener('scroll', function () {
        backToTopBtn.classList.toggle('show', detailPage.scrollTop > 400);
      });
      backToTopBtn.addEventListener('click', function () {
        detailPage.scrollTo({ top: 0, behavior: 'smooth' });
      });

      /* ─── FILTER SHEET ─── */

      /* Radio time range */
      document.querySelectorAll('.filter-radio-item').forEach(function(item) {
        item.addEventListener('click', function() {
          document.querySelectorAll('.filter-radio-item').forEach(function(i) { i.classList.remove('selected'); });
          item.classList.add('selected');
        });
      });

      /* Sort rows — click toggles direction when already active, otherwise activates */
      document.querySelectorAll('.filter-sort-item').forEach(function(item) {
        var dirEl = item.querySelector('.sort-dir');
        if (dirEl && !dirEl.dataset.dir) dirEl.dataset.dir = 'desc';
        item.addEventListener('click', function(e) {
          // <label> 内嵌 hidden radio 会触发两次点击事件（原生 + label→radio 合成），
          // preventDefault 阻止 label 激活 radio 的默认行为，避免方向被切换两次。
          e.preventDefault();
          var wasActive = item.classList.contains('active-sort');
          document.querySelectorAll('.filter-sort-item').forEach(function(i) { i.classList.remove('active-sort'); });
          item.classList.add('active-sort');
          if (wasActive && dirEl) {
            if (dirEl.dataset.dir === 'desc') {
              dirEl.dataset.dir = 'asc';
              dirEl.textContent = '由远到近 ↑';
            } else {
              dirEl.dataset.dir = 'desc';
              dirEl.textContent = '由近到远 ↓';
            }
          }
          document.querySelectorAll('.filter-sort-item').forEach(function(i) {
            var d = i.querySelector('.sort-dir');
            if (d) d.classList.toggle('sort-dir-inactive', !i.classList.contains('active-sort'));
          });
        });
      });

      document.getElementById('filterResetBtn').addEventListener('click', function() {
        document.querySelectorAll('.filter-radio-item').forEach(function(i, idx) {
          var selected = idx === 0;
          i.classList.toggle('selected', selected);
          var input = i.querySelector('input');
          if (input) input.checked = selected;
        });
        document.querySelectorAll('.filter-sort-item').forEach(function(i, idx) {
          var selected = idx === 0;
          i.classList.toggle('active-sort', selected);
          var input = i.querySelector('input');
          var dir = i.querySelector('.sort-dir');
          if (input) input.checked = selected;
          if (dir) {
            dir.classList.toggle('sort-dir-inactive', !selected);
            dir.dataset.dir = 'desc';
            dir.textContent = '由近到远 ↓';
          }
        });
      });

      document.getElementById('openFilterSheet').addEventListener('click', function () {
        filterSheet.classList.add('show');
      });
      document.getElementById('closeFilterSheet').addEventListener('click', function () { filterSheet.classList.remove('show'); });
      document.getElementById('applyFilterSheet').addEventListener('click', function () { filterSheet.classList.remove('show'); showToast('筛选已应用'); });
      filterSheet.addEventListener('click', function (event) { if (event.target === filterSheet) filterSheet.classList.remove('show'); });

      /* ─── INIT ─── */
      renderAgentFilter();
      renderCategoryFilter();
      document.getElementById('categoryFilter').classList.add('show');
      renderFeed();
      renderSuperAgent();
      renderSuperSettings();
      renderSuperTasks();
      renderContactBook();
      updateSuperFab();
      const initialPage = new URLSearchParams(window.location.search).get('page');
      if (initialPage) switchPage(initialPage);

      /* ─── EVENT LISTENERS ─── */
      bottomNav.addEventListener('click', function (event) {
        const nav = event.target.closest('.nav-item');
        if (!nav) return;
        switchPage(nav.dataset.nav);
      });

      /* ─── 全局搜索（顶部图标入口） ─── */
      var gsState = {
        history: ['文件传输', '开源', '荣耀', '客户 A 风险信号', 'CFO 预算表态', 'ARR 续费策略', 'AI 科研工具', 'Super Agent 使用记录', '多模态大模型', 'Anthropic Claude 3.7'],
        historyExpanded: false,
        tabs: [
          { id: 'all', label: '全部' },
          { id: 'feed', label: '动态' },
          { id: 'assistant', label: '助手' },
          { id: 'chat', label: '聊天记录' }
        ],
        activeTab: 'all',
        query: '',
        summaryExpanded: false
      };
      var globalSearchPage = document.getElementById('globalSearchPage');
      var gsInput = document.getElementById('gsInput');
      var gsClearBtn = document.getElementById('gsClear');
      var gsCancelBtn = document.getElementById('gsCancel');
      var gsEntryEl = document.getElementById('gsEntry');
      var gsTabsEl = document.getElementById('gsTabs');
      var gsResultsEl = document.getElementById('gsResults');
      var gsHistoryChipsEl = document.getElementById('gsHistoryChips');
      var gsTimelineEl = document.getElementById('gsTimeline');
      var gsBackToTopBtn = document.getElementById('gsBackToTop');

      function gsRenderHistory() {
        var toggle = document.getElementById('gsHistoryToggle');
        if (!gsState.history.length) {
          gsHistoryChipsEl.classList.remove('collapsed');
          gsHistoryChipsEl.innerHTML = '<div class="gs-history-empty">暂无历史记录</div>';
          if (toggle) toggle.style.display = 'none';
          return;
        }
        var items = gsState.history.slice(0, 10);
        gsHistoryChipsEl.innerHTML = items.map(function (text) {
          return '<button class="gs-chip" type="button" data-gs-history="' + escapeHTML(text) + '">' + escapeHTML(text) + '</button>';
        }).join('');
        gsHistoryChipsEl.querySelectorAll('[data-gs-history]').forEach(function (btn) {
          btn.onclick = function () { gsRunSearch(btn.dataset.gsHistory); };
        });
        // Measure to decide whether toggle is needed
        gsHistoryChipsEl.classList.remove('collapsed');
        var natural = gsHistoryChipsEl.scrollHeight;
        var overflows = natural > 40;
        if (!overflows) {
          if (toggle) toggle.style.display = 'none';
          return;
        }
        if (toggle) {
          toggle.style.display = 'grid';
          toggle.classList.toggle('expanded', gsState.historyExpanded);
        }
        gsHistoryChipsEl.classList.toggle('collapsed', !gsState.historyExpanded);
      }

      function gsRenderTimeline() {
        if (!gsTimelineEl) return;
        gsTimelineEl.innerHTML = searchState.dailyEvents.map(timelineCardHTML).join('');
        var dateEl = document.getElementById('gsDiscoveryDate');
        if (dateEl) dateEl.textContent = searchState.dailyDate;
        gsTimelineEl.querySelectorAll('[data-daily-toggle]').forEach(function (btn) {
          btn.onclick = function (e) {
            e.stopPropagation();
            var id = btn.dataset.dailyToggle;
            if (dailyExpanded.has(id)) dailyExpanded.delete(id); else dailyExpanded.add(id);
            gsRenderTimeline();
          };
        });
        gsTimelineEl.querySelectorAll('[data-daily-open]').forEach(function (node) {
          node.onclick = function (e) {
            e.stopPropagation();
            closeGlobalSearch();
            openEventDetail(findDailyEvent(node.dataset.dailyOpen), function () {
              globalSearchPage.classList.add('show');
              requestAnimationFrame(updateGsBackToTop);
            });
          };
        });
      }

      function gsRenderTabs() {
        gsTabsEl.innerHTML =
          '<div class="gs-tabs-scroll">' +
            gsState.tabs.map(function (t) {
              return '<button class="gs-tab ' + (gsState.activeTab === t.id ? 'active' : '') + '" type="button" data-gs-tab="' + t.id + '">' + escapeHTML(t.label) + '</button>';
            }).join('') +
          '</div>' +
          '<button class="gs-tab-source" type="button" id="gsSourceTabBtn">' +
            '<svg class="ic" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.6 4.6L18 9.5l-4.4 1.9L12 16l-1.6-4.6L6 9.5l4.4-1.9L12 3Z"></path></svg>' +
            '<span>信息源</span>' +
          '</button>';
        gsTabsEl.querySelectorAll('[data-gs-tab]').forEach(function (btn) {
          btn.onclick = function () {
            gsState.activeTab = btn.dataset.gsTab;
            gsState.summaryExpanded = false;
            gsRenderTabs();
            gsRenderResults();
            gsResultsEl.scrollTop = 0;
          };
        });
        var sourceBtn = document.getElementById('gsSourceTabBtn');
        if (sourceBtn) sourceBtn.onclick = gsGoSourceSearch;
      }

      var gsPool = {
        feed: [
          {
            id: 'gs-feed-1',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
            author: '用户昵称完全展示展示用户昵称完全展示展示',
            time: '14:46',
            followed: true,
            text: '全力打造{q}团队生态，系统培育多元人才梯队，为营造全力打造{q}团队生态，系统培育多',
            summary: '本文梳理美方在中方为美方历史性国事访问举办的欢迎晚宴上的致辞内容，回顾中美两个半世纪交往史中…',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80'
          },
          {
            id: 'gs-feed-2',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
            author: '用户昵称完全展示展示用户昵称完全展示展示',
            time: '14:46',
            followed: true,
            text: '全力打造{q}团队生态，系统培育多元人才梯队，为营造全力打造{q}团队生态，系统培育多',
            summary: '本文梳理美方在中方为美方历史性国事访问举办的欢迎晚宴上的致辞内容，回顾中美两个半世纪交往史中…',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80'
          },
          {
            id: 'gs-feed-3',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
            author: '用户昵称完全展示展示用户昵称完全展示展示',
            time: '14:46',
            followed: false,
            text: '全力打造{q}团队生态，系统培育多元人才梯队，为营造全力打造{q}团队生态，系统培育多',
            summary: '本文梳理美方在中方为美方历史性国事访问举办的欢迎晚宴上的致辞内容，回顾中美两个半世纪交往史中…',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=640&q=80'
          }
        ],
        assistant: [
          { id: 'gs-asst-1', name: '飞书CLI', subtitle: '问答助手', followed: false, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
          { id: 'gs-asst-2', name: '名称展示...', subtitle: '问答助手', followed: true, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80' },
          { id: 'gs-asst-3', name: '名称展示...', subtitle: '问答助手', followed: false, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
          { id: 'gs-asst-4', name: '名称展示...', subtitle: '问答助手', followed: false, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
          { id: 'gs-asst-5', name: '名称展示...', subtitle: '问答助手', followed: true, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80' },
          { id: 'gs-asst-6', name: '名称展示...', subtitle: '问答助手', followed: false, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80' },
          { id: 'gs-asst-7', name: '名称展示...', subtitle: '问答助手', followed: false, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80' },
          { id: 'gs-asst-8', name: '名称展示...', subtitle: '问答助手', followed: false, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80' }
        ],
        chat: [
          { id: 'gs-chat-1', name: '名称展示', time: '2025-11-5 21:04', preview: '聊天匹配内容展示，{q}对应内容' },
          { id: 'gs-chat-2', name: '名称展示', time: '2025-11-5 21:04', preview: '聊天匹配内容展示，{q}对应内容' },
          { id: 'gs-chat-3', name: '名称展示', time: '2025-11-5 21:04', preview: '聊天匹配内容展示，{q}对应内容' },
          { id: 'gs-chat-4', name: '名称展示', time: '2025-11-5 21:04', preview: '聊天匹配内容展示，{q}对应内容' },
          { id: 'gs-chat-5', name: '名称展示', time: '2025-11-5 21:04', preview: '聊天匹配内容展示，{q}对应内容' }
        ]
      };

      function gsHighlight(text, query) {
        var q = query || '';
        var raw = String(text == null ? '' : text).replace(/\{q\}/g, q);
        var safe = escapeHTML(raw);
        if (!q) return safe;
        var pattern = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return safe.replace(new RegExp(pattern, 'g'), '<span class="gs-hi">' + escapeHTML(q) + '</span>');
      }

      function gsFeedActionsHTML(item) {
        var liked = !!item.liked;
        var favorited = !!item.favorited;
        return '<div class="gs-feed-actions">' +
          '<button class="gs-feed-action ' + (liked ? 'active' : '') + '" type="button" data-gs-action="like" data-gs-id="' + escapeHTML(item.id) + '">' + icon('heart') + '<span>点赞</span></button>' +
          '<button class="gs-feed-action ' + (favorited ? 'active' : '') + '" type="button" data-gs-action="favorite" data-gs-id="' + escapeHTML(item.id) + '">' + icon('star') + '<span>收藏</span></button>' +
          '<button class="gs-feed-action" type="button" data-gs-action="comment" data-gs-id="' + escapeHTML(item.id) + '">' + icon('comment') + '<span>评论</span></button>' +
          '<button class="gs-feed-action" type="button" data-gs-action="share" data-gs-id="' + escapeHTML(item.id) + '">' + icon('share') + '<span>分享</span></button>' +
        '</div>';
      }

      function gsFeedCardHTML(item, q) {
        var followed = !!item.followed;
        var imageHTML = item.image ? '<img class="gs-feed-image" src="' + escapeHTML(item.image) + '" alt="">' : '';
        var textHTML = item.text ? '<div class="gs-feed-text">' + gsHighlight(item.text, q) + '</div>' : '';
        var summaryHTML = item.summary ? '<div class="gs-feed-summary">' + escapeHTML(item.summary) + '</div>' : '';
        var actionsHTML = gsFeedActionsHTML(item);
        var avatarStyle = item.avatar ? ' style="background-image:url(\'' + escapeHTML(item.avatar) + '\')"' : '';
        return '<div class="gs-feed-card" data-gs-feed="' + escapeHTML(item.id) + '">' +
          '<div class="gs-feed-head">' +
            '<div class="gs-feed-avatar"' + avatarStyle + '></div>' +
            '<div class="gs-feed-meta">' +
              '<div class="gs-feed-author">' + escapeHTML(item.author || '') + '</div>' +
              '<div class="gs-feed-time">' + escapeHTML(item.time || '') + '</div>' +
            '</div>' +
            '<button class="gs-feed-follow' + (followed ? ' followed' : '') + '" type="button" data-gs-follow="' + escapeHTML(item.id) + '">' + (followed ? '已关注' : '关注') + '</button>' +
          '</div>' +
          imageHTML +
          textHTML +
          summaryHTML +
          actionsHTML +
        '</div>';
      }

      function gsAssistantGridHTML(items) {
        return '<div class="gs-asst-grid">' + items.map(function (a) {
          var avatarStyle = a.avatar ? ' style="background-image:url(\'' + escapeHTML(a.avatar) + '\')"' : '';
          return '<button class="gs-asst-item" type="button" data-gs-asst="' + escapeHTML(a.id) + '">' +
            '<div class="gs-asst-avatar"' + avatarStyle + '></div>' +
            '<div class="gs-asst-name">' + escapeHTML(a.name || '') + '</div>' +
          '</button>';
        }).join('') + '</div>';
      }

      function gsAssistantListHTML(items, q) {
        return '<div class="gs-asst-list">' + items.map(function (a) {
          var avatarStyle = a.avatar ? ' style="background-image:url(\'' + escapeHTML(a.avatar) + '\')"' : '';
          var followed = !!a.followed;
          return '<div class="gs-asst-card" data-gs-asst="' + escapeHTML(a.id) + '">' +
            '<div class="gs-asst-card-avatar"' + avatarStyle + '></div>' +
            '<div class="gs-asst-card-body">' +
              '<div class="gs-asst-card-title">' + gsHighlight(a.name || '', q) + '</div>' +
              '<div class="gs-asst-card-subtitle">' + escapeHTML(a.subtitle || '问答助手') + '</div>' +
            '</div>' +
            '<button class="gs-asst-follow' + (followed ? ' followed' : '') + '" type="button" data-gs-asst-follow="' + escapeHTML(a.id) + '">' + (followed ? '已关注' : '关注') + '</button>' +
          '</div>';
        }).join('') + '</div>';
      }

      function gsChatListHTML(items, q) {
        return '<div class="gs-chat-list">' + items.map(function (c) {
          return '<button class="gs-chat-item" type="button" data-gs-chat="' + escapeHTML(c.id) + '">' +
            '<div class="gs-chat-avatar"></div>' +
            '<div class="gs-chat-body">' +
              '<div class="gs-chat-head">' +
                '<span class="gs-chat-name">' + escapeHTML(c.name || '') + '</span>' +
                '<span class="gs-chat-time">' + escapeHTML(c.time || '') + '</span>' +
              '</div>' +
              '<div class="gs-chat-preview">' + gsHighlight(c.preview || '', q) + '</div>' +
            '</div>' +
          '</button>';
        }).join('') + '</div>';
      }

      function gsSectionHTML(title, tabId, bodyHTML) {
        return '<section class="gs-section">' +
          '<div class="gs-section-head">' +
            '<div class="gs-section-title">' + escapeHTML(title) + '</div>' +
            '<button class="gs-section-more" type="button" data-gs-more="' + escapeHTML(tabId) + '">更多' +
              '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg>' +
            '</button>' +
          '</div>' +
          bodyHTML +
        '</section>';
      }

      function gsRenderResults() {
        var q = gsState.query || '';
        var tab = gsState.activeTab;
        var html = '';
        if (tab === 'all') {
          var feedPreview = gsPool.feed.slice(0, 3).map(function (item) { return gsFeedCardHTML(item, q); }).join('');
          html += gsSectionHTML('动态', 'feed', feedPreview);
          html += gsSectionHTML('助手', 'assistant', gsAssistantGridHTML(gsPool.assistant.slice(0, 4)));
          html += gsSectionHTML('聊天记录', 'chat', gsChatListHTML(gsPool.chat.slice(0, 3), q));
        } else if (tab === 'feed') {
          html += gsPool.feed.map(function (item) { return gsFeedCardHTML(item, q); }).join('');
        } else if (tab === 'assistant') {
          html += gsAssistantListHTML(gsPool.assistant, q);
        } else if (tab === 'chat') {
          html += '<section class="gs-section">' + gsChatListHTML(gsPool.chat, q) + '</section>';
        }
        html += '<div class="gs-end">到底啦～</div>';
        gsResultsEl.innerHTML = html;
        gsResultsEl.querySelectorAll('[data-gs-more]').forEach(function (btn) {
          btn.onclick = function () {
            gsState.activeTab = btn.dataset.gsMore;
            gsRenderTabs();
            gsRenderResults();
            gsResultsEl.scrollTop = 0;
          };
        });
        gsResultsEl.querySelectorAll('[data-gs-follow]').forEach(function (btn) {
          btn.onclick = function (e) {
            e.stopPropagation();
            var id = btn.dataset.gsFollow;
            var item = gsPool.feed.filter(function (f) { return f.id === id; })[0];
            if (!item) return;
            item.followed = !item.followed;
            btn.textContent = item.followed ? '已关注' : '关注';
            btn.classList.toggle('followed', item.followed);
          };
        });
        gsResultsEl.querySelectorAll('[data-gs-asst-follow]').forEach(function (btn) {
          btn.onclick = function (e) {
            e.stopPropagation();
            var id = btn.dataset.gsAsstFollow;
            var item = gsPool.assistant.filter(function (a) { return a.id === id; })[0];
            if (!item) return;
            item.followed = !item.followed;
            btn.textContent = item.followed ? '已关注' : '关注';
            btn.classList.toggle('followed', item.followed);
          };
        });
        gsResultsEl.querySelectorAll('[data-gs-action]').forEach(function (btn) {
          btn.onclick = function (e) {
            e.stopPropagation();
            var id = btn.dataset.gsId;
            var action = btn.dataset.gsAction;
            var item = gsPool.feed.filter(function (f) { return f.id === id; })[0];
            if (!item) return;
            if (action === 'like') {
              item.liked = !item.liked;
              btn.classList.toggle('active', item.liked);
              showToast(item.liked ? '已点赞 ❤' : '已取消点赞');
              return;
            }
            if (action === 'favorite') {
              item.favorited = !item.favorited;
              btn.classList.toggle('active', item.favorited);
              showToast(item.favorited ? '收藏成功 ★' : '已取消收藏');
              return;
            }
            if (action === 'comment') {
              showToast('打开评论');
              return;
            }
            if (action === 'share') {
              showToast('已唤起分享');
            }
          };
        });
        gsResultsEl.querySelectorAll('[data-gs-feed]').forEach(function (card) {
          card.onclick = function () { showToast('打开动态详情'); };
        });
        gsResultsEl.querySelectorAll('[data-gs-asst]').forEach(function (card) {
          card.onclick = function () { showToast('打开助手'); };
        });
        gsResultsEl.querySelectorAll('[data-gs-chat]').forEach(function (card) {
          card.onclick = function () { showToast('打开聊天记录'); };
        });
      }

      function gsGoSourceSearch() {
        var q = gsState.query || '';
        if (!q) return;
        gsSearchToken++; // 取消未完成的普通搜索 render
        var input = document.getElementById('searchInput');
        if (input) input.value = q;
        closeGlobalSearch();
        openSearchResults(q, { loading: true });
      }

      function gsShowInlineLoading(text) {
        gsResultsEl.innerHTML =
          '<div class="gs-inline-loading">' +
            '<div class="gs-inline-loading-spinner"></div>' +
            '<div class="gs-inline-loading-text">' + escapeHTML(text || '正在检索') + '</div>' +
          '</div>';
        gsResultsEl.scrollTop = 0;
      }

      function gsShowEntry() {
        gsEntryEl.style.display = 'block';
        gsTabsEl.style.display = 'none';
        gsResultsEl.style.display = 'none';
        requestAnimationFrame(updateGsBackToTop);
      }

      function gsShowResults() {
        gsEntryEl.style.display = 'none';
        gsTabsEl.style.display = 'flex';
        gsResultsEl.style.display = 'block';
        if (gsBackToTopBtn) gsBackToTopBtn.classList.remove('show');
      }

      function updateGsBackToTop() {
        if (!gsBackToTopBtn || !gsEntryEl) return;
        var canScroll = gsEntryEl.scrollHeight > gsEntryEl.clientHeight + 1;
        gsBackToTopBtn.classList.toggle('show', canScroll && gsEntryEl.scrollTop > 320);
      }

      function gsUpdateClearBtn() {
        gsClearBtn.classList.toggle('show', !!gsInput.value.length);
      }

      var gsSearchToken = 0;
      function gsRunSearch(query) {
        var q = (query != null ? query : gsInput.value).trim();
        if (!q) { showToast('请输入搜索内容'); return; }
        gsInput.value = q;
        gsUpdateClearBtn();
        gsState.history = [q].concat(gsState.history.filter(function (t) { return t !== q; })).slice(0, 10);
        gsState.query = q;
        gsState.activeTab = 'all';
        gsState.summaryExpanded = false;
        gsRenderTabs();
        gsShowResults();
        gsShowInlineLoading('正在检索「' + q + '」');
        if (gsInput.blur) gsInput.blur();
        var token = ++gsSearchToken;
        setTimeout(function () {
          if (token !== gsSearchToken) return; // 已被新的搜索覆盖
          gsRenderResults();
          gsResultsEl.scrollTop = 0;
        }, 900);
      }

      function openGlobalSearch() {
        gsInput.value = '';
        gsState.query = '';
        gsState.summaryExpanded = false;
        gsUpdateClearBtn();
        gsShowEntry();
        globalSearchPage.classList.add('show');
        gsRenderHistory();
        gsRenderTimeline();
        gsEntryEl.scrollTop = 0;
        if (gsBackToTopBtn) gsBackToTopBtn.classList.remove('show');
        setTimeout(function () { gsInput.focus(); }, 40);
      }

      function closeGlobalSearch() {
        globalSearchPage.classList.remove('show');
        if (gsBackToTopBtn) gsBackToTopBtn.classList.remove('show');
      }

      var globalSearchBtnEl = document.getElementById('globalSearchBtn');
      if (globalSearchBtnEl) globalSearchBtnEl.addEventListener('click', openGlobalSearch);
      gsCancelBtn.addEventListener('click', closeGlobalSearch);
      gsClearBtn.addEventListener('click', function () {
        gsInput.value = '';
        gsUpdateClearBtn();
        gsShowEntry();
        gsInput.focus();
      });
      gsInput.addEventListener('input', gsUpdateClearBtn);
      gsInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); gsRunSearch(); }
      });
      gsEntryEl.addEventListener('scroll', updateGsBackToTop, { passive: true });
      if (gsBackToTopBtn) {
        gsBackToTopBtn.addEventListener('click', function () {
          gsEntryEl.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
      document.getElementById('gsHistoryToggle').addEventListener('click', function () {
        gsState.historyExpanded = !gsState.historyExpanded;
        gsRenderHistory();
      });
      document.getElementById('gsSourceEntry').addEventListener('click', function () {
        searchReturnsToGlobalSearch = true;
        closeGlobalSearch();
        switchPage('search');
      });
      document.getElementById('gsClearHistory').addEventListener('click', function () {
        if (!gsState.history.length) return;
        gsState.history = [];
        gsRenderHistory();
        showToast('已清空历史记录');
      });

      /* ─── 信息源搜索 wiring ─── */
      document.getElementById('searchRangeBtn').addEventListener('click', openRangeSheet);
      document.getElementById('searchGoBtn').addEventListener('click', function () { runSearch(); });
      document.getElementById('searchInput').addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); runSearch(); }
      });
      document.getElementById('searchHistoryBtn').addEventListener('click', openDatePicker);
      var searchBackToTopBtn = document.getElementById('searchBackToTop');
      function updateSearchBackToTop() {
        if (!searchBackToTopBtn) return;
        var y = window.scrollY || document.documentElement.scrollTop;
        var canScroll = document.documentElement.scrollHeight > window.innerHeight + 1;
        searchBackToTopBtn.classList.toggle('show', currentPage === 'search' && canScroll && y > 320);
      }
      window.addEventListener('scroll', updateSearchBackToTop, { passive: true });
      if (searchBackToTopBtn) {
        searchBackToTopBtn.addEventListener('click', function () {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }
      var datePickerSheetEl = document.getElementById('datePickerSheet');
      datePickerSheetEl.addEventListener('click', function (e) {
        if (e.target === datePickerSheetEl || e.target.closest('[data-close="date-picker-sheet"]')) closeSheet('datePickerSheet');
      });
      searchPhTimer = setInterval(rotateSearchPlaceholder, 3200);
      var rangeSheetEl = document.getElementById('searchRangeSheet');
      rangeSheetEl.addEventListener('click', function (e) {
        if (e.target === rangeSheetEl || e.target.closest('[data-close="search-range-sheet"]')) closeSheet('searchRangeSheet');
      });
      document.getElementById('rangeConfirmBtn').addEventListener('click', confirmRange);
      document.getElementById('searchResultBack').addEventListener('click', closeSearchResults);
      document.getElementById('searchResultClear').addEventListener('click', function () {
        var i = document.getElementById('searchResultInput');
        i.value = '';
        i.focus();
      });
      document.getElementById('searchResultInput').addEventListener('keydown', function (e) {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        var v = this.value.trim();
        if (v) {
          openSearchResults(v);
        } else {
          var homeInput = document.getElementById('searchInput');
          if (homeInput) homeInput.value = '';
          closeSearchResults();
          switchPage('search');
        }
      });
      document.querySelector('[data-sr-ctrl="sort"]').addEventListener('click', function () {
        searchResultState.sortMode = searchResultState.sortMode === 'time' ? 'smart' : 'time';
        renderResultControls();
        renderResultList();
        showToast(searchResultState.sortMode === 'time' ? '已按时间排序' : '已按智能排序');
      });
      eventDetailPage.addEventListener('click', function (e) {
        if (e.target.closest('[data-open-path]')) openPathSheet();
      });
      var pathSheetEl = document.getElementById('pathSheet');
      pathSheetEl.addEventListener('click', function (e) {
        if (e.target === pathSheetEl || e.target.closest('[data-close="path-sheet"]')) closeSheet('pathSheet');
      });
      var aiSummarySheetEl = document.getElementById('aiSummarySheet');
      aiSummarySheetEl.addEventListener('click', function (e) {
        if (e.target === aiSummarySheetEl || e.target.closest('[data-close="ai-summary-sheet"]')) closeSheet('aiSummarySheet');
      });

      // AI 总结的引用编号可点击 → 打开对应事件详情页
      function handleCiteClick(e) {
        var cite = e.target.closest('[data-cite]');
        if (!cite) return;
        e.stopPropagation();
        openEventByCite(parseInt(cite.dataset.cite, 10) || 1);
      }
      document.getElementById('srSummary').addEventListener('click', handleCiteClick);
      aiSummarySheetEl.addEventListener('click', function (e) {
        var cite = e.target.closest('[data-cite]');
        if (!cite) return;
        e.stopPropagation();
        closeSheet('aiSummarySheet');
        openEventByCite(parseInt(cite.dataset.cite, 10) || 1);
      });

      // 事件详情页滚动时收起/展开推理路径悬浮按钮（模仿底部导航）
      (function () {
        var pathFab = document.getElementById('eventPathFab');
        if (!pathFab) return;
        var lastY = 0, downDist = 0, upDist = 0;
        eventDetailPage.addEventListener('scroll', function () {
          if (pathFab.hidden) return;
          var y = eventDetailPage.scrollTop;
          var delta = y - lastY;
          if (y <= 8) { pathFab.classList.remove('hide'); downDist = 0; upDist = 0; }
          else if (delta > 0) { downDist += delta; upDist = 0; if (downDist >= 120) pathFab.classList.add('hide'); }
          else if (delta < 0) { upDist += Math.abs(delta); downDist = 0; if (upDist >= 40) pathFab.classList.remove('hide'); }
          lastY = y;
        }, { passive: true });
      })();

      if (superAgentFab) {
        superAgentFab.addEventListener('click', function () {
          renderSuperAgent();
          markSuperAgentRead();
          switchPage('superAgent');
        });
      }
      document.getElementById('messageNewBtn').addEventListener('click', function () {
        contactBookState.active = 'following';
        contactBookState.query = '';
        renderContactBook();
        switchPage('contacts');
      });
      document.getElementById('contactBookBack').addEventListener('click', function () { switchPage('message'); });
      document.querySelectorAll('[data-contact-tab]').forEach(function (tab) {
        tab.addEventListener('click', function () {
          contactBookState.active = tab.dataset.contactTab;
          contactBookState.query = '';
          renderContactBook();
        });
      });
      document.getElementById('contactBookSearch').addEventListener('input', function () {
        contactBookState.query = this.value;
        renderContactBook();
      });
      document.getElementById('contactBookList').addEventListener('click', function (event) {
        var actionButton = event.target.closest('[data-contact-action]');
        if (actionButton) {
          var actionId = actionButton.dataset.contactId;
          if (actionButton.dataset.contactAction === 'follow') {
            if (contactBookState.followed.has(actionId)) contactBookState.followed.delete(actionId);
            else contactBookState.followed.add(actionId);
            renderContactBook();
            return;
          }
          openContactChat(actionId);
          return;
        }
        var personRow = event.target.closest('.contact-person[data-contact-id]');
        if (personRow) openContactChat(personRow.dataset.contactId);
      });
      document.getElementById('contactBookList').addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        if (event.target.closest('[data-contact-action]')) return;
        var personRow = event.target.closest('.contact-person[data-contact-id]');
        if (!personRow) return;
        event.preventDefault();
        openContactChat(personRow.dataset.contactId);
      });
      document.getElementById('contactChatBack').addEventListener('click', function () { switchPage('contacts'); });
      document.getElementById('contactChatSend').addEventListener('click', sendContactChatMessage);
      document.getElementById('contactChatInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendContactChatMessage(); }
      });
      document.getElementById('superAgentBack').addEventListener('click', function () {
        if (pageHistory[pageHistory.length - 1] === 'superAgent') pageHistory.pop();
        switchPage(pageHistory[pageHistory.length - 1] || 'home', { skipHistory: true });
      });
      document.getElementById('superAgentSettingsBtn').addEventListener('click', function () { switchPage('superSettings'); });
      document.getElementById('superSettingsBack').addEventListener('click', function () { switchPage('superAgent'); });
      document.getElementById('superTasksBack').addEventListener('click', function () { switchPage('superSettings'); });
      document.getElementById('superTasksNew').addEventListener('click', function () { switchPage('superTasks'); });
      document.getElementById('superAgentNewTopicBtn').addEventListener('click', startNewTopic);
      document.getElementById('superAgentSend').addEventListener('click', function () { sendSuperMessage(); });
      document.getElementById('superAgentInput').addEventListener('input', function () {
        superAgentState.draft = this.value;
      });
      document.getElementById('superAgentInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter' && !event.shiftKey) {
          event.preventDefault();
          sendSuperMessage(this.value);
        }
      });
      superAgentPageBody.addEventListener('click', function (event) {
        var q = event.target.closest('[data-super-question]');
        if (q) {
          sendSuperMessage(q.dataset.superQuestion);
          return;
        }
        var actionEl = event.target.closest('[data-super-action]');
        if (!actionEl) return;
        var action = actionEl.dataset.superAction;
        if (action === 'open-report') {
          openReportDetail();
        } else if (action === 'open-sources') {
          openSourcesSheet(actionEl.dataset.sourceCount);
        } else if (action === 'open-task-list') {
          switchPage('superTasks');
        }
      });
      document.getElementById('superSettingList').addEventListener('click', function (event) {
        var actionEl = event.target.closest('[data-super-action]');
        if (!actionEl) return;
        var act = actionEl.dataset.superAction;
        if (act === 'open-task-list') {
          switchPage('superTasks');
        } else if (act === 'open-role') {
          switchPage('superRole');
        } else if (act === 'clear-chat') {
          superAgentState.messages = [{ role: 'agent', text: '聊天记录已清空。你可以从这里重新开始。', time: '刚刚', recs: ['开启新话题', '创建一个新的自动化任务'] }];
          renderSuperAgent();
          switchPage('superAgent');
        }
      });
      document.getElementById('superRoleBack').addEventListener('click', function () { switchPage('superSettings'); });
      document.getElementById('superRoleSave').addEventListener('click', function () { showToast('角色定义已保存'); switchPage('superSettings'); });
      document.querySelectorAll('#superAgentRolePage [data-role-tool]').forEach(function (b) {
        b.addEventListener('click', function () {
          var t = b.dataset.roleTool;
          showToast(t === 'copy' ? '已复制助手角色' : t === 'import' ? '导入 .md 文件' : '已一键完善提示词');
        });
      });
      document.getElementById('superTaskList').addEventListener('click', function (event) {
        var toggle = event.target.closest('[data-super-action="toggle-task"]');
        if (!toggle) return;
        var task = superAgentState.tasks.find(function (item) { return item.id === toggle.dataset.taskId; });
        if (!task) return;
        task.status = task.status === 'paused' ? 'active' : 'paused';
        task.nextRun = task.status === 'paused' ? '--' : '明天 09:00';
        renderSuperTasks();
      });

      document.getElementById('agentPageBack').addEventListener('click', function () {
        if (pageHistory.length > 1) pageHistory.pop();
        switchPage(pageHistory.pop() || 'home', { skipHistory: true });
      });

      document.getElementById('searchPageBack').addEventListener('click', function () {
        if (pageHistory[pageHistory.length - 1] === 'search') pageHistory.pop();
        var previousPage = pageHistory[pageHistory.length - 1] || 'home';
        switchPage(previousPage, { skipHistory: true });
        if (searchReturnsToGlobalSearch) {
          searchReturnsToGlobalSearch = false;
          globalSearchPage.classList.add('show');
          setTimeout(function () { gsInput.focus(); }, 40);
        }
      });

      document.querySelectorAll('[data-nav-back]').forEach(function (btn) {
        btn.addEventListener('click', function () { switchPage('home'); });
      });

      document.getElementById('audioPageBack').addEventListener('click', function () { switchPage('message'); });
      document.getElementById('openAudioSearch').addEventListener('click', function () { switchPage('audioSearch'); });
      document.getElementById('cancelAudioSearch').addEventListener('click', function () { switchPage('audio'); });

      // Search input — live results
      document.getElementById('audioSearchInput').addEventListener('input', function() {
        var q = this.value.trim();
        if (q.length === 0) { showSearchEmpty(); }
        else { showSearchResults(q); }
      });
      document.getElementById('audioSearchClear').addEventListener('click', function() {
        var inp = document.getElementById('audioSearchInput');
        inp.value = '';
        showSearchEmpty();
        inp.focus();
      });

      // Click on recent chip or guess to search
      document.getElementById('audioSearchPage').addEventListener('click', function(e) {
        var chip = e.target.closest('.search-chip, .guess-item');
        if (!chip) return;
        var q = chip.textContent.replace(/^\d+/, '').trim();
        var inp = document.getElementById('audioSearchInput');
        inp.value = q;
        showSearchResults(q);
      });

      // Search results list clicks — open detail
      document.getElementById('audioSearchResults').addEventListener('click', function(e) {
        var playBtn = e.target.closest('[data-play-index]');
        var card = e.target.closest('.audio-card');
        if (playBtn) {
          var idx = parseInt(playBtn.dataset.playIndex);
          if (playingIndex === idx) { playingIndex = -1; }
          else { playingIndex = idx; }
          e.stopPropagation(); return;
        }
        if (card) {
          var idx = parseInt(card.dataset.audioIndex);
          if (!isNaN(idx)) openAudioDetail(idx);
        }
      });

      document.getElementById('profileTabs').addEventListener('click', function (event) {
        const tab = event.target.closest('.profile-tab');
        if (!tab) return;
        currentProfileTab = tab.dataset.profileTab;
        renderProfileFeed();
      });

      document.querySelectorAll('.top-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
          currentTab = tab.dataset.tab;
          document.querySelectorAll('.top-tab').forEach(function (t) { t.classList.toggle('active', t === tab); });
          document.getElementById('categoryFilter').classList.toggle('show', currentTab === 'discover');
          document.getElementById('agentFilter').classList.toggle('show', currentTab === 'following');
          currentAgent = 'all';
          renderAgentFilter();
          renderFeed();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });

      document.getElementById('categoryFilter').addEventListener('click', function (event) {
        const category = event.target.closest('.category-chip');
        if (!category) return;
        currentCategory = category.dataset.category;
        renderCategoryFilter();
        renderFeed();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      document.getElementById('agentFilter').addEventListener('click', function (event) {
        const agent = event.target.closest('.agent');
        if (!agent) return;
        currentAgent = agent.dataset.agent;
        renderAgentFilter();
        renderFeed();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      feed.addEventListener('click', function (event) {
        if (handleCardAction(event, 'feed')) return;
        const avatarButton = event.target.closest('[data-open-agent]');
        if (avatarButton) { openAgentPage(avatarButton.dataset.openAgent); return; }
        const toggle = event.target.closest('.summary-toggle');
        if (toggle) {
          const summary = toggle.previousElementSibling;
          const expanded = summary.classList.toggle('expanded');
          summary.classList.toggle('clamped', !expanded);
          toggle.textContent = expanded ? '收起 ↑' : '展开 ↓';
          return;
        }
        const media = event.target.closest('.media');
        if (!media) return;
        const card = event.target.closest('.feed-card');
        if (!card) return;
        renderDetail(renderedItems[Number(card.dataset.renderIndex)]);
      });

      feed.addEventListener('input', function (event) {
        const input = event.target.closest('[data-comment-input]');
        if (!input) return;
        const card = event.target.closest('.feed-card');
        const item = renderedItems[Number(card.dataset.renderIndex)];
        if (!item) return;
        commentDrafts.set(item.id + '::feed', input.value);
      });

      profileFeed.addEventListener('click', function (event) {
        if (handleCardAction(event, 'profile')) return;
        const avatarButton = event.target.closest('[data-open-agent]');
        if (avatarButton) { openAgentPage(avatarButton.dataset.openAgent); return; }
        const card = event.target.closest('.feed-card');
        if (!card) return;
        renderDetail(renderedItems[Number(card.dataset.renderIndex)]);
      });

      agentFeed.addEventListener('click', function (event) {
        if (handleCardAction(event, 'agent')) return;
        const toggle = event.target.closest('.summary-toggle');
        if (toggle) {
          const summary = toggle.previousElementSibling;
          const expanded = summary.classList.toggle('expanded');
          summary.classList.toggle('clamped', !expanded);
          toggle.textContent = expanded ? '收起 ↑' : '展开 ↓';
          return;
        }
        const card = event.target.closest('.feed-card');
        if (!card) return;
        renderDetail(renderedItems[Number(card.dataset.renderIndex)]);
      });

      document.getElementById('backBtn').addEventListener('click', function () {
        detailPage.classList.remove('show');
        document.body.style.overflow = '';
      });

      /* ─── Sources sheet close ─── */
      var sourcesSheetEl = document.getElementById('sourcesSheet');
      if (sourcesSheetEl) {
        sourcesSheetEl.addEventListener('click', function (event) {
          if (event.target === sourcesSheetEl || event.target.closest('[data-close="sources-sheet"]')) {
            closeSourcesSheet();
          }
        });
      }

      detailContent.addEventListener('click', function (event) {
        var modeButton = event.target.closest('[data-detail-mode]');
        if (!modeButton) return;
        setDetailMode(modeButton.dataset.detailMode);
      });

      /* ─── SCROLL HIDE NAV ─── */
      let lastScrollY = 0, downDist = 0, upDist = 0;
      var navHidePages = ['contacts', 'contactChat', 'search', 'audio', 'audioSearch', 'superAgent', 'superSettings', 'superTasks'];
      window.addEventListener('scroll', function () {
        if (navHidePages.includes(currentPage)) { bottomNav.classList.add('hide'); return; }
        const y = window.scrollY || document.documentElement.scrollTop;
        const delta = y - lastScrollY;
        if (y <= 8) { bottomNav.classList.remove('hide'); downDist = 0; upDist = 0; }
        else if (delta > 0) { downDist += delta; upDist = 0; if (downDist >= 120) bottomNav.classList.add('hide'); }
        else if (delta < 0) { upDist += Math.abs(delta); downDist = 0; if (upDist >= 40) bottomNav.classList.remove('hide'); }
        lastScrollY = y;
      }, { passive: true });

      /* ═══════════════ AUDIO CENTER NEW INTERACTIONS ═══════════════ */

      // ── Audio detail page ──
      var audioDetailPage = document.getElementById('audioDetailPage');
      var audioDetailBack = document.getElementById('audioDetailBack');
      var audioDetailMore = document.getElementById('audioDetailMore');
      var ctrlPlay = document.getElementById('ctrlPlay');
      var isPlaying = false;

      function updateDetailPanes() {
        var status = audioDetailPage.dataset.status || 'done';
        var tab = audioDetailPage.dataset.tab || 'summary';
        var loadingPane = document.getElementById('audioLoadingPane');
        var summaryPane = document.getElementById('audioSummaryPane');
        var transcriptPane = document.getElementById('audioTranscriptPane');
        var cards = {
          transcriptLoading: document.getElementById('detailStateTranscript'),
          summaryLoading: document.getElementById('detailStateSummary'),
          transcriptFailed: document.getElementById('detailStateFailedTranscript'),
          summaryFailed: document.getElementById('detailStateFailedSummary'),
          empty: document.getElementById('detailStateEmpty')
        };
        // Reset
        loadingPane.classList.remove('show');
        summaryPane.classList.remove('active');
        transcriptPane.classList.remove('active');
        Object.keys(cards).forEach(function (k) { cards[k].classList.remove('show'); });

        function showStateCard(key) {
          loadingPane.classList.add('show');
          cards[key].classList.add('show');
        }
        function showSummary() { summaryPane.classList.add('active'); }
        function showTranscript() { transcriptPane.classList.add('active'); }

        if (status === 'processing_transcript') {
          // 转写中：两个 tab 都展示「转写中」（转写没完成也就没有文字记录）
          showStateCard('transcriptLoading');
        } else if (status === 'processing') {
          // 摘要生成中：摘要 tab loading，文字记录 tab 显示已生成的文字
          if (tab === 'summary') showStateCard('summaryLoading');
          else showTranscript();
        } else if (status === 'failed_transcript' || status === 'failed') {
          // 转写失败：两个 tab 都展示失败提示
          showStateCard('transcriptFailed');
        } else if (status === 'failed_summary') {
          // 摘要失败：摘要 tab 失败提示，文字记录 tab 正常
          if (tab === 'summary') showStateCard('summaryFailed');
          else showTranscript();
        } else if (status === 'empty') {
          // 空录音：无转写无概要，两个 tab 都展示「空录音」卡片，不进入事项同步流程
          showStateCard('empty');
        } else {
          // done
          if (tab === 'summary') showSummary(); else showTranscript();
        }
      }

      function openAudioDetail(idx) {
        var item = audioItems[idx];
        document.getElementById('audioDetailTitle').textContent = item.title;
        document.getElementById('audioDetailSourceName').textContent = item.source || '';
        document.getElementById('audioDetailMeta').textContent = item.time;
        document.getElementById('audioCurrentTime').textContent = '00:00';
        document.getElementById('audioTotalTime').textContent = item.duration.replace('分', ':').replace('秒', '').padStart(5, '0');
        var srcPill = document.getElementById('audioDetailSourcePill');
        if (srcPill) srcPill.textContent = item.source || '未指定';

        // Reset summary subtabs to first
        document.querySelectorAll('.summary-subtab').forEach(function (t, i) {
          t.classList.toggle('active', i === 0);
        });
        var contentArea = document.querySelector('.audio-content-area');
        if (contentArea) contentArea.scrollTop = 0;

        // Set state via dataset
        audioDetailPage.dataset.status = item.status || 'done';
        audioDetailPage.dataset.tab = 'summary';
        document.querySelectorAll('[data-audio-tab]').forEach(function (btn) {
          btn.classList.toggle('active', btn.dataset.audioTab === 'summary');
        });
        updateDetailPanes();

        audioDetailPage.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
      audioDetailBack.addEventListener('click', function () {
        audioDetailPage.classList.remove('show');
        document.body.style.overflow = '';
      });

      // Summary sub-tabs: click → scroll to corresponding section
      (function setupSummarySubtabs() {
        var subtabs = document.querySelectorAll('.summary-subtab');
        var contentArea = document.querySelector('.audio-content-area');
        if (!subtabs.length || !contentArea) return;
        var isUserClick = false;
        var clickResetTimer = null;
        subtabs.forEach(function (btn) {
          btn.addEventListener('click', function () {
            subtabs.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var target = document.getElementById(btn.dataset.anchor);
            if (!target) return;
            isUserClick = true;
            clearTimeout(clickResetTimer);
            var top = target.offsetTop - 56;
            contentArea.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
            clickResetTimer = setTimeout(function () { isUserClick = false; }, 600);
          });
        });
        // Sync active tab on scroll
        contentArea.addEventListener('scroll', function () {
          if (isUserClick) return;
          if (!document.getElementById('audioSummaryPane').classList.contains('active')) return;
          var sections = ['secBasic', 'secSmart', 'secChapter', 'secTodo'];
          var threshold = contentArea.scrollTop + 80;
          var activeIdx = 0;
          for (var i = 0; i < sections.length; i++) {
            var el = document.getElementById(sections[i]);
            if (el && el.offsetTop <= threshold) activeIdx = i;
          }
          subtabs.forEach(function (b, i) { b.classList.toggle('active', i === activeIdx); });
        }, { passive: true });
      })();

      // Play/pause toggle
      ctrlPlay.addEventListener('click', function () {
        isPlaying = !isPlaying;
        ctrlPlay.innerHTML = isPlaying
          ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
          : '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>';
      });

      // Speed cycle
      var speeds = ['0.5×', '1.0×', '1.5×', '2.0×'];
      var speedIdx = 1;
      document.getElementById('ctrlSpeed').addEventListener('click', function () {
        speedIdx = (speedIdx + 1) % speeds.length;
        this.textContent = speeds[speedIdx];
        showToast('播放速度 ' + speeds[speedIdx]);
      });

      // Content tab switch (detail page)
      document.querySelectorAll('[data-audio-tab]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          document.querySelectorAll('[data-audio-tab]').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          audioDetailPage.dataset.tab = btn.dataset.audioTab;
          updateDetailPanes();
        });
      });

      // Chapter / transcript seek
      audioDetailPage.addEventListener('click', function (e) {
        var chapter = e.target.closest('.chapter-item');
        var transcript = e.target.closest('.transcript-item');
        if (chapter || transcript) {
          showToast('已跳转到对应时间点 ▶');
          isPlaying = true;
          ctrlPlay.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
        }
        // More menu from detail
        if (e.target.closest('#audioDetailMore')) {
          ctxMenuTitle.textContent = document.getElementById('audioDetailTitle').textContent;
          ctxMenuBackdrop.classList.add('show');
        }
      });

      // Audio list clicks
      audioList.addEventListener('click', function (e) {
        var moreBtn = e.target.closest('[data-ctx-index]');
        var playBtn = e.target.closest('[data-play-index]');
        var retryBtn = e.target.closest('[data-retry]');
        var card = e.target.closest('.audio-card');
        if (moreBtn) {
          var idx = parseInt(moreBtn.dataset.ctxIndex);
          ctxMenuTitle.textContent = audioItems[idx].title;
          ctxMenuBackdrop.classList.add('show');
          e.stopPropagation();
          return;
        }
        if (retryBtn) {
          var idx = parseInt(retryBtn.dataset.retry);
          var retryType = retryBtn.dataset.retryType;
          audioItems[idx].status = 'processing';
          audioItems[idx].entryStatus = '';
          audioItems[idx].statusTime = '刚刚';
          renderAudioList();
          e.stopPropagation();
          setTimeout(function () {
            audioItems[idx].status = 'done';
            audioItems[idx].viewed = false;
            audioItems[idx].statusTime = '刚刚';
            if (retryType === 'summary') {
              audioItems[idx].summary = '已重新生成智能摘要。会议围绕核心议题进行了深入讨论，与会人员达成一致意见并明确了后续行动计划。';
            }
            renderAudioList();
          }, 2500);
          return;
        }
        if (playBtn) {
          var idx = parseInt(playBtn.dataset.playIndex);
          if (playingIndex === idx) {
            playingIndex = -1; // pause
          } else {
            playingIndex = idx;
          }
          e.stopPropagation();
          renderAudioList();
          return;
        }
        if (card) {
          var idx = parseInt(card.dataset.audioIndex);
          if (!isNaN(idx)) openAudioDetail(idx);
        }
      });

      // ── Recording Modal ──
      var recModalBackdrop = document.getElementById('recModalBackdrop');
      var recPanel = recModalBackdrop.querySelector('.rec-panel');
      var recStateRecording = document.getElementById('recStateRecording');
      var recStateConfirm = document.getElementById('recStateConfirm');
      var recTimerEl = document.getElementById('recTimer');
      var recWaveform = document.getElementById('recWaveform');
      var recStateLabel = document.getElementById('recStateLabel');
      var recBtnPause = document.getElementById('recBtnPause');
      var recBtnCancel = document.getElementById('recBtnCancel');
      var recBtnDone = document.getElementById('recBtnDone');
      var miniRecPill = document.getElementById('miniRecPill');
      var miniRecTimer = document.getElementById('miniRecTimer');
      var recInterval = null;
      var recSeconds = 0;
      var recPaused = false;
      var recMinimized = false;

      function updateMiniTimer() {
        if (miniRecTimer) miniRecTimer.textContent = formatSecs(recSeconds);
      }

      function formatSecs(s) {
        var m = Math.floor(s / 60), sec = s % 60;
        return (m < 10 ? '0' : '') + m + ':' + (sec < 10 ? '0' : '') + sec;
      }

      function buildWaveform() {
        var bars = '';
        for (var i = 0; i < 36; i++) {
          var h = (Math.random() * 2.8 + 0.5).toFixed(2);
          var delay = (Math.random() * 0.8).toFixed(2);
          bars += '<div class="wave-bar" style="height:' + Math.round(Math.random()*28+6) + 'px;--h:' + h + ';animation-delay:' + delay + 's;animation-duration:' + (0.6 + Math.random()*0.6).toFixed(2) + 's"></div>';
        }
        recWaveform.innerHTML = bars;
      }

      function goToConfirmState() {
        clearInterval(recInterval);
        document.getElementById('recConfirmDuration').textContent = formatSecs(recSeconds || 154);
        var now = new Date();
        var pad = function(n){return n<10?'0'+n:n;};
        document.getElementById('recTitleInput').value = now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes()) + ' 录音';
        recStateRecording.style.display = 'none';
        recStateConfirm.style.display = '';
        recPanel.classList.add('in-confirm');
      }

      function stopAndCloseRec() {
        clearInterval(recInterval);
        recInterval = null;
        recMinimized = false;
        miniRecPill.style.display = 'none';
        recPanel.classList.remove('in-confirm');
        recModalBackdrop.classList.remove('show');
      }

      function minimizeRec() {
        recMinimized = true;
        recModalBackdrop.classList.remove('show');
        miniRecPill.style.display = 'flex';
        // Anchor relative to the app container so it never overflows the simulated phone width
        var appR = document.querySelector('.app').getBoundingClientRect();
        var pillW = miniRecPill.offsetWidth || 160;
        miniRecPill.style.top = (appR.top + 60) + 'px';
        miniRecPill.style.left = (appR.left + appR.width - pillW - 16) + 'px';
        miniRecPill.style.right = 'auto';
        miniRecPill.style.bottom = 'auto';
      }

      function expandRec() {
        recMinimized = false;
        miniRecPill.style.display = 'none';
        recModalBackdrop.classList.add('show');
        if (recWaveform && !recPaused) buildWaveform();
      }

      document.getElementById('recMinimize').addEventListener('click', minimizeRec);
      document.getElementById('miniRecExpand').addEventListener('click', expandRec);
      document.getElementById('miniRecStop').addEventListener('click', function() {
        miniRecPill.style.display = 'none';
        recMinimized = false;
        goToConfirmState();
        recModalBackdrop.classList.add('show');
      });

      // ── Draggable mini pill ──
      (function() {
        var pill = miniRecPill;
        var dragging = false;
        var startX, startY, pillX, pillY;
        var appEl = document.querySelector('.app');
        function getAppBounds() {
          var r = appEl ? appEl.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
          return r;
        }
        function onStart(cx, cy) {
          dragging = true;
          var rect = pill.getBoundingClientRect();
          pillX = rect.left; pillY = rect.top;
          startX = cx; startY = cy;
          pill.style.cursor = 'grabbing';
          pill.style.left = pillX + 'px'; pill.style.right = 'auto';
          pill.style.top = pillY + 'px'; pill.style.bottom = 'auto';
          pill.style.animation = 'none';
        }
        function onMove(cx, cy) {
          if (!dragging) return;
          var bounds = getAppBounds();
          var pillW = pill.offsetWidth, pillH = pill.offsetHeight;
          var newX = Math.max(bounds.left, Math.min(bounds.left + bounds.width - pillW, pillX + (cx - startX)));
          var newY = Math.max(bounds.top + 44, Math.min(bounds.top + bounds.height - pillH - 20, pillY + (cy - startY)));
          pill.style.left = newX + 'px'; pill.style.top = newY + 'px';
        }
        function onEnd() { if (!dragging) return; dragging = false; pill.style.cursor = 'grab'; }
        pill.addEventListener('touchstart', function(e) { var t = e.touches[0]; onStart(t.clientX, t.clientY); }, { passive: true });
        window.addEventListener('touchmove', function(e) { if (!dragging) return; var t = e.touches[0]; onMove(t.clientX, t.clientY); }, { passive: true });
        window.addEventListener('touchend', onEnd);
        pill.addEventListener('mousedown', function(e) { if (e.target.closest('button')) return; onStart(e.clientX, e.clientY); e.preventDefault(); });
        window.addEventListener('mousemove', function(e) { onMove(e.clientX, e.clientY); });
        window.addEventListener('mouseup', onEnd);
      })();

      function openRecModal() {
        if (recInterval !== null) {
          showToast('录音进行中，请先完成或结束当前录音');
          if (recMinimized) expandRec();
          return;
        }
        recSeconds = 0; recPaused = false;
        recTimerEl.textContent = '00:00';
        recTimerEl.classList.remove('paused');
        recStateLabel.textContent = '录音中 · 最长支持 2 小时';
        recBtnPause.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
        recBtnPause.classList.add('recording');
        recStateRecording.style.display = '';
        recStateConfirm.style.display = 'none';
        recPanel.classList.remove('in-confirm');
        buildWaveform();
        recModalBackdrop.classList.add('show');
        recInterval = setInterval(function () {
          if (!recPaused) { recSeconds++; recTimerEl.textContent = formatSecs(recSeconds); if (recMinimized) updateMiniTimer(); }
        }, 1000);
      }

      document.getElementById('btnRecordQuick').addEventListener('click', openRecModal);

      recBtnPause.addEventListener('click', function () {
        recPaused = !recPaused;
        recTimerEl.classList.toggle('paused', recPaused);
        recWaveform.classList.toggle('waveform-paused', recPaused);
        recStateLabel.textContent = recPaused ? '已暂停 · 点击继续录音' : '录音中 · 最长支持 2 小时';
        recBtnPause.innerHTML = recPaused
          ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>'
          : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>';
        if (!recPaused) buildWaveform();
      });

      recBtnDone.addEventListener('click', function () { goToConfirmState(); });
      recBtnCancel.addEventListener('click', function () { document.getElementById('confirmDiscardModal').classList.add('show'); });
      document.getElementById('confirmKeepRecording').addEventListener('click', function () { document.getElementById('confirmDiscardModal').classList.remove('show'); });
      document.getElementById('confirmDiscard').addEventListener('click', function () {
        document.getElementById('confirmDiscardModal').classList.remove('show');
        stopAndCloseRec();
      });
      document.getElementById('recConfirmDelete').addEventListener('click', function () {
        document.getElementById('confirmDiscardModal').classList.add('show');
      });
      document.getElementById('recConfirmSave').addEventListener('click', function () {
        var newItem = {
          title: document.getElementById('recTitleInput').value || '新建录音',
          source: recChosenSource, time: new Date().toLocaleDateString('zh-CN').replace(/\//g, '-') + ' ' + new Date().toLocaleTimeString('zh-CN', {hour:'2-digit',minute:'2-digit'}),
          statusTime: '刚刚',
          summary: null, duration: formatSecs(recSeconds || 154), status: 'processing'
        };
        stopAndCloseRec();
        showToast('录音已保存，正在处理中 ✓');
        audioItems.unshift(newItem);
        renderAudioList();
      });

      // ── Import Modal — 4-step flow ──
      var importModalBackdrop = document.getElementById('importModalBackdrop');
      var importStep1 = document.getElementById('importStep1');
      var importStep2 = document.getElementById('importStep2');
      var importStep3 = document.getElementById('importStep3');
      var importSelectedFiles = new Set();
      var importChosenSource = '我的音频';

      var sampleFiles = [
        { name: '智跃Zleap产品宣讲.m4a', meta: '36分12秒 · 42.6 MB', emoji: '🎙' },
        { name: '华东客户访谈录音.mp3', meta: '18分40秒 · 18.2 MB', emoji: '🎵' },
        { name: '新品发布彩排纪要.m4a', meta: '12分09秒 · 14.8 MB', emoji: '🎙' },
        { name: '销售渠道周例会.wav', meta: '24分51秒 · 56.4 MB', emoji: '🎵' },
        { name: '产品需求评审录音.m4a', meta: '8分22秒 · 9.7 MB', emoji: '🎙' },
        { name: '客户服务培训.mp3', meta: '45分03秒 · 52.1 MB', emoji: '🎵' },
        { name: '季度复盘会议.m4a', meta: '61分17秒 · 70.3 MB', emoji: '🎙' },
      ];

      function showImportStep(step) {
        importStep1.style.display = step === 1 ? '' : 'none';
        importStep2.style.display = step === 2 ? '' : 'none';
        importStep3.style.display = step === 3 ? '' : 'none';
      }

      function renderImportFileGrid(sourceType) {
        importSelectedFiles.clear();
        document.getElementById('importSelectedCount').textContent = '0';
        document.getElementById('importStep2Confirm').disabled = true;
        document.getElementById('importLimitWarn').style.display = 'none';
        document.getElementById('importStep2Title').textContent = sourceType === 'album' ? '从相册选择' : '本地文件';
        document.getElementById('importFileGrid').innerHTML = sampleFiles.map(function(f, i) {
          return '<div class="import-grid-item" data-file-idx="' + i + '">' +
            '<div class="import-grid-thumb">' + f.emoji + '</div>' +
            '<div class="import-grid-info">' +
              '<div class="import-grid-name">' + f.name + '</div>' +
              '<div class="import-grid-meta">' + f.meta + '</div>' +
            '</div>' +
            '<div class="import-grid-check" data-check-idx="' + i + '"></div>' +
          '</div>';
        }).join('');
      }

      // Render step 3 file list — static view before upload starts
      function renderImportStep3() {
        var selected = sampleFiles.filter(function(_, i) { return importSelectedFiles.has(i); });
        // Reset header to confirm state
        document.getElementById('importStep3Title').textContent = '确认导入';
        document.getElementById('importStep3Sub').textContent = '';
        document.getElementById('importStep3Footer').style.display = 'grid';
        document.getElementById('importStep4Footer').style.display = 'none';
        document.getElementById('importFileListWrap').innerHTML = selected.map(function(f) {
          return '<div class="import-file-item">' +
            '<div class="import-file-icon">' + f.emoji + '</div>' +
            '<div class="import-file-info">' +
              '<div class="import-file-name">' + f.name + '</div>' +
              '<div class="import-file-size">' + f.meta + '</div>' +
            '</div>' +
          '</div>';
        }).join('');
      }

      function startUploadSimulation() {
        var selected = sampleFiles.filter(function(_, i) { return importSelectedFiles.has(i); });
        var outcomes = selected.map(function(_, i) { return i === 1 ? 'failed' : 'uploading'; });
        var uploadItems = selected.map(function(f) {
          return {
            title: f.name,
            source: importChosenSource,
            time: '刚刚',
            createdAt: '刚刚',
            statusTime: '刚刚',
            summary: null,
            duration: f.meta.split(' · ')[0],
            status: 'uploading'
          };
        });
        audioItems.unshift.apply(audioItems, uploadItems);
        // Switch header and footer to uploading state
        document.getElementById('importStep3Title').textContent = '确认导入';
        document.getElementById('importStep3Sub').textContent = '上传中，请稍候…';
        document.getElementById('importStep3Back').style.visibility = 'hidden';
        document.getElementById('importStep3Footer').style.display = 'none';
        document.getElementById('importStep4Footer').style.display = 'block';
        document.getElementById('importDoneBtn').disabled = true;
        // Render upload rows in the same wrap
        document.getElementById('importFileListWrap').innerHTML = selected.map(function(f, i) {
          return '<div class="upload-file-item" id="uploadItem' + i + '">' +
            '<div class="upload-file-icon">' + f.emoji + '</div>' +
            '<div class="upload-file-info">' +
              '<div class="upload-file-name">' + f.name + '</div>' +
              '<div class="upload-file-sub" id="uploadSub' + i + '">' + f.meta.split(' · ')[1] + '</div>' +
              '<div class="upload-progress"><div class="upload-progress-fill uploading" id="uploadFill' + i + '" style="width:0%"></div></div>' +
            '</div>' +
            '<span class="upload-status-badge uploading" id="uploadBadge' + i + '">上传中</span>' +
          '</div>';
        }).join('');
        var doneCount = 0;
        selected.forEach(function(f, i) {
          setTimeout(function() {
            var fill = document.getElementById('uploadFill' + i);
            var badge = document.getElementById('uploadBadge' + i);
            var sub = document.getElementById('uploadSub' + i);
            if (!fill) return;
            var isFail = outcomes[i] === 'failed';
            var pct = 0;
            var interval = setInterval(function() {
              pct += isFail ? Math.random() * 12 : Math.random() * 18;
              var cap = isFail ? 55 : 100;
              if (pct >= cap) {
                pct = cap; clearInterval(interval);
                if (isFail) {
                  fill.className = 'upload-progress-fill failed';
                  badge.className = 'upload-status-badge failed'; badge.textContent = '上传失败';
                  sub.textContent = '上传失败，请重试';
                  uploadItems[i].status = 'upload_failed';
                  uploadItems[i].statusTime = '刚刚';
                } else {
                  fill.className = 'upload-progress-fill done';
                  badge.className = 'upload-status-badge done'; badge.textContent = '已完成';
                  sub.textContent = f.meta;
                  uploadItems[i].status = 'processing';
                  uploadItems[i].statusTime = '刚刚';
                }
                doneCount++;
                if (doneCount === selected.length) {
                  var failCount = outcomes.filter(function(o) { return o === 'failed'; }).length;
                  var sub3 = failCount > 0 ? (selected.length - failCount) + ' 个成功，' + failCount + ' 个失败' : '全部上传完成 ✓';
                  document.getElementById('importStep3Sub').textContent = sub3;
                  document.getElementById('importDoneBtn').disabled = false;
                }
              }
              if (fill) fill.style.width = pct + '%';
              if (sub && pct < cap) sub.textContent = '上传中 ' + Math.round(pct) + '%…';
            }, 120);
          }, i * 600);
        });
      }

      // Open import modal
      document.getElementById('btnImportQuick').addEventListener('click', function () {
        importModalBackdrop.classList.add('show');
        importChosenSource = '我的音频';
        showImportStep(1);
      });

      // Step 1: choose source
      ['importFromAlbum','importFromFiles'].forEach(function(id, idx) {
        var types = ['album','files'];
        document.getElementById(id).addEventListener('click', function () {
          renderImportFileGrid(types[idx]);
          showImportStep(2);
        });
      });
      document.getElementById('importStep1Cancel').addEventListener('click', function () {
        importModalBackdrop.classList.remove('show');
      });

      // Step 2: select files
      document.getElementById('importFileGrid').addEventListener('click', function(e) {
        var item = e.target.closest('.import-grid-item');
        if (!item) return;
        var idx = parseInt(item.dataset.fileIdx);
        if (importSelectedFiles.has(idx)) {
          importSelectedFiles.delete(idx);
        } else {
          if (importSelectedFiles.size >= 5) { return; }
          importSelectedFiles.add(idx);
        }
        document.querySelectorAll('.import-grid-check').forEach(function(el) {
          var i = parseInt(el.dataset.checkIdx);
          el.classList.toggle('checked', importSelectedFiles.has(i));
        });
        var cnt = importSelectedFiles.size;
        document.getElementById('importSelectedCount').textContent = cnt;
        document.getElementById('importStep2Confirm').disabled = cnt === 0;
        document.getElementById('importLimitWarn').style.display = cnt >= 5 ? 'flex' : 'none';
      });
      document.getElementById('importStep2Back').addEventListener('click', function () { showImportStep(1); });
      document.getElementById('importStep2Confirm').addEventListener('click', function () {
        if (importSelectedFiles.size === 0) return;
        showImportStep(3);
        startUploadSimulation();
      });

      // Step 3: searchable source sheet
      var allSourcesList = ['我的音频', '产品路演', '市场部会议', '客户回访', '销售例会', '访谈录音', '培训录音', '发布会复盘', '渠道共创', 'Q2周例会', '新品宣讲', '年度总结会', '合规培训', '跨部门协同'];
      var sourceSheetEl = document.getElementById('sourceSearchSheet');
      var importModalInner = document.querySelector('.import-modal-inner');
      var sourceSheetCaller = 'import'; // 'import' | 'rec'
      var recChosenSource = '我的音频';

      function getCurrentSourceForSheet() {
        return sourceSheetCaller === 'rec' ? recChosenSource : importChosenSource;
      }

      function renderSourceSheetList(query) {
        var q = (query || '').trim().toLowerCase();
        var currentSrc = getCurrentSourceForSheet();
        var filtered = q ? allSourcesList.filter(function(s) { return s.toLowerCase().indexOf(q) !== -1; }) : allSourcesList;
        if (filtered.length === 0) {
          document.getElementById('sourceSheetList').innerHTML = '<div class="source-sheet-empty">未找到"' + query + '"</div>';
          return;
        }
        document.getElementById('sourceSheetList').innerHTML = filtered.map(function(src) {
          var isSelected = src === currentSrc;
          return '<div class="source-sheet-item ' + (isSelected ? 'selected' : '') + '" data-src="' + src + '">' +
            '<span class="source-sheet-item-name">' + src + '</span>' +
            '<div class="source-sheet-item-check"></div>' +
          '</div>';
        }).join('');
      }

      function openSourceSheet(caller) {
        sourceSheetCaller = caller || 'import';
        if (sourceSheetCaller === 'rec') {
          sourceSheetEl.classList.add('source-search-sheet--global');
          document.body.appendChild(sourceSheetEl);
        } else {
          sourceSheetEl.classList.remove('source-search-sheet--global');
          importModalInner.appendChild(sourceSheetEl);
        }
        document.getElementById('sourceSheetInput').value = '';
        document.getElementById('sourceSheetClear').style.display = 'none';
        renderSourceSheetList('');
        sourceSheetEl.style.display = 'flex';
        setTimeout(function() { document.getElementById('sourceSheetInput').focus(); }, 100);
      }

      function closeSourceSheet() {
        sourceSheetEl.style.display = 'none';
        if (sourceSheetCaller === 'rec') sourceSheetEl.classList.remove('source-search-sheet--global');
      }

      document.getElementById('importSourcePickerBtn').addEventListener('click', function() { openSourceSheet('import'); });

      // Recording save: open source sheet
      document.getElementById('recSourceSelectBtn').addEventListener('click', function() { openSourceSheet('rec'); });

      document.getElementById('sourceSheetBack').addEventListener('click', closeSourceSheet);
      document.getElementById('sourceSheetDone').addEventListener('click', closeSourceSheet);

      document.getElementById('sourceSheetInput').addEventListener('input', function() {
        var q = this.value;
        document.getElementById('sourceSheetClear').style.display = q ? '' : 'none';
        renderSourceSheetList(q);
      });
      document.getElementById('sourceSheetClear').addEventListener('click', function() {
        document.getElementById('sourceSheetInput').value = '';
        this.style.display = 'none';
        renderSourceSheetList('');
        document.getElementById('sourceSheetInput').focus();
      });

      document.getElementById('sourceSheetList').addEventListener('click', function(e) {
        var item = e.target.closest('.source-sheet-item');
        if (!item) return;
        var chosen = item.dataset.src;
        if (sourceSheetCaller === 'rec') {
          recChosenSource = chosen;
          document.getElementById('recChosenSource').textContent = chosen;
        } else {
          importChosenSource = chosen;
          document.getElementById('importSourceName').textContent = chosen;
        }
        renderSourceSheetList(document.getElementById('sourceSheetInput').value);
        setTimeout(closeSourceSheet, 180);
      });

      document.getElementById('importStep3Back').addEventListener('click', function () {
        showImportStep(2);
      });

      // Step 3: cancel (with confirm) and start import
      document.getElementById('importCancelBtn').addEventListener('click', function () {
        document.getElementById('importCancelConfirmModal').classList.add('show');
      });
      document.getElementById('importCancelKeep').addEventListener('click', function () {
        document.getElementById('importCancelConfirmModal').classList.remove('show');
      });
      document.getElementById('importCancelConfirm').addEventListener('click', function () {
        document.getElementById('importCancelConfirmModal').classList.remove('show');
        closeSourceSheet();
        importModalBackdrop.classList.remove('show');
      });
      document.getElementById('importConfirmBtn').addEventListener('click', function () {
        startUploadSimulation(); // stays on step 3, just switches state
      });

      // Done (upload finished)
      document.getElementById('importDoneBtn').addEventListener('click', function () {
        importModalBackdrop.classList.remove('show');
        renderAudioList();
      });

      importModalBackdrop.addEventListener('click', function (e) {
        if (e.target === importModalBackdrop) importModalBackdrop.classList.remove('show');
      });

      // ── Context menu ──
      var ctxMenuBackdrop = document.getElementById('ctxMenuBackdrop');
      var ctxMenuTitle = document.getElementById('ctxMenuTitle');

      ctxMenuBackdrop.addEventListener('click', function (e) {
        if (e.target === ctxMenuBackdrop) ctxMenuBackdrop.classList.remove('show');
      });

      /* ── Rename audio modal ── */
      var renameAudioModal = document.getElementById('renameAudioModal');
      var renameAudioInput = document.getElementById('renameAudioInput');
      var renameCounter = document.getElementById('renameCounter');
      var renameTargetTitle = '';

      function updateRenameCounter() {
        var len = renameAudioInput.value.length;
        renameCounter.textContent = len;
        renameCounter.parentElement.classList.toggle('over', len >= 40);
      }
      renameAudioInput.addEventListener('input', updateRenameCounter);

      document.getElementById('ctxRename').addEventListener('click', function () {
        ctxMenuBackdrop.classList.remove('show');
        renameTargetTitle = ctxMenuTitle.textContent;
        // Strip extension for display; keep extension when saving
        var dotIdx = renameTargetTitle.lastIndexOf('.');
        var nameOnly = dotIdx > 0 ? renameTargetTitle.slice(0, dotIdx) : renameTargetTitle;
        renameAudioInput.value = nameOnly.slice(0, 40);
        updateRenameCounter();
        renameAudioModal.classList.add('show');
        setTimeout(function () {
          renameAudioInput.focus();
          renameAudioInput.select();
        }, 50);
      });
      document.getElementById('renameAudioCancel').addEventListener('click', function () {
        renameAudioModal.classList.remove('show');
      });
      renameAudioModal.addEventListener('click', function (e) {
        if (e.target === renameAudioModal) renameAudioModal.classList.remove('show');
      });
      document.getElementById('renameAudioConfirm').addEventListener('click', function () {
        var newName = renameAudioInput.value.trim();
        if (!newName) { showToast('请输入音频名称'); return; }
        if (newName.length > 40) { showToast('音频名称不能超过 40 字'); return; }
        var item = audioItems.find(function (it) { return it.title === renameTargetTitle; });
        if (item) {
          var dotIdx = item.title.lastIndexOf('.');
          var ext = dotIdx > 0 ? item.title.slice(dotIdx) : '';
          item.title = newName + ext;
          if (typeof renderAudioList === 'function') renderAudioList();
          var titleEl = document.getElementById('audioDetailTitle');
          if (titleEl && titleEl.textContent === renameTargetTitle) {
            titleEl.textContent = item.title;
          }
        }
        renameAudioModal.classList.remove('show');
        showToast('已重命名');
      });

      /* ── Move-to-source sheet ── */
      var moveSourceBackdrop = document.getElementById('moveSourceBackdrop');
      var moveSourceList = document.getElementById('moveSourceList');
      var moveSourceInput = document.getElementById('moveSourceInput');
      var moveSourceClear = document.getElementById('moveSourceClear');
      var moveSourceDone = document.getElementById('moveSourceDone');
      var allSources = ['产品路演', '客户回访', '研发周会', '市场部会议', '销售例会', '产品发布会', '团队周会', '行业沙龙', '客户成功', '法务合规', '财务复盘', '招聘面试'];
      var currentMoveSource = '';
      var selectedMoveSource = '';

      function renderMoveSourceList(query) {
        var q = (query || '').trim().toLowerCase();
        var list = allSources.filter(function (s) { return !q || s.toLowerCase().indexOf(q) !== -1; });
        if (!list.length) {
          moveSourceList.innerHTML = '<div class="move-source-empty">未找到匹配的信息源</div>';
          return;
        }
        moveSourceList.innerHTML = list.map(function (name) {
          var isCurrent = name === currentMoveSource;
          var isSelected = name === selectedMoveSource;
          return '<div class="move-source-row ' + (isSelected ? 'selected' : '') + '" data-source="' + name + '">' +
            '<div class="move-source-row-icon">' +
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"></path></svg>' +
            '</div>' +
            '<span class="move-source-row-name ' + (isCurrent ? 'current' : '') + '">' + name + '</span>' +
            (isCurrent ? '<span class="move-source-row-tag">当前</span>' : '') +
            '<div class="move-source-row-check"></div>' +
          '</div>';
        }).join('');
      }

      function openMoveSourceSheet(currentSource) {
        currentMoveSource = currentSource || '';
        selectedMoveSource = currentMoveSource;
        moveSourceInput.value = '';
        moveSourceClear.style.display = 'none';
        renderMoveSourceList('');
        moveSourceBackdrop.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
      function closeMoveSourceSheet() {
        moveSourceBackdrop.classList.remove('show');
        document.body.style.overflow = '';
      }

      document.getElementById('ctxMoveSource').addEventListener('click', function () {
        ctxMenuBackdrop.classList.remove('show');
        // try infer current source from menu title
        var title = ctxMenuTitle.textContent;
        var found = audioItems.find(function (it) { return it.title === title; });
        openMoveSourceSheet(found ? found.source : '');
      });
      document.getElementById('moveSourceCancel').addEventListener('click', closeMoveSourceSheet);
      moveSourceBackdrop.addEventListener('click', function (e) {
        if (e.target === moveSourceBackdrop) closeMoveSourceSheet();
      });
      moveSourceInput.addEventListener('input', function () {
        moveSourceClear.style.display = this.value ? '' : 'none';
        renderMoveSourceList(this.value);
      });
      moveSourceClear.addEventListener('click', function () {
        moveSourceInput.value = '';
        this.style.display = 'none';
        renderMoveSourceList('');
        moveSourceInput.focus();
      });
      moveSourceList.addEventListener('click', function (e) {
        var row = e.target.closest('.move-source-row');
        if (!row) return;
        selectedMoveSource = row.dataset.source;
        renderMoveSourceList(moveSourceInput.value);
      });
      moveSourceDone.addEventListener('click', function () {
        if (!selectedMoveSource) { showToast('请选择一个信息源'); return; }
        if (selectedMoveSource === currentMoveSource) {
          closeMoveSourceSheet();
          showToast('信息源未变更');
          return;
        }
        // Update underlying audio item if we can find it
        var title = ctxMenuTitle.textContent;
        var item = audioItems.find(function (it) { return it.title === title; });
        if (item) {
          item.source = selectedMoveSource;
          if (typeof renderAudioList === 'function') renderAudioList();
          var srcPill = document.getElementById('audioDetailSourcePill');
          var srcName = document.getElementById('audioDetailSourceName');
          if (srcPill) srcPill.textContent = selectedMoveSource;
          if (srcName) srcName.textContent = selectedMoveSource;
        }
        closeMoveSourceSheet();
        showToast('已移动到「' + selectedMoveSource + '」');
      });

      /* ── Delete audio second-confirm ── */
      var deleteAudioConfirmModal = document.getElementById('deleteAudioConfirmModal');
      var deleteAudioConfirmDesc = document.getElementById('deleteAudioConfirmDesc');
      document.getElementById('ctxDelete').addEventListener('click', function () {
        ctxMenuBackdrop.classList.remove('show');
        var title = ctxMenuTitle.textContent;
        deleteAudioConfirmDesc.textContent = '「' + title + '」及其转写、摘要将被永久删除，无法恢复。';
        deleteAudioConfirmModal.classList.add('show');
      });
      document.getElementById('deleteAudioCancel').addEventListener('click', function () {
        deleteAudioConfirmModal.classList.remove('show');
      });
      deleteAudioConfirmModal.addEventListener('click', function (e) {
        if (e.target === deleteAudioConfirmModal) deleteAudioConfirmModal.classList.remove('show');
      });
      document.getElementById('deleteAudioConfirm').addEventListener('click', function () {
        deleteAudioConfirmModal.classList.remove('show');
        showToast('已删除该音频');
      });

      // Quick actions entry for record via btnRecordQuick already bound above
}
