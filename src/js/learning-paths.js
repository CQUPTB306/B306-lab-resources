// 学习路径同时用于文档目录、栏目导航和同主题前后页，避免三个入口各自排序。
const learningPaths = [
  { id: 'learning', title: '学习方法', intro: '先确定阶段目标，再练习独立验证和清楚提问。', items: [['undergraduate-plan', '本科生学习规划'], ['ai-learning', 'AI 时代怎么学习'], ['ai-humanities', '带文科同学认识 AI 与 Agent'], ['ask', '科学提问指南']] },
  { id: 'practice', title: '开发与协作', intro: '从本地文件和版本管理开始，完成一次贡献，再把实践整理成可复用的作品。', items: [['basics', '开发工具基础'], ['contribute', 'GitHub 与贡献入门'], ['growth', '整理自己的项目']] },
  { id: 'c-language', title: 'C 语言实践', intro: '新手先准备编译环境；阅读原始资料时，先看阶段规划和打卡说明，再做两轮练习。讲次编号保留原有链接与编排，不代表执行顺序。', items: [['c-start', 'C 语言学习起步'], ['c-roadmap', '第 01 讲 · 阶段规划'], ['c-checkin', '第 04 讲 · 打卡说明'], ['c-round1', '第 02 讲 · C 语言基础'], ['c-round2', '第 03 讲 · 数组与函数']] },
  { id: 'engineering', title: '嵌入式与智能系统', intro: '先建立系统视角，再理解 MCU 和反馈控制；具身智能与 AI 基础设施是两条可按兴趣选择的进阶方向。竞赛页帮助你将方向与实践任务对应。', items: [['embedded-history', '嵌入式的来龙去脉'], ['mcu-architecture', 'MCU 体系结构'], ['motion-control', '传统运动控制'], ['embodied-intelligence', '具身智能'], ['ai-infra', '从嵌入式到 AI 基础设施'], ['competitions', '学科竞赛与方向入门']] },
  { id: 'tools', title: '网络与 AI 工具', intro: '先理解网络访问、信息核验与 Agent 工作方式，再按使用场景选择工具。', items: [['tools', '网络与工具'], ['codex', 'Codex'], ['pi', 'pi 编码代理']] },
  { id: 'campus', title: '校园生活', intro: '从正式信息入口核对学业与生活事务，结合个人负荷安排课外实践。', items: [['cqupt-survival', '重庆邮电大学生存手册']] }
];

