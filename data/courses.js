const COURSES = {
 
  // ── Mini 低年級 ─────────────────────────────────
  mini: [
    {
      id: 'ai-cartoon-mv',
      name: 'AI 趣味卡通 MV 製作營',
      isNew: true,
      category: 'mini',
      tagline: '讓孩子用 AI 當導演，打造一支專屬的卡通 MV！',
      ageGroup: '幼稚園大班到國小三年級',
      intro: '這堂課專為低年級的小創作者設計。孩子們不需要任何程式基礎，只要說出自己喜歡的故事主題，就能借助 AI 工具寫出歌詞、創作音樂，並生成專屬的動畫畫面。從發想故事到完成一支完整的卡通 MV，每個孩子都會在五天內體驗「我做到了！」的成就感。最後一天的成果發表會，爸爸媽媽也可以一起欣賞孩子的作品！',
      takeaway: '一支完整的卡通 MV 影片檔（可分享給家人朋友）',
      scheduleImg: ['assets/images/schedules/W1/Mini.png','assets/images/schedules/W6/Mini.png'],
      days: [
        { title: '主題發想日', points: ['暖身活動', '故事與主題發想', 'AI 歌詞創作'] },
        { title: '音樂魔法日', points: ['認識音樂元素', '曲風挑選', 'AI 音樂製作'] },
        { title: '動畫製作日', points: ['卡通角色設定', '收集動畫素材', 'AI 生成 MV 畫面'] },
        { title: '剪輯工坊日', points: ['分鏡與排序', '基礎影片剪輯', '字幕與特效'] },
        { title: '首映典禮日', points: ['音畫同步', '封面與標題', '成果發表會'] },
      ]
    },
    {
      id: 'mc-jurassic',
      name: '麥塊侏儸紀公園冒險營',
      isNew: false,
      category: 'mini',
      tagline: '在 Minecraft 的侏儸紀世界裡，用紅石機關打造你的恐龍樂園！',
      ageGroup: '幼稚園大班到國小三年級',
      intro: '孩子們將踏入 Minecraft 的侏儸紀世界，化身恐龍公園的建築師與工程師。五天的課程中，孩子們不只是蓋房子，更要學習用「紅石電路」來做出會自動開關的大門、恐龍飼養機關，以及各種驚險的陷阱裝置。課程最後，全班可以互相參觀彼此的恐龍公園，體驗這場紅石與恐龍的大冒險！',
      takeaway: '完整的侏儸紀公園 Minecraft 地圖存檔',
      scheduleImg: ['assets/images/schedules/W2/Mini.png','assets/images/schedules/W7/Mini.png'],
      days: [
        { title: '叢林探索日', points: ['初探神秘叢林', '發現隱藏機關', '開啟冒險之門'] },
        { title: '恐龍棲地日', points: ['打造奇特環境', '認識特殊生物', '探索未知區域'] },
        { title: '危機應變日', points: ['應對突發事件', '設計自動系統', '保障園區安全'] },
        { title: '機關設計日', points: ['設計互動機關', '建構驚險裝置', '體驗侏儸紀樂趣'] },
        { title: '公園開幕日', points: ['整合所有建設', '優化紅石機關', '開放探險體驗'] },
      ]
    },
    {
      id: 'mc-mars',
      name: '麥塊火星探險營',
      isNew: false,
      category: 'mini',
      tagline: '搭上火箭，在 Minecraft 的火星上建立生存基地！',
      ageGroup: '幼稚園大班到國小三年級',
      intro: '這是一場充滿挑戰的太空冒險！孩子們將以太空人的身分降落在 Minecraft 的火星世界，在資源有限的環境中，學習運用「日光感測器」製作太陽能板、建造食物儲存系統，並完成各種紅石工程。課程設計循序漸進，每天都有新的任務等待挑戰，讓孩子在玩中學會邏輯思考與問題解決的能力。',
      takeaway: '完整的火星生存基地地圖存檔',
      scheduleImg: ['assets/images/schedules/W3/Mini.png','assets/images/schedules/W8/Mini.png'],
      days: [
        { title: '火星登陸日', points: ['部署基地', '製作太陽能板', '合成台操作'] },
        { title: '生存補給日', points: ['邏輯閘學習', '紅石元件', '打造食物儲存器'] },
        { title: '資源開採日', points: ['開採建築材料', '學習訊號延長器', '冒險任務'] },
        { title: '基地防衛日', points: ['建造防禦砲台', '探索史萊姆世界', '火星大探險'] },
        { title: '任務完成日', points: ['作品分享', '成果發表', '密室探險任務'] },
      ]
    },
    {
      id: 'mc-ocean',
      name: '麥塊海底世界營',
      isNew: false,
      category: 'mini',
      tagline: '潛入 Minecraft 的深海，打造一座壯觀的海底城市！',
      ageGroup: '幼稚園大班到國小三年級',
      intro: '帶著孩子一起潛入 Minecraft 的神秘深海！從搭建第一個水下艙房開始，一步步打造出充滿創意的海底城市——包括水下音樂廳、珊瑚礁照明系統、甚至是潛水艇模擬器！課程融入海洋生態知識，讓孩子在建造的過程中，同時認識真實海洋世界的奧秘，培養對環境保護的意識。',
      takeaway: '一個包含自導自演機關的 Minecraft 角色扮演遊戲地圖存檔',
      scheduleImg: ['assets/images/schedules/W4/Mini.png','assets/images/schedules/W9/Mini.png'],
      days: [
        { title: '深海潛入日', points: ['海底生存基礎', '學習水下呼吸', '水下基地建設'] },
        { title: '海底建設日', points: ['打造水下音樂廳', '建造海流快速通道', '設置水下生物觀察站'] },
        { title: '科技裝置日', points: ['建造水下防衛系統', '製作潛水艇模擬器', '設計水下礦車系統'] },
        { title: '生態守護日', points: ['打造珊瑚礁照明系統', '建造魚群收集器', '設計自動海藻農場'] },
        { title: '海底城市開幕日', points: ['完成海底城市全貌', '成果發表與分享', '頒獎典禮'] },
      ]
    },
    {
      id: 'mc-maze',
      name: '麥塊迷宮大師營',
      isNew: false,
      category: 'mini',
      tagline: '設計一座讓同學又愛又怕的 Minecraft 密室逃脫遊戲！',
      ageGroup: '幼稚園大班到國小三年級',
      intro: '這堂課最好玩的地方，就是孩子不只是「玩遊戲」，更要「設計遊戲」！在五天的課程中，孩子們將從零開始，學習如何運用紅石機關設計一座充滿邏輯謎題、隱藏房間和陷阱的密室逃脫遊戲。完成後，全班互相挑戰彼此的密室，最刺激的設計會得到全班票選第一！',
      takeaway: '一座可以讓同學實際遊玩的密室逃脫地圖',
      scheduleImg: ['assets/images/schedules/W5/Mini.png'],
      days: [
        { title: '迷宮入門日', points: ['認識密室逃脫', '建造大廳與起點', '學習基礎紅石運用'] },
        { title: '機關工程日', points: ['搭建入口機關', '製作活塞門與邏輯閘', '規劃地下迷宮空間'] },
        { title: '密碼解鎖日', points: ['設計複雜迷宮路徑', '製作閃爍紅石燈光', '設置按鈕密碼門'] },
        { title: '進階挑戰日', points: ['學習記憶電路', '製作複雜密碼門', '裝飾場景並加入陷阱'] },
        { title: '迷宮競賽日', points: ['全班展示密室逃脫作品', '互相挑戰彼此的迷宮', '頒獎與合影紀念'] },
      ]
    },
  ],
 
  // ── Minecraft ────────────────────────────────────
  minecraft: [
    {
      id: 'mc-frozen',
      name: '麥塊冰凍星球營',
      isNew: false,
      category: 'minecraft',
      tagline: '成為極地探險隊的一員，在最嚴酷的冰凍世界建造功能完整的極地研究站！',
      ageGroup: '國小 3 年級以上',
      intro: '你準備好成為極地探險隊的一員了嗎？這堂課將帶孩子進入 Minecraft 最嚴酷的環境——冰凍星球！課程結合極地生態知識、紅石機關邏輯與建築設計，是一場真正的跨域學習之旅。孩子們將在雪原上打造功能強大的「極地研究站」，學習用紅石製作門禁系統、融冰警報裝置與動物觀察平台。更特別的是，課程透過模擬極地退冰情境，帶孩子深入理解極圈生態與氣候變遷的影響——不只學邏輯思維，也學會關心我們的地球環境！',
      takeaway: '完整的極地研究站 Minecraft 地圖存檔',
      scheduleImg: ['assets/images/schedules/W5/MC.png'],
      days: [
        { title: '極地降落日', points: ['認識冰凍星球世界觀', '極地建築美學與設計概念', '建造雪原生存基地'] },
        { title: '能源建設日', points: ['紅石基礎電路', '極地資源管理系統', '模擬退冰環境情境'] },
        { title: '極限考驗日', points: ['挑戰極圈生存任務', '製作進階紅石機關', '設計自動化陷阱防禦系統'] },
        { title: '研究站建設日', points: ['極圈研究任務', '模組化建築設計', '建設極地研究站'] },
        { title: '冰雪城市日', points: ['連動紅石系統', '設計冰雪城市全貌', '成果發表與探險隊結業典禮'] },
      ]
    },
    {
      id: 'mc-youtuber',
      name: '麥塊 YouTuber 養成營',
      isNew: false,
      category: 'minecraft',
      tagline: '學當 Minecraft 實況主，從零開始打造自己的 YouTube 頻道！',
      ageGroup: '國小 3 年級以上',
      intro: '你家孩子喜歡看 Minecraft YouTuber 嗎？這堂課讓他們親自體驗！從頻道主題規劃、遊戲實況錄製，到影片剪輯和縮圖設計，孩子們將走完一個 YouTuber 的完整工作流程。不只是玩遊戲，更要學會如何說故事、如何讓觀眾看得入迷。課程結束時，每位孩子都將擁有一支屬於自己的頻道首播影片！',
      takeaway: '一個完整的 Minecraft 麥塊 YouTuber 頻道概念影片片段（1-2 分鐘）',
      scheduleImg: ['assets/images/schedules/W1/MC.png','assets/images/schedules/W9/MC.png'],
      days: [
        { title: '頻道定位日', points: ['認識影片創作流程', '發想主題與腳本', '錄製與初剪'] },
        { title: '剪輯升級日', points: ['練習鏡頭切換', '製作開場動畫與縮圖', '加入文字與字幕設計'] },
        { title: '音效工坊日', points: ['應用音樂與音效', '剪輯遊戲片段', '強化影片節奏感'] },
        { title: '紅石與短影片創作日', points: ['建造紅石機關並拍攝', '認識短影片格式', '練習快速剪輯技巧'] },
        { title: '頻道開播日', points: ['完成個人作品', '成果發表', '頒發證書'] },
      ]
    },
    {
      id: 'mc-apocalypse',
      name: '麥塊末日生存工程營',
      isNew: true,
      category: 'minecraft',
      tagline: '末日來臨！在 Minecraft 荒廢世界中靠著工程技術生存下去！',
      ageGroup: '國小 4 年級以上',
      intro: '這是一堂充滿緊張感的工程挑戰課！世界末日降臨，資源嚴重不足，孩子們必須在有限的條件下，建造自動化農場、設計防禦工事，並打造能源系統才能存活。課程每天都有「生存評分」，讓孩子在競賽的氛圍中主動思考策略。最後一天的全班攻防大作戰，更是整個課程的高潮！',
      takeaway: '完整的海底觀光潛水艇地圖存檔',
      scheduleImg: ['assets/images/schedules/W2/MC.png','assets/images/schedules/W6/MC.png'],
      days: [
        { title: '末日求生日', points: ['認識末日世界規則', '快速搭建避難所', '學習如何排定資源優先順序'] },
        { title: '農場工程日', points: ['建造自動化農場', '設計水流收割系統', '解決糧食危機'] },
        { title: '攻防演練日', points: ['建造防禦工事', '設計怪物陷阱', '模擬夜間攻城事件'] },
        { title: '能源工程日', points: ['建立紅石能源系統', '升級自動化生產線', '挑戰資源效率競賽'] },
        { title: '末日決戰日', points: ['生存成績發表', '全班互攻防守大作戰', '票選最強末日基地'] },
      ]
    },
    {
      id: 'mc-modding',
      name: '麥塊程式建模營',
      isNew: false,
      category: 'minecraft',
      tagline: '用程式思維在 Minecraft 裡打造自動化系統，讓建築更聰明！',
      ageGroup: '國小 4 年級以上',
      intro: '這堂課專為對程式設計有興趣的孩子設計。不同於一般的 Minecraft 建築課，這裡的孩子要學習「模組化設計」的概念——把建築拆解成可以重複使用的單元，再用指令方塊和程式邏輯讓建築「自己動起來」。課程從簡單的條件判斷開始，循序漸進到迴圈、觸發事件，讓孩子在有趣的遊戲情境中，真正理解程式設計的核心概念。',
      takeaway: '模組化自動化建築系統作品存檔',
      scheduleImg: ['assets/images/schedules/W3/MC.png','assets/images/schedules/W7/MC.png'],
      days: [
        { title: '認識MCreator', points: ['紅石觸發器', '建立模組工具', '設計模組方塊'] },
        { title: '裝備升級', points: ['麥塊裝甲大師', '導入 Minecraft Forge'] },
        { title: '模型建立', points: ['創造NPC', '角色行為設定', '成為創世神'] },
        { title: '麥塊車神', points: ['載具大躍進', '交通工具設定'] },
        { title: '掌控世界', points: ['產生粒子特效', '開發遊戲指令', '建立道具合成配方'] },
      ]
    },
    {
      id: 'mc-rpg',
      name: '麥塊 RPG 創世工程營',
      isNew: true,
      category: 'minecraft',
      tagline: '用 MCreator 工具，從零打造一款屬於自己的 Minecraft RPG 遊戲模組！',
      ageGroup: '國小 5 年級以上，有 Minecraft 遊戲經驗',
      intro: '這是一堂進階的 Minecraft 課程，適合已經玩過 Minecraft 的孩子。孩子們將使用專業的免費工具「MCreator」，設計一個完整的 RPG 模組——包含自訂的異世界維度、隨機生成的地牢、可以對話的 NPC 角色和任務系統。完成後，每位孩子都能把自己的模組裝進 Minecraft，讓同學一起玩！',
      takeaway: '可安裝的 .jar 格式 RPG 遊戲模組檔案',
      scheduleImg: ['assets/images/schedules/W4/MC.png','assets/images/schedules/W8/MC.png'],
      days: [
        { title: '異世界誕生日', points: ['認識 MCreator 進階功能', '設計 RPG 世界觀與主題', '建立天空、地形、光照'] },
        { title: '地牢工程日', points: ['設計地牢與神殿結構', '設定隨機生成的條件', '遊戲測試探索體驗'] },
        { title: '任務設計日', points: ['製作 NPC 角色', '設定任務對話與觸發邏輯', '串連完整遊戲流程'] },
        { title: '系統整合日', points: ['建立自訂操作介面', '整合維度、結構與任務系統', '全面測試調整'] },
        { title: 'RPG 發布日', points: ['互相挑戰地牢', '發表世界設計理念', '票選最強地牢'] },
      ]
    },
  ],
 
  // ── Roblox ──────────────────────────────────────
  roblox: [
    {
      id: 'roblox-racing',
      name: 'Roblox 賽車宇宙開發營',
      isNew: true,
      category: 'roblox',
      tagline: '化身賽車工程師，用 AI 和程式設計打造專屬的宇宙賽車遊戲！',
      ageGroup: '國小 4 年級以上',
      intro: '這不只是一堂遊戲課，更是一堂結合美感、工程與邏輯思考的設計課！孩子們將化身賽車工程師，使用 AI 工具生成獨一無二的 3D 車體零件，再親手設計充滿機關與陷阱的賽道，最後用程式把全班的賽道串連成一個完整的賽車宇宙。',
      takeaway: '一個完整的 Roblox 賽車遊戲地圖，包含賽道與可修改性能的跑車',
      scheduleImg: ['assets/images/schedules/W2/Roblox.png','assets/images/schedules/W7/Roblox.png'],
      days: [
        { title: '夢幻車體日', points: ['AI 生成 3D 車體模型', '匯入引擎', '組裝夢幻賽車'] },
        { title: '極限賽道日', points: ['賽道物理學原理', '從平地到立體跑道的設計', '測試賽車在不同地形的表現'] },
        { title: '道具魔法日', points: ['製作加速板', '製作香蕉皮機關', '設計彈跳板'] },
        { title: '競速系統日', points: ['製作計時器與圈數判定系統', '設計終點結算機制', '設計防作弊系統'] },
        { title: '賽車大賽日', points: ['賽道聯合測試', '賽車極速大賽', '分享學習心得與成果'] },
      ]
    },
    {
      id: 'roblox-tycoon',
      name: 'Roblox 商業帝國實戰營',
      isNew: true,
      category: 'roblox',
      tagline: '想開一間夢想中的店嗎？用程式把它做出來，當個小 CEO！',
      ageGroup: '國小 3 年級以上',
      intro: '「想開一家夢想中的店嗎？那就用程式把它做出來！」這堂課讓孩子從零開始，打造屬於自己的 Roblox 經營遊戲。孩子們將學習如何設計自動化生產線、建立遊戲內的經濟循環，還要用 AI 生成獨特的產品模型。課程最後舉辦「商業博覽會」，全班的作品串聯在一起，體驗當老闆的成就感！',
      takeaway: '一個完整的 Roblox 商業商店地圖，包含所有經營邏輯、貨幣系統',
      scheduleImg: ['assets/images/schedules/W1/Roblox.png','assets/images/schedules/W6/Roblox.png'],
      days: [
        { title: '商業藍圖日', points: ['熟悉 Roblox Studio 介面', 'AI 生成專屬產品 3D 模型', '建立自動化生產核心機制'] },
        { title: '工廠建設日', points: ['學習按鈕依賴與觸發邏輯', '規劃自動化生產動線', '搭建工廠建築與設施'] },
        { title: '經濟設計日', points: ['製作產品升級器', '設計多階層產品與掉落機制', '調整定價與遊戲經濟平衡'] },
        { title: '體驗優化日', points: ['設定環境光影與天空盒', '製作 NPC 對話與互動系統', '優化遊戲介面與數值顯示'] },
        { title: '商業博覽會', points: ['製作商業大廳', '遊戲發布', '舉辦營收比賽'] },
      ]
    },
    {
      id: 'roblox-lua',
      name: 'Roblox Lua 程式開發營',
      isNew: false,
      category: 'roblox',
      tagline: '不只玩 Roblox，更要學會用 Lua 程式語言設計自己的遊戲！',
      ageGroup: '國小 4 年級以上',
      intro: '這堂課讓孩子從「玩遊戲」升級到「做遊戲」！孩子們將學習 Roblox 平台使用的真實程式語言「Lua」，從設定遊戲關卡的參數、讓 NPC 說話，到打造飛行船、設計特殊地形，每一個功能都透過真實的程式碼來實現。對程式設計有興趣的孩子，這堂課會讓他們第一次感受到「寫出來的程式，真的跑起來了！」的驚喜。',
      takeaway: '一個結合 AI 生成場景與互動腳本的 Roblox 元宇宙地圖',
      scheduleImg: ['assets/images/schedules/W5/Roblox.png'],
      days: [
        { title: '忍者地圖日', points: ['忍者地圖設計', '認識 Lua', '關卡程式設定'] },
        { title: '動畫製作日', points: ['製作過場動畫效果', '使用地形編輯器', '創造 NPC 角色'] },
        { title: '創意建造日', points: ['打造飛行船場景', '應用資源包', '設定遊戲操作介面'] },
        { title: '程式進階日', points: ['岩漿區域參數設定', '進階 Lua 指令應用', '物件造型設計'] },
        { title: '遊戲發布日', points: ['建造專屬的完整遊戲世界', '合作完成最終挑戰', '成果發表與分享'] },
      ]
    },
    {
      id: 'roblox-multiverse',
      name: 'Roblox AI 多元宇宙營',
      isNew: false,
      category: 'roblox',
      tagline: '結合 AI 技術與 Roblox，打造一個充滿驚喜的多人遊戲世界！',
      ageGroup: '國小 3 年級以上',
      intro: '這堂課帶孩子進入遊戲開發的神奇世界！從學習 Roblox Studio 的基礎操作開始，到結合 AI 自動生成程式腳本，孩子們將一步步打造出能讓朋友一起上線玩的多人遊戲。課程中也會介紹網路安全與帳號保護的概念，讓孩子在學習程式的同時，也懂得如何保護自己的數位安全。',
      takeaway: '完整可玩的 Roblox 多人遊戲連結',
      scheduleImg: ['assets/images/schedules/W4/Roblox.png','assets/images/schedules/W9/Roblox.png'],
      days: [
        { title: '宇宙建構日', points: ['遊戲環境設計入門', '學習帳號安全管理觀念', '建立基礎遊戲場景'] },
        { title: '多人連線日', points: ['多人遊戲開發概念', '動態物件的應用', '基礎程式指令操作'] },
        { title: 'AI 程式日', points: ['資料加密基礎概念', '設計互動機制', '嘗試簡單的 AI 腳本'] },
        { title: '介面設計日', points: ['物件分類與管理技巧', '調整遊戲操作介面', '加入視覺特效'] },
        { title: '多元宇宙日', points: ['場景連結與整合技術', '加入魔法裝置互動功能', '專案成果發表'] },
      ]
    },
    {
      id: 'roblox-triathlon',
      name: 'Roblox 鐵人三項營',
      isNew: false,
      category: 'roblox',
      tagline: '設計游泳、賽車、跑酷三大關卡，打造一場 Roblox 鐵人三項競賽！',
      ageGroup: '國小 4 年級以上',
      intro: '孩子們將從零開始，用 Roblox Studio 打造一款包含三個主要關卡的完整競賽遊戲：游泳、賽車與跑酷。不只是蓋場景，還要學習角色動畫製作、水域物理設定、車輛控制機制等進階功能，最後加入多人競賽模式，讓同學可以一起線上較量。',
      takeaway: '完整可玩的 Roblox 鐵人三項競賽遊戲連結',
      scheduleImg: ['assets/images/schedules/W3/Roblox.png','assets/images/schedules/W8/Roblox.png'],
      days: [
        { title: '場景設計日', points: ['場景設計入門', '遊戲物件調整方式', '建立基礎互動機制'] },
        { title: '動畫工坊日', points: ['動畫編輯器的應用', '設計角色互動效果', '加入視覺特效'] },
        { title: '水域工程日', points: ['設定水域環境物理', '設計角色動作觸發', '規劃時間與路徑機制'] },
        { title: '賽車工程日', points: ['製作車輛控制系統', '場地建置與細節調整', '動態變化設計'] },
        { title: '鐵人競賽日', points: ['加入多人比賽設定', '遊戲最終細節調整', '作品展示與正式發布'] },
      ]
    },
  ],
 
  // ── AI / 其他 ────────────────────────────────────
  ai: [
    {
      id: 'ai-film',
      name: 'AI 電影導演營',
      isNew: true,
      category: 'ai',
      tagline: '用 AI 工具當導演，從劇本到成片，親手完成一部屬於自己的短片！',
      ageGroup: '國小 4 年級以上',
      intro: '這堂課讓孩子化身真正的電影導演！從撰寫劇本、規劃分鏡，到用 AI 工具生成場景圖像、配上 AI 配音，再剪輯成一部完整的短片——每一個步驟都由孩子親自決定。不需要攝影機，不需要演員，只需要一台電腦和豐富的想像力。最後一天舉辦班內電影首映會，讓每位小導演的作品在大家面前閃亮登場！',
      takeaway: '一組完整的 AI 電影短片 (mp4) 與分鏡表圖檔',
      scheduleImg: ['assets/images/schedules/W1/AI.png','assets/images/schedules/W5/AI.png','assets/images/schedules/W9/AI.png'],
      days: [
        { title: '劇本工坊日', points: ['學習三幕式劇本結構', '用 AI 輔助構思故事大綱', '確立影片主題與風格'] },
        { title: '分鏡設計日', points: ['製作分鏡腳本', '用 AI 生成場景圖像素材', '學習基本鏡頭語言與構圖'] },
        { title: '素材製作日', points: ['用 AI 生成旁白與角色配音', '操作 AI 影像生成工具', '完成主要場景素材收集'] },
        { title: '剪輯工坊日', points: ['進行影片剪輯與素材組合', '加入字幕、背景音樂與片頭', '完成影片初版'] },
        { title: '首映典禮日', points: ['完成最終剪輯版本', '舉辦班內電影首映會', '票選最佳導演獎'] },
      ]
    },
    {
      id: 'ai-youtuber',
      name: '短影片創作—教學型 YouTuber 篇',
      isNew: true,
      category: 'ai',
      tagline: '孩子化身「小老師」，把自己的拿手絕活拍成一支教學短片！',
      ageGroup: '國小 3 年級以上',
      intro: '這堂課最特別的地方，是每個孩子都可以選擇自己最拿手的事情來教別人——可以是摺紙、魔術、遊戲攻略，甚至是任何生活技能！孩子們將學習如何規劃教學內容、練習鏡頭前的口語表達，並用 AI 工具自動生成字幕和片頭動畫，完成一支專業感十足的教學影片。',
      takeaway: '一支精剪完成的教育型主題影片 (1080p, 60fps)，可用於經營作品集',
      scheduleImg: ['assets/images/schedules/W2/AI.png','assets/images/schedules/W6/AI.png'],
      days: [
        { title: '頻道定位日', points: ['認識教學型影片', '分析熱門 YouTuber 風格', '決定教學主題'] },
        { title: '拍攝練習日', points: ['撰寫教學腳本與步驟', '口語表達與鏡頭前的自信', '拍攝第一段試鏡片段'] },
        { title: 'AI 製作日', points: ['AI 生成影片字幕', '重點文字標注技巧', 'AI 生成片頭動畫'] },
        { title: '正式拍攝日', points: ['完整拍攝教學影片', '剪輯節奏優化', '設計片尾 Q&A 環節'] },
        { title: '播映發表日', points: ['完成正式教學影片', '全班播映、互相學習', '票選最想學習的教學主題'] },
      ]
    },
    {
      id: 'ai-drawing',
      name: 'AI 繪圖大師班',
      isNew: true,
      category: 'ai',
      tagline: '學會精準指揮 AI 作畫，最後集結成一本屬於自己的數位畫冊！',
      ageGroup: '國小 3 年級以上',
      intro: '這堂課不只是叫 AI 畫圖，而是讓孩子真正學會「跟 AI 溝通」的技術！透過「提示詞工程」，孩子將一步步學習如何用精準的文字描述，控制 AI 畫出腦海中的畫面——想要什麼構圖、光線、風格，都能精準呈現。五天下來，每位孩子將累積一系列原創作品，並在最後一天親手編排成一本精美的數位畫冊 PDF，可以用手機傳給家人朋友！',
      takeaway: '一本精美的個人數位畫冊 PDF',
      scheduleImg: ['assets/images/schedules/W3/AI.png','assets/images/schedules/W7/AI.png'],
      days: [
        { title: '提示詞魔法日', points: ['提示詞的魔法語言', '認識場景的組成', '對比實驗'] },
        { title: '角色設計日', points: ['打造原創角色', '設計角色外型、服裝與表情', '完成多姿勢圖鑑'] },
        { title: '風格探索日', points: ['場景與風格的掌控', '指定藝術風格', '打造角色的不同故事視覺'] },
        { title: '排版工坊日', points: ['圖稿精修與畫冊排版', '學習去背、調色、加文字等後製技巧', '設計封面、目錄與作品說明頁'] },
        { title: '策展發表日', points: ['完成數位畫冊 PDF', '佈置班級線上策展'] },
      ]
    },
    {
      id: 'ai-vtuber',
      name: 'AI 虛擬主播創作營',
      isNew: true,
      category: 'ai',
      tagline: '用 AI 打造一位專屬的虛擬主播，從外觀到聲音全都自己決定！',
      ageGroup: '國小 4 年級以上',
      intro: '你就是未來媒體人！本課程教導學生運用 AI 技術，製作專業級的虛擬主播新聞影片。學生將學習定義新聞議題、撰寫結構化的播報腳本，並指揮 AI 生成虛擬主播、配圖及語音。這不僅是影音製作，更是訓練資訊整理、邏輯敘事和媒體呈現的實戰課程。',
      takeaway: '一個完整的虛擬主播角色設定模型與一段 VTuber 直播示範影片動畫',
      scheduleImg: ['assets/images/schedules/W4/AI.png','assets/images/schedules/W8/AI.png'],
      days: [
        { title: '新聞主題與結構解析', points: ['新聞範例分析', '主題選擇', 'AI 腳本初稿'] },
        { title: '腳本優化與主播人設', points: ['優化新聞語氣', '主播角色設定', 'AI 圖像生成'] },
        { title: '虛擬主播與資訊圖卡生成', points: ['AI 主播影片生成', 'AI 配圖生成'] },
        { title: '視覺輔助與音效', points: ['字幕與標題', '音效與片頭'] },
        { title: '新聞發佈日', points: ['完成首播影片', '舉辦全班播映欣賞會', '票選年度最佳虛擬主播'] },
      ]
    },
  ],
 
};