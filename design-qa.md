# Design QA

- source visual truth paths:
  - `/Users/mac/Library/Application Support/LarkShell/sdk_storage/32c67f76a4997fb146a9089272e22f80/resources/images/img_v3_0213q_30c0438a-1f90-42e5-b473-3ced17eb65dg.png`（关注）
  - `/Users/mac/Library/Application Support/LarkShell/sdk_storage/32c67f76a4997fb146a9089272e22f80/resources/images/img_v3_0213q_e7acebdf-f87e-4df2-9c04-78188bc8cefg.png`（助手）
  - `/Users/mac/Library/Application Support/LarkShell/sdk_storage/32c67f76a4997fb146a9089272e22f80/resources/images/img_v3_0213q_8b783816-fe0e-4d4f-b8cd-3ccdac981b6g.png`（推荐）
  - `/var/folders/cx/wwlc2r057m18t68yq_t948bh0000gn/T/codex-clipboard-294036f0-39a6-4d93-9f25-7aa360b11336.png`（公共信息源）
  - `/var/folders/cx/wwlc2r057m18t68yq_t948bh0000gn/T/codex-clipboard-69f09624-0a5b-46a4-857b-8f94ada2a077.png`（个人信息源单选）
  - `/var/folders/cx/wwlc2r057m18t68yq_t948bh0000gn/T/codex-clipboard-f2b42b98-191c-4c83-94d0-5d1d1d13d585.png`（个人信息源全选）
  - `/var/folders/cx/wwlc2r057m18t68yq_t948bh0000gn/T/codex-clipboard-c30ca33a-1866-4983-bb60-646ee02e7551.png`（与我共享）
- implementation screenshot paths: `qa-artifacts/contacts-following.png`, `qa-artifacts/contacts-assistants.png`, `qa-artifacts/contacts-recommended.png`, `qa-artifacts/range-public.png`, `qa-artifacts/range-personal-single.png`, `qa-artifacts/range-personal-all.png`, `qa-artifacts/range-shared.png`
- combined comparisons: `qa-artifacts/contacts-comparison.png`, `qa-artifacts/range-comparison.png`
- viewport: 390px app surface；对照图统一裁切为 390 × 522 可见区域，长列表通过页面内滚动继续浏览。
- states: 消息页点击“新建”后的关注、助手、推荐；搜索范围弹层的公共信息源、个人信息源单选、全选和与我共享。
- full-view comparison evidence: 联系人三组和搜索范围四组参考图均与实现图按相同 390px 宽度并排比较；通讯录的导航、搜索与列表结构一致，搜索范围的分段控件、状态摘要、子标签、复选列表、全选动作及底部按钮结构一致。
- focused region comparison evidence: 通讯录顶部标签与首个列表项、搜索范围顶部控件与底部确认区在合并对照图中均清晰可读，无需额外局部放大。

**Findings**

- 无遗留 P0、P1 或 P2 差异。
- 字体与排版：沿用现有系统中文字体栈；标签、姓名、简介和按钮的字重层级与参考一致，长名称和简介均单行截断。
- 间距与布局节奏：390px 应用框、三等分标签、52px 圆形头像、列表行高和胶囊按钮保持稳定；页面无横向溢出。
- 颜色与视觉变量：继续使用原项目白色表面、浅灰背景和橙色强调 token；标签与按钮状态对比明确。
- 图片质量与资源：列表使用真实远程图片并统一圆形裁切和轻量暖色光晕；头像内容使用 Zleap 演示数据，不要求逐项复刻参考人物。
- 文案与内容：联系人分类、搜索占位、关注状态、“去聊天”及 `Simiy的agent` 命名规则符合本轮标注。
- 图标与可访问性：返回、搜索沿用现有产品图标风格；标签使用 tab 语义和 `aria-selected`，搜索框与按钮均有可读标签。
- 搜索范围弹层：公共信息源呈现说明与真实 globe 图标资源；个人信息源支持“我的信息源 / 与我共享”、逐项勾选、全选/取消全选，确认按钮实时展示选中数量。弹层高度随内容收敛，公共、个人和共享状态均与参考比例一致。

**Primary interactions tested**

- 消息页“新建”进入联系人页并默认展示“关注”。
- 关注、助手、推荐三个标签切换。
- 关注与助手搜索过滤。
- 推荐列表“关注 / 已关注”状态切换。
- 助手列表“去聊天”，个人 Agent 进入 `Simiy的agent` 会话。
- Super Agent 推荐问题始终只出现在最新一条 Agent 回复下方；发送下一轮问题后旧推荐被清除。
- 返回消息页及各列表内部滚动。
- 搜索范围公共/个人分段切换。
- 我的信息源逐项选择、全选、取消全选与确认数量联动。
- 与我共享列表切换，保留跨子标签的总选中数量。
- 取消和关闭不提交草稿，确认后更新搜索范围摘要。
- 以上交互均在应用内浏览器完成，未出现页面脚本报错、失效控件或空白屏。

**Comparison history**

- Initial pass: 发现标签点击后出现额外橙色矩形焦点底色，且助手列表结束后的区域仍为白色；记录为 P2 视觉漂移。
- Fix: 将焦点反馈收敛为文字与选中下划线，列表剩余区域改为参考图的浅灰背景，并压缩列表行距和推荐页首间距。
- Final pass: 重新捕获关注、助手、推荐三个状态并生成合并对照图；此前 P2 已消除，无新的 P0/P1/P2。
- Search range initial pass: 固定高度让公共与共享状态出现过多空白，记录为 P2；改为随内容自适应高度并限制列表滚动区域。
- Search range final pass: 重新捕获公共、个人单选、个人全选和与我共享四种状态；弹层比例、橙色状态、按钮数量和列表结构均通过，无新的 P0/P1/P2。

**Follow-up Polish**

- 参考图与当前原型沿用不同状态栏时间和演示头像，这是已有产品框架与示例数据差异，不影响本次通讯录组件交付。

final result: passed