// 每页说明先备知识、阅读目标及完成后可检查的产出；均为本站学习建议。
const readingGuides = {
  'undergraduate-plan': { before: '适合正在安排学期目标的本科生，无需开发经验。', goal: '把长期方向拆成下一阶段能检查的小目标。', task: '写下本学期两个重点、每周可用时间和一次复盘日期；为每个重点写一个完成条件。', related: ['cqupt-survival', 'growth'] },
  'ai-learning': { before: '选一个正在学习的概念或练习，带着自己的初步尝试阅读。', goal: '分清得到答案、理解答案和独立验证的区别。', task: '选一条 AI 建议，写出验证依据；换一个输入或条件，再独立解释结果。', related: ['tools', 'ask'] },
  'ai-humanities': { before: '准备两篇公开且允许使用的短材料；不需要编程基础。', goal: '区分模型回答、Agent 工具行动与运行环境，并用原文证据核对输出。', task: '先用聊天助手做一次材料比较；若已具备 pi 环境，再用同一问题比较它的文件读取与工具记录。核对三项引文，标出一处遗漏或不确定之处。', related: ['ai-learning', 'tools', 'pi', 'ask'] },
  ask: { before: '准备问题发生时的输入、完整报错或观察记录。', goal: '把现象、猜测和请求分开，让他人能够参与排查。', task: '用问题模板写一份草稿，尝试只按草稿复现一次；解决后补上原因和验证结果。', related: ['contribute', 'ai-learning'] },
  basics: { before: '准备一个可自行创建文件的练习目录。', goal: '理解从编辑文件、运行命令到保存本地版本的关系。', task: '创建一份笔记，完成两次 Git 提交，用差异和日志说明两次版本改了什么。', related: ['c-start', 'ask'] },
  contribute: { before: '先熟悉文件、分支与本地提交；网页修订可以先跳过命令行。', goal: '按本站实际文件结构完成一次可审查的修改。', task: '修正一处已确认的问题，在 PR 中写清页面链接、来源、检查结果和未验证事项。', related: ['basics', 'ask'] },
  growth: { before: '手头已有一份练习、课程实践或团队项目记录。', goal: '让他人看懂项目用途、运行方法、验证结果和你的贡献。', task: '请一位未参与项目的同学按 README 操作；记下一处卡点并完成修订。', related: ['projects', 'contribute'] },
  'c-start': { before: '先能用编辑器保存文件，并在终端切换目录。', goal: '建立编辑、编译、运行、验证和记录的基本习惯。', task: '记录编译器版本、一次完整编译命令和运行结果；能区分编译错误与输出错误。', related: ['basics', 'ask'] },
  'c-roadmap': { before: '本页转述 2026 年原始规划；执行状态以当期正式通知为准。', goal: '识别阶段组成、知识范围、评分比例与尚未收录的材料。', task: '对照知识覆盖表，标出已经能解释、需要练习和尚无对应任务资料的内容。', related: ['recruit', 'c-start'] },
  'c-checkin': { before: '先看阶段规划，并区分通用说明与特定周次的例外。', goal: '了解原文件对笔记、答案、格式和评分的要求。', task: '分别检查笔记与答案格式；将日期冲突、命名和提交渠道问题留给当期通知核实。', related: ['recruit', 'ask'] },
  'c-round1': { before: '先完成编译环境准备，再阅读打卡说明。', goal: '通过原题练习基本类型、输入输出、表达式和流程控制。', task: '保留源码文本、运行记录及自己的说明；为编程题补充边界输入，解释预期与实际差异。', related: ['c-start', 'c-checkin', 'ask'] },
  'c-round2': { before: '应能独立编译程序、使用条件和循环，并解释基础输入输出。', goal: '练习数组、函数和字符串，关注数据边界与接口职责。', task: '为题目记录测试条件和结果，说明数组边界、字符串终止及原数据是否被修改。', related: ['c-roadmap', 'c-checkin', 'growth'] },
  'embedded-history': { before: '概览可直接阅读；动手练习需要 C 语言与基本电路知识。', goal: '从资源、时间和物理环境解释嵌入式系统的设计约束。', task: '为一个熟悉的设备画出输入、处理、输出与供电关系，列出断网或掉电后的行为。', related: ['c-start', 'mcu-architecture'] },
  'mcu-architecture': { before: '了解 C 语言变量与函数，以及电压、引脚和数字信号的基本概念。', goal: '沿数据和事件的路径理解处理器、存储器、外设与中断。', task: '选择一个定时器例程，在手册中找到时钟与引脚依据，记录预测周期和测量结果。', related: ['embedded-history', 'projects'] },
  'motion-control': { before: '先了解 MCU 定时采样；公式部分需要函数、变化率和积分的基本概念。', goal: '分清控制目标、反馈、执行器限制与实际测试条件。', task: '在仿真中一次改变一个条件，比较误差、超调与饱和；保留模型、参数和采样周期。', related: ['mcu-architecture', 'embodied-intelligence'] },
  'embodied-intelligence': { before: '先理解反馈控制；策略与训练部分可在具备机器学习基础后重读。', goal: '区分感知、状态估计、策略、控制和物理反馈的职责。', task: '为一个仿真任务列出观测、动作、成功标准和失败条件，并记录一次延迟变化的影响。', related: ['motion-control', 'ai-infra'] },
  'ai-infra': { before: '先了解嵌入式系统；动手对比服务需要基本 Linux 与网络知识。', goal: '沿数据路径比较设备、边缘和云的延迟、资源与维护代价。', task: '为一个推理任务记录输入规模、硬件、模型版本、延迟和内存，再说明断网时如何处理。', related: ['embedded-history', 'tools'] },
  competitions: { before: '先了解自己的基础和可用时间，无需先选定赛事。', goal: '按任务形态比较方向，区分能力热身与正式参赛要求。', task: '选一个方向，列出所需基础、一个热身项目，以及需要从当届通知核对的事项。', related: ['projects', 'undergraduate-plan'] },
  tools: { before: '先明确当前任务是查资料、配置开发环境，还是让 Agent 协助修改。', goal: '选对信息来源与工具，知道结果应如何验证。', task: '记录一次资料访问或工具试用的来源、环境与验证结果；遇到问题按层次缩小范围。', related: ['ai-learning', 'basics'] },
  codex: { before: '具备基础 Git 操作，准备一个可回退、不含敏感资料的项目。', goal: '按实际入口配置任务范围、检查修改并独立验证。', task: '完成一个小修改，逐项核对 diff、测试输出和任务验收条件。', related: ['tools', 'contribute'] },
  pi: { before: '能够使用终端、理解文件路径和 Git 差异。', goal: '理解终端编码代理与模型、工具和扩展之间的关系。', task: '先让 pi 解释一处代码并核对引用，再完成一个范围明确的修订和验证。', related: ['tools', 'basics'] },
  'cqupt-survival': { before: '准备自己的学院、专业、年级与学期信息。', goal: '从官方来源确认事项的适用对象、日期和办理要求。', task: '建立课程、图书馆和网络服务的官方书签，并把一个近期截止事项记入日历。', related: ['undergraduate-plan', 'recruit'] }
};
