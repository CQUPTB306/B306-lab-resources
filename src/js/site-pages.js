// 网站栏目与文档入口。未发布的内容用真实的空状态说明，不放虚构示例。
const sitePages = {
  home: {
    title: '首页', group: 'B306', layout: 'home',
    lead: 'CQUPT-B306 的学习文档、招新资料与成员记录。', toc: [],
    content: `
      <section class="home-hero" aria-labelledby="welcome-title">
        <div class="hero-copy">
          <p class="eyebrow">重庆邮电大学 · B306 实验室</p>
          <h1 id="welcome-title">CQUPT-B306</h1>
          <p class="hero-intro">从第一次编译，到一起完成项目。<br>让问题有记录，让经验可复用。</p>
          <a class="button hero-button" href="#/docs">开始学习 <span aria-hidden="true">→</span></a>
        </div>
        <a class="photo-credit" href="https://unsplash.com/@anniespratt" target="_blank" rel="noreferrer">配图：Annie Spratt / Unsplash · 非实验室实景</a>
      </section>
      <div class="home-content">
        <section class="home-shortcuts" aria-label="常用栏目">
          <a class="shortcut shortcut-teal" href="#/docs"><span class="shortcut-symbol" aria-hidden="true">⌂</span><strong>学习文档</strong><small>学习路径、练习与协作</small></a>
          <a class="shortcut shortcut-blue" href="#/recruit"><span class="shortcut-symbol" aria-hidden="true">▤</span><strong>招新与资料</strong><small>年度安排与 C 语言打卡</small></a>
          <a class="shortcut shortcut-coral" href="#/projects"><span class="shortcut-symbol" aria-hidden="true">⌘</span><strong>成员项目</strong><small>组织开源仓库与实践</small></a>
          <a class="shortcut shortcut-gold" href="#/contribute"><span class="shortcut-symbol" aria-hidden="true">↗</span><strong>参与贡献</strong><small>从修正一处文档开始</small></a>
        </section>
        <section class="home-intro" aria-labelledby="intro-title">
          <p class="eyebrow">为什么一起学习</p>
          <h2 id="intro-title">把学习、实践与交流连起来</h2>
          <p>第一次接触编程，先让程序在自己的电脑上运行；遇到问题，记录现象、查阅资料，再带着证据讨论；完成练习后，把方法和结果整理成他人也能使用的文档。</p>
          <p>AI 可以帮助解释概念、寻找线索和检查代码。理解原理、动手验证、交流取舍，仍是学习中的关键环节。B306 将学习指南、原始任务和公开项目放在一起，让每次实践都有起点，也能为后来者留下经验。</p>
          <p class="home-intro-links"><a href="#/docs">浏览学习文档 <span aria-hidden="true">→</span></a><a href="#/contribute">一起维护这份知识 <span aria-hidden="true">→</span></a></p>
        </section>
        <section class="home-archive" aria-labelledby="archive-title">
          <h2 id="archive-title"><a href="#/docs">学习文档</a></h2>
          <div class="home-columns">
            <div class="home-list">
              <h3>按你现在的目标开始</h3>
              <article class="home-list-item"><h4><a href="#/basics">第一次写程序：准备开发工具</a></h4><p>认识终端、编辑器与 Git，再进入 C 语言编译和练习。</p></article>
              <article class="home-list-item"><h4><a href="#/c-start">正在学 C：从运行到验证</a></h4><p>先准备环境，再读阶段规划、打卡要求和两轮原始任务。</p></article>
              <article class="home-list-item"><h4><a href="#/ask">遇到了问题：把卡点讲清楚</a></h4><p>写下目标、现象、尝试与证据；学习如何与同伴和 AI 协作。</p></article>
              <article class="home-list-item"><h4><a href="#/docs/嵌入式与智能系统">想选技术方向：从系统认识到实践</a></h4><p>了解嵌入式、MCU 与反馈控制，再探索具身智能、AI 基础设施和竞赛。</p></article>
              <article class="home-list-item"><h4><a href="#/growth">已有实践成果：整理项目与贡献</a></h4><p>写清运行方法与验证结果，用一次 Pull Request 分享可复用的经验。</p></article>
            </div>
            <aside class="home-archive-aside">
              <h3><a href="#/recruit">年度学习资料</a></h3>
              <p>已整理四份 C 语言原始资料的网页版本。先查看资料覆盖与待核实事项；其中日期和规则不代表当期招新通知。</p>
              <a href="#/recruit">浏览年度索引 <span aria-hidden="true">→</span></a>
              <div class="archive-placeholder"><h3>校园与实验室</h3><p><a href="#/cqupt-survival">校园生活指南</a>帮助你查找正式信息；<a href="#/undergraduate-plan">本科生学习规划</a>提供学期目标与复盘建议。</p><p><a href="#/about">关于 B306</a> · <a href="#/updates">实验室日常</a></p><p>实验室介绍和活动记录仍待成员补充，已收录的公开仓库可在<a href="#/projects">成员项目</a>中查看。</p></div>
            </aside>
          </div>
        </section>
      </div>`
  },
  docs: {
    title: '学习文档', group: '文档',
    lead: '按当前目标选择入口，再沿同一主题继续阅读。学习建议、原始任务和当期通知分别标明，方便按需查找。',
    toc: ['从哪里开始', ...learningPaths.map(path => path.title)],
    content: `<h2 id="从哪里开始">从哪里开始</h2>
      <p>第一次来，建议从<strong>开发工具 → C 语言实践 → 小项目 → 协作与分享</strong>开始。学习方法贯穿其中；遇到具体问题可直接跳到相应章节，无需按目录全部读完。</p>
      <div class="table-wrap"><table><thead><tr><th>你现在想做什么</th><th>从这里开始</th><th>读完后做什么</th></tr></thead><tbody>
      <tr><td>搭好环境，运行程序</td><td><a href="#/basics">开发工具基础</a> → <a href="#/c-start">C 语言学习起步</a></td><td>留下一次编译、运行与验证记录</td></tr>
      <tr><td>完成 C 语言阶段练习</td><td><a href="#/c-roadmap">阶段规划</a> → <a href="#/c-checkin">打卡说明</a> → <a href="#/c-round1">第一轮任务</a></td><td>按原题练习，核对格式与待确认事项</td></tr>
      <tr><td>解决卡点，使用 AI 辅助</td><td><a href="#/ask">科学提问</a> → <a href="#/ai-learning">AI 学习方法</a></td><td>提出可复现的问题，独立核验建议</td></tr>
      <tr><td>了解技术方向</td><td><a href="#/embedded-history">嵌入式概览</a> → <a href="#/mcu-architecture">MCU 体系结构</a></td><td>画出一个设备的数据与控制路径</td></tr>
      <tr><td>分享经验或修正文档</td><td><a href="#/growth">整理项目</a> → <a href="#/contribute">GitHub 贡献</a></td><td>提交一份有来源和验证说明的修订</td></tr>
      </tbody></table></div>
      <p>正在了解招新，请单独查看<a href="#/recruit">当期通知状态与年度资料索引</a>。以下按主题排列的条目包含学习建议；原始资料页另列来源，不据此推断新的课程或招新要求。</p>`
  },
  about: {
    title: '关于 B306', group: 'B306', layout: 'section',
    lead: '面向新成员的学习入口，也是成员共同维护的实践记录。', toc: [],
    content: `<section class="section-intro"><h2>这个网站用来做什么</h2><p>这里是 CQUPT-B306 的网站。目前主要收录学习指南、GitHub 贡献说明和 C 语言阶段资料，方便新成员查阅，也方便大家一起修订。</p><p>如果你第一次来，可以从<a href="#/docs">学习文档</a>开始。想看看组织里的仓库，可以访问 <a href="https://github.com/orgs/CQUPTB306/repositories" target="_blank" rel="noreferrer">CQUPTB306 的 GitHub 主页 ↗</a>。</p></section>
      <section class="empty-state"><span class="status-label">介绍待补充</span><h2>实验室的介绍，留给我们自己写</h2><p>这里预留给 B306 的方向、成员介绍和实验室照片。目前还没有整理好的介绍材料。</p><p class="muted">之后可以从一段简介、一张照片开始。</p></section>
      <div class="section-intro"><h2>一起维护</h2><p>发现一处错误、补充一道题的说明，或者写下自己的学习经验，都可以通过 Pull Request 提交。第一次操作可以参考<a href="#/contribute">贡献指南</a>。</p></div>`
  },
  projects: {
    title: '成员项目', group: 'B306', layout: 'section',
    lead: '来自 CQUPTB306 组织与成员个人账号的公开代码库、示例和工具。', toc: [],
    content: `<section class="section-intro"><h2>组织与成员公开仓库</h2><p>以下简介根据各仓库的公开说明整理，便于快速找到相关项目。代码、使用方法和维护状态可能变化，请打开仓库查看最新 README、Issue 与提交记录。</p><p>仓库公开不代表其中所有内容都可以任意转载或复用。请先确认对应许可证；未标注许可证时，不要默认拥有复制、修改或再发布权限。</p></section>
      <section class="section-intro"><h2>读项目时先看什么</h2><p>先从 README 确认目标平台、工具链、使用示例和许可，再选择一个可以独立验证的模块。阅读 STM32 或 MSPM0 库前，可先看<a href="#/mcu-architecture">MCU 体系结构</a>；了解 Nova 等项目的背景，可参考<a href="#/competitions">竞赛方向入门</a>。</p><p>复现时记录板卡、依赖版本、输入和结果。发现说明缺漏时按<a href="#/ask">提问模板</a>报告；准备分享自己的作品时，参考<a href="#/growth">项目整理指南</a>补齐运行步骤和验证记录。</p></section>
      <div class="repo-list" aria-label="CQUPTB306 组织与成员公开仓库">
        <article class="repo-item"><div class="repo-item-heading"><div class="repo-item-title"><img src="assets/projects/stm32-general.svg" alt=""><h2><a href="https://github.com/CQUPTB306/B306-STM32-GeneralLibs" target="_blank" rel="noreferrer">STM32 通用功能库</a></h2></div><span class="repo-tag">STM32 · C</span></div><p>实验室共享的 STM32 常用库。README 列出双缓冲 UART DMA 发送和 VOFA 等内容，并提供文档与示例目录。</p><p class="repo-meta">仓库：B306-STM32-GeneralLibs · MIT License · <a href="https://github.com/CQUPTB306/B306-STM32-GeneralLibs" target="_blank" rel="noreferrer">查看源码与说明 ↗</a></p></article>
        <article class="repo-item"><div class="repo-item-heading"><div class="repo-item-title"><img src="assets/projects/stm32-modules.svg" alt=""><h2><a href="https://github.com/CQUPTB306/B306-STM32-ModuleLibs" target="_blank" rel="noreferrer">STM32 模块库</a></h2></div><span class="repo-tag">STM32 · C</span></div><p>面向 STM32 项目的模块代码集合。README 以 OLED 菜单和屏幕驱动作为目录示例，并提供 Git sparse checkout 等获取方式。</p><p class="repo-meta">仓库：B306-STM32-ModuleLibs · MIT License · <a href="https://github.com/CQUPTB306/B306-STM32-ModuleLibs" target="_blank" rel="noreferrer">查看源码与说明 ↗</a></p></article>
        <article class="repo-item"><div class="repo-item-heading"><div class="repo-item-title"><img src="assets/projects/mspm0.svg" alt=""><h2><a href="https://github.com/CQUPTB306/B306-MSPM0-ModuleLibs" target="_blank" rel="noreferrer">TI MSPM0 模块与功能库</a></h2></div><span class="repo-tag">MSPM0 · C/C++</span></div><p>为 TI MSPM0 开发板整理的模块和功能库。仓库提示使用时注意区分 C 与 C++ 环境，遇到问题可通过 Issue 交流。</p><p class="repo-meta">仓库：B306-MSPM0-ModuleLibs · GPL-3.0 · <a href="https://github.com/CQUPTB306/B306-MSPM0-ModuleLibs" target="_blank" rel="noreferrer">查看源码与说明 ↗</a></p></article>
        <article class="repo-item"><div class="repo-item-heading"><div class="repo-item-title"><img src="assets/projects/cv-examples.svg" alt=""><h2><a href="https://github.com/CQUPTB306/B306-CV-Examples" target="_blank" rel="noreferrer">视觉代码示例</a></h2></div><span class="repo-tag">OpenMV · K230</span></div><p>计算机视觉代码示例，目前仓库简介提到 OpenMV 和 K230 平台。</p><p class="repo-meta">仓库：B306-CV-Examples · 页面未标明许可证 · <a href="https://github.com/CQUPTB306/B306-CV-Examples" target="_blank" rel="noreferrer">查看源码与说明 ↗</a></p></article>
        <article class="repo-item"><div class="repo-item-heading"><div class="repo-item-title"><img src="assets/projects/nova.svg" alt=""><h2><a href="https://github.com/CQUPTB306/Nova" target="_blank" rel="noreferrer">Nova 竞赛项目资料</a></h2></div><span class="repo-tag">竞赛项目</span></div><p>仓库说明包含 2026 普源精电杯 Capricorn 队伍内容，并列有省赛备赛资料目录；具体资料和进展以仓库为准。</p><p class="repo-meta">仓库：Nova · 页面未标明许可证 · <a href="https://github.com/CQUPTB306/Nova" target="_blank" rel="noreferrer">查看项目资料 ↗</a></p></article>
        <article class="repo-item"><div class="repo-item-heading"><div class="repo-item-title"><img src="assets/projects/thesis-skill.svg" alt=""><h2><a href="https://github.com/CQUPTB306/B306-cn-undergrad-thesis-skill" target="_blank" rel="noreferrer">本科毕业论文工作流 Skill</a></h2></div><span class="repo-tag">Codex · Claude Code</span></div><p>帮助 AI Agent 按阶段推进本科论文工作流，覆盖选题、开题、文献综述、实验计划、中期检查、正文和答辩准备；仓库提供安装与初始化说明。</p><p class="repo-meta">仓库：B306-cn-undergrad-thesis-skill · 页面未标明许可证 · <a href="https://github.com/CQUPTB306/B306-cn-undergrad-thesis-skill" target="_blank" rel="noreferrer">查看 Skill 与使用说明 ↗</a></p></article>
        <article class="repo-item"><div class="repo-item-heading"><div class="repo-item-title"><h2><a href="https://github.com/yifeistarwang-coder/FPGA-Multi-Mode-Interactive-System" target="_blank" rel="noreferrer">FPGA 多模式交互系统</a></h2></div><span class="repo-tag">Efinix · Verilog</span></div><p>基于 Efinix Trion T35F324 的多模式 FPGA 系统，整合摄像头采集、DDR3 帧缓存与 HDMI 显示，并支持笔迹绘制、绘图和实体井字棋等交互模式。</p><p class="repo-meta">仓库：FPGA-Multi-Mode-Interactive-System · 成员个人仓库 · <a href="https://github.com/yifeistarwang-coder/FPGA-Multi-Mode-Interactive-System" target="_blank" rel="noreferrer">查看源码与说明 ↗</a></p></article>
        <article class="repo-item"><div class="repo-item-heading"><div class="repo-item-title"><h2><a href="https://github.com/yifeistarwang-coder/RoboMotion-FPGA" target="_blank" rel="noreferrer">RoboMotion-FPGA 全向移动操作机器人</a></h2></div><span class="repo-tag">Xilinx · Verilog</span></div><p>面向 Xilinx FPGA 的机器人控制系统，包含四轮全向底盘、六自由度机械臂、CORDIC 逆运动学、多路 UART 控制及传感器和显示模块。</p><p class="repo-meta">仓库：RoboMotion-FPGA · 成员个人仓库 · <a href="https://github.com/yifeistarwang-coder/RoboMotion-FPGA" target="_blank" rel="noreferrer">查看源码与说明 ↗</a></p></article>
      </div>
      <p class="repo-org-link"><a href="https://github.com/orgs/CQUPTB306/repositories" target="_blank" rel="noreferrer">查看 CQUPTB306 当前全部公开仓库 ↗</a></p>`
  },
  updates: {
    title: '实验室日常', group: 'B306', layout: 'section',
    lead: '分享、讨论、活动，还有值得记下来的一些小事。', toc: [],
    content: `<section class="empty-state"><span class="status-label">待补充</span><h2>第一篇记录，还在等大家来写</h2><p>这里还没有发布活动或日常记录。以后可以放技术分享的笔记、活动回顾，以及经过同意公开的照片。</p></section>
      <section class="section-intro"><h2>记录一次分享或实践</h2><p>一篇记录回答五件事：何时发生、讨论什么、得出什么结论、有哪些讲义或代码、还有什么未解决。注明分享者认可的署名方式和资料来源；经验性的结论同时写明适用环境。</p><p>技术说明可整理进<a href="#/docs">对应学习栏目</a>，可复现的作品收录到<a href="#/projects">成员项目</a>，活动页保留日期、摘要与关联链接，方便后续查找。</p><p>想补充内容，可以参考<a href="#/contribute">贡献指南</a>。照片和涉及他人的文字，公开前先征得本人同意。</p></section>`
  }
};
