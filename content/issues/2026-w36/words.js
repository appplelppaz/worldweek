/* WORDS — 今週の20語 × 4言語
   記事を読む時間がなくても、ここだけで学べるように独立させた語彙リスト。
   kind: '単語' | '熟語'    say: 読み上げに渡す文字列（term と違う場合のみ） */
WGL.registerWords({

/* ══════════════════ ENGLISH ══════════════════ */
en: [
  { term: 'cool', kind: '単語', pos: 'adj.', ja: '（反応が）冷ややかな、乗り気でない',
    note: '⚠️「涼しい」でも「かっこいい」でもありません。reception / response / welcome と結びつくと「熱意がない」。日本人が最も誤読しやすい多義語のひとつです。',
    examples: [{ o: 'The proposal got a cool reception.', j: 'その提案は冷ややかに受け止められた。' }] },

  { term: 'ease', kind: '単語', pos: 'v.',  ja: '（痛み・圧力・下落が）和らぐ、緩む',
    note: '金融記事では「下げ幅が縮小する」の意味で頻出。主語が losses なら「損失が和らぐ」＝回復方向です。他動詞なら「ゆるめる」。',
    examples: [{ o: 'Inflation eased for the third month.', j: 'インフレは3か月連続で鈍化した。' }] },

  { term: 'as much as', kind: '熟語', pos: 'phrase', ja: '〜も（の多さ）',
    note: '数値の前に置いて「その数字は大きい」という驚きを添えます。数えられる名詞なら as many as。fell 10% は事実、fell as much as 10% は「10%も」。',
    examples: [{ o: 'Shares fell by as much as 10%.', j: '株価は一時10%も下落した。' }] },

  { term: 'set your sights on', kind: '熟語', pos: 'idiom', ja: '〜に狙いを定める',
    note: 'sight は射撃の「照準」。目標が明確で本気だ、という語感があります。set your sights high／low で目標の高さも表せます。',
    say: 'set your sights on',
    examples: [{ o: 'She has set her sights on Paris.', j: '彼女はパリに狙いを定めている。' }] },

  { term: 'run into', kind: '熟語', pos: 'phrasal v.', ja: '（問題）に直面する／（人に）ばったり会う',
    note: '「ぶつかる」が原義。run into trouble / difficulties / opposition。日常会話では「偶然会う」の意味でも非常によく使います。',
    examples: [{ o: 'The plan ran into opposition.', j: 'その計画は反対にぶつかった。' }] },

  { term: 'rock-bottom', kind: '単語', pos: 'adj.', ja: '（値段が）どん底の、これ以上ない安さの',
    note: '岩の底、が原義。名詞では hit rock bottom（どん底を打つ）。値段以外にも rock-bottom morale のように使えます。',
    examples: [{ o: 'They sold them at rock-bottom prices.', j: '投げ売り価格で売りさばいた。' }] },

  { term: 'following', kind: '単語', pos: 'n.', ja: '（ブランドや人につく）支持層、ファン',
    note: '動詞 follow の -ing が名詞化したもの。build a following（ファンを増やす）、a loyal following、a cult following。SNS時代の必須語です。',
    examples: [{ o: 'The brand built a loyal following.', j: 'そのブランドは熱心なファンを育てた。' }] },

  { term: 'sprawling', kind: '単語', pos: 'adj.', ja: '無秩序に広がった、だだっ広い',
    note: '手足を投げ出して寝そべる sprawl から。a sprawling network / city。「整然としていない大きさ」という含みがあり、やや批判的に響くことも。',
    examples: [{ o: 'A sprawling network of factories.', j: '無秩序に広がる工場網。' }] },

  { term: 'between them', kind: '熟語', pos: 'phrase', ja: '（複数の主体が）合わせて、全部で',
    note: '⚠️「彼らの間で」ではありません。「その人たち全員を合計すると」。日本人が読み飛ばしやすい表現です。',
    examples: [{ o: 'The three of them between them raised £10,000.', j: '3人は合わせて1万ポンドを集めた。' }] },

  { term: 'stage a comeback', kind: '熟語', pos: 'idiom', ja: '（衰えたあとに）復活を果たす',
    note: 'stage は「上演する」→「意図をもって起こす」。stage a protest（抗議行動を起こす）、stage a recovery も同じ型です。',
    examples: [{ o: 'The band staged an unlikely comeback.', j: 'そのバンドは思いがけない復活を遂げた。' }] },

  { term: 'weigh on', kind: '熟語', pos: 'phrasal v.', ja: '〜に重くのしかかる、〜の重荷になる',
    note: '経済記事の最頻出表現のひとつ。weigh on profits / the economy。weigh on his mind なら「気にかかる」。自動詞なので on が必須です。',
    examples: [{ o: 'Uncertainty is weighing on confidence.', j: '先行き不安が心理の重しになっている。' }] },

  { term: 'end up', kind: '熟語', pos: 'phrasal v.', ja: '結局〜することになる',
    note: 'end up + -ing / 形容詞 / 名詞。意図していなかった結末に落ち着く、という皮肉めいた含みが必ず入ります。',
    examples: [{ o: 'We ended up walking home.', j: '結局歩いて帰るはめになった。' }] },

  { term: 'appetite', kind: '単語', pos: 'n.', ja: '（投資・改革などへの）意欲、食指',
    note: '本来は「食欲」。金融では risk appetite（リスク許容度）、appetite for ~。日本語の「食指が動く」と発想が近い比喩です。',
    examples: [{ o: 'There is little appetite for reform.', j: '改革を望む空気はほとんどない。' }] },

  { term: 'something of a', kind: '熟語', pos: 'phrase', ja: 'ちょっとした〜、ある意味で〜',
    note: '断定を和らげるクッション表現。イギリス英語の書き言葉で特に好まれます。something of a surprise / a legend。',
    examples: [{ o: 'It was something of a test.', j: 'それはある種の試金石だった。' }] },

  { term: 'on the back of', kind: '熟語', pos: 'idiom', ja: '〜を受けて、〜を追い風にして',
    note: '「〜の背に乗って」が原義。直前の出来事が今回の勢いになっている関係を示します。英国メディアが非常に好む表現。',
    examples: [{ o: 'The pound rose on the back of strong data.', j: '好調な指標を受けてポンドが上昇した。' }] },

  { term: 'since records began', kind: '熟語', pos: 'phrase', ja: '観測史上',
    note: '英国の気象報道の決まり文句。the hottest / wettest / driest ~ since records began。開始年を添えるのが親切な書き方です。',
    examples: [{ o: 'It was the wettest June since records began.', j: '観測史上もっとも雨の多い6月だった。' }] },

  { term: 'sheer', kind: '単語', pos: 'adj.', ja: 'まったくの、ただただ〜なだけの',
    note: '名詞の前でのみ使い、「他の要素ではなく、その大きさ・量そのもの」を強調します。the sheer number of ~、sheer luck。',
    examples: [{ o: 'The sheer number of applications overwhelmed us.', j: '応募の数の多さそのものに圧倒された。' }] },

  { term: 'comfortably', kind: '単語', pos: 'adv.', ja: '余裕をもって、楽々と',
    note: '⚠️「快適に」だけではありません。数値や勝敗と組むと「余裕で」。win comfortably、comfortably ahead。英国のスポーツ・統計報道の定番。',
    examples: [{ o: 'They comfortably beat the target.', j: '彼らは目標を余裕で上回った。' }] },

  { term: 'fall short of', kind: '熟語', pos: 'idiom', ja: '〜に届かない、〜を下回る',
    note: '目標・記録・期待に対して使います。short of だけでも「〜に足りない」。nothing short of a miracle（奇跡にほかならない）も頻出。',
    examples: [{ o: 'Sales fell short of the target.', j: '売上は目標に届かなかった。' }] },

  { term: 'warrant', kind: '単語', pos: 'v.', ja: '〜に値する、〜を正当化する',
    note: '名詞では「令状」ですが、動詞では「〜するだけの理由がある」。justify とほぼ同義で、報道・論説で使われる硬めの語です。',
    examples: [{ o: 'The situation does not warrant panic.', j: 'この状況はパニックになるほどではない。' }] }
],

/* ══════════════════ 中文 ══════════════════ */
zh: [
  { term: '表示', kind: '単語', pinyin: 'biǎo shì', pos: '動詞', ja: '（意見・態度を）述べる、表明する',
    note: '⚠️日本語の「表示（画面に出す）」とは別物。中国語では人が主語で「言う・示す」。報道で毎日出ます。画面表示は 显示 xiǎnshì。',
    examples: [{ o: '他表示不会参加这次会议。', j: '彼は今回の会議には参加しないと述べた。' }] },

  { term: '截至', kind: '単語', pinyin: 'jié zhì', pos: '前置詞', ja: '〜の時点で、〜現在',
    note: '書き言葉専用の硬い語で、統計の基準日を示します。截至目前（現時点で）。会話では 到…为止 を使います。',
    examples: [{ o: '截至目前，已有三万人报名。', j: '現時点ですでに3万人が申し込んでいる。' }] },

  { term: '结构', kind: '単語', pinyin: 'jié gòu', pos: '名詞', ja: '構造、構成',
    note: '⚠️日本語の「結構（かなり／もう十分）」とはまったく別。中国語で「けっこうです（不要）」は 不用了。经济结构、人口结构。',
    examples: [{ o: '这个国家的能源结构正在改变。', j: 'この国のエネルギー構成は変わりつつある。' }] },

  { term: '比重', kind: '単語', pinyin: 'bǐ zhòng', pos: '名詞', ja: '（全体に占める）割合、シェア',
    note: '⚠️日本語の「比重」は物理の密度ですが、中国語では統計の「ウェイト」。所占比重、比重下降。物理の比重は 密度 mìdù。',
    examples: [{ o: '服务业的比重越来越大。', j: 'サービス業の割合はますます大きくなっている。' }] },

  { term: '力争', kind: '単語', pinyin: 'lì zhēng', pos: '動詞', ja: '全力で目指す',
    note: '⚠️日本語の「力争（力ずくで争う）」とは違い、前向きな語。中国の政策文書に頻出し、「必ずやる」ではなく「目指す」という含みを残します。',
    examples: [{ o: '我们力争年底前完成。', j: '年末までの完成を目指します。' }] },

  { term: '会见', kind: '単語', pinyin: 'huì jiàn', pos: '動詞', ja: '（要人が）会談する',
    note: '⚠️日本語の「会見（記者会見）」ではありません。地位ある人どうしが公式に会うこと。記者会見は 记者会／新闻发布会。',
    examples: [{ o: '总理今天会见了代表团。', j: '首相は本日、代表団と会談した。' }] },

  { term: '培养', kind: '単語', pinyin: 'péi yǎng', pos: '動詞', ja: '（人材を）育てる、養成する',
    note: '⚠️日本語の「培養（細菌）」とは用法が大きく違い、中国語では人材育成の最も一般的な語。培养人才、培养兴趣、培养习惯。',
    examples: [{ o: '这所学校培养了很多工程师。', j: 'この学校は多くの技術者を輩出してきた。' }] },

  { term: '随着', kind: '単語', pinyin: 'suí zhe', pos: '前置詞', ja: '〜にともなって、〜につれて',
    note: '〈随着＋…的＋名詞，＋主節〉の形で変化の背景を示します。書き言葉の必須表現で、論説文の冒頭に極めて頻出。',
    examples: [{ o: '随着经济的发展，学外语的人越来越多。', j: '経済の発展にともない、外国語を学ぶ人が増えている。' }] },

  { term: '促使', kind: '単語', pinyin: 'cù shǐ', pos: '動詞', ja: '（人を）〜する気にさせる、〜を促す',
    note: '〈促使＋人＋動詞〉の使役型。让 より書き言葉的で、「外的な事情が人を動かした」という客観的な因果を示します。',
    examples: [{ o: '这次经历促使他重新考虑未来。', j: 'この経験が彼に将来を考え直させた。' }] },

  { term: '瞩目', kind: '単語', pinyin: 'zhǔ mù', pos: '動詞', ja: '注目する、目を見張る',
    note: '令人瞩目＝人を注目させる＝「目覚ましい」。举世瞩目（世界中が注目する）という四字表現も頻出。書き言葉です。',
    examples: [{ o: '中国可再生能源的增长令人瞩目。', j: '中国の再生可能エネルギーの伸びは目覚ましい。' }] },

  { term: '逐步', kind: '単語', pinyin: 'zhú bù', pos: '副詞', ja: '一歩ずつ、徐々に',
    note: '類義の 逐渐 が「（自然に）だんだん」なのに対し、逐步 は「段階を踏んで（意図的に）」。政策の話によく合います。',
    examples: [{ o: '煤炭的比重正在逐步下降。', j: '石炭の割合は徐々に低下している。' }] },

  { term: '并不', kind: '単語', pinyin: 'bìng bù', pos: '副詞', ja: '決して〜ではない',
    note: '并 が否定を強め、「そう思われがちだが実は違う」という反論のニュアンスを加えます。書き言葉では 并不・并没有 が多用されます。',
    examples: [{ o: '这件事并不像看起来那么简单。', j: 'この件は見た目ほど単純ではない。' }] },

  { term: '占据', kind: '単語', pinyin: 'zhàn jù', pos: '動詞', ja: '占める、占拠する',
    note: '占 単独より重く、「しっかり位置を押さえている」という語感。占据主导地位、占据市场份额。軍事的な「占領する」の意味も。',
    examples: [{ o: '煤电仍然占据更大份额。', j: '石炭火力が依然として大きなシェアを占めている。' }] },

  { term: '份额', kind: '単語', pinyin: 'fèn é', pos: '名詞', ja: '（市場などの）シェア、取り分',
    note: '份（分け前）＋额（定額）。市场份额＝マーケットシェア。ビジネス中国語の必須語です。',
    examples: [{ o: '他们的市场份额在扩大。', j: '彼らの市場シェアは拡大している。' }] },

  { term: '转折点', kind: '単語', pinyin: 'zhuǎn zhé diǎn', pos: '名詞', ja: '転換点、ターニングポイント',
    note: '历史转折点、重要转折点。同義で 拐点 guǎidiǎn（変曲点）も経済記事でよく使われます。',
    examples: [{ o: '这是电力结构的一个转折点。', j: 'これは電源構成の一つの転換点だ。' }] },

  { term: '碳中和', kind: '単語', pinyin: 'tàn zhōng hé', pos: '名詞', ja: 'カーボンニュートラル',
    note: '碳达峰（カーボンピークアウト）と合わせて 双碳 shuāngtàn と略されます。環境ニュースを読むなら必須。',
    examples: [{ o: '中国承诺2060年前实现碳中和。', j: '中国は2060年までのカーボンニュートラルを約束している。' }] },

  { term: '数以千计', kind: '熟語', pinyin: 'shù yǐ qiān jì', pos: '四字表現', ja: '数千に及ぶ',
    note: '「千を単位として数えるほどの」。数以万计（数万）、数以百万计（数百万）と単位を入れ替えられます。書き言葉の常套表現。',
    examples: [{ o: '数以万计的游客涌向这座小城。', j: '数万人の観光客がこの小さな町に押し寄せた。' }] },

  { term: '换句话说', kind: '熟語', pinyin: 'huàn jù huà shuō', pos: '接続表現', ja: '言い換えれば、つまり',
    note: '也就是说 とほぼ同義で、どちらも文頭に置きます。説明を言い直すときの必須表現。',
    examples: [{ o: '换句话说，真正的较量还在后面。', j: '言い換えれば、本当の勝負はこれからだ。' }] },

  { term: '较量', kind: '単語', pinyin: 'jiào liàng', pos: '名詞/動詞', ja: '（力の）勝負、競り合い',
    note: 'スポーツからビジネス、国際関係まで幅広く。真正的较量还在后面（本当の勝負はこれから）は記事の締めの決まり文句です。',
    examples: [{ o: '两家公司的较量才刚刚开始。', j: '両社の勝負はまだ始まったばかりだ。' }] },

  { term: '就业', kind: '単語', pinyin: 'jiù yè', pos: '離合詞', ja: '就職する、就業',
    note: '就（つく）＋业（職業）の離合詞なので目的語は取れません（× 就业一家公司 →〇 在一家公司工作）。就业机会、就业率、失业。',
    examples: [{ o: '学中文能带来更多就业机会。', j: '中国語を学べば就職の機会が広がる。' }] }
],

/* ══════════════════ ESPAÑOL ══════════════════ */
es: [
  { term: 'vaciarse', kind: '単語', pos: 'v. prnl.', ja: '（自分を）出し切る、空っぽになる',
    note: 'vaciar（空にする）の再帰形。「出せるものは全部出した」という達成感を含み、引退の言葉として非常に強く響きます。Me vacié.＝出し尽くした。',
    examples: [{ o: 'Se vació en el último partido.', j: '彼は最後の試合ですべてを出し切った。' }] },

  { term: 'doler en el alma', kind: '熟語', pos: 'expresión', ja: '心底つらい、魂に痛む',
    note: '体の痛みの表現（me duele la cabeza）を心に転用した強い言い方。doler は gustar 型で、痛む対象が主語になります。',
    say: 'doler en el alma',
    examples: [{ o: 'Fue una decisión que duele en el alma.', j: '魂に痛む決断だった。' }] },

  { term: 'tardar en', kind: '熟語', pos: 'v. + prep.', ja: '〜するのに時間がかかる',
    note: '前置詞 en が必須。¿Cuánto tardas?（どれくらいかかる？）は日常会話の必須フレーズです。',
    examples: [{ o: 'Tardé dos horas en llegar.', j: '着くのに2時間かかった。' }] },

  { term: 'caer', kind: '単語', pos: 'v.', ja: '（記録が）破られる／落ちる',
    note: '基本義は「落ちる」。記録について使うと「破られる」で、スポーツ記事の定番。日本語の「記録が落ちる」とは発想が違うので覚える価値があります。',
    examples: [{ o: 'Es un récord que tardará en caer.', j: '当分は破られない記録だ。' }] },

  { term: 'apenas', kind: '単語', pos: 'adv.', ja: 'わずか〜／ほとんど〜ない／〜するや否や',
    note: '3つの用法があります。①数量の前で「わずか」②動詞と「ほとんど〜ない」③接続詞で「〜するとすぐ」。文中の位置で判断します。',
    examples: [{ o: 'Apenas dos días después de la final.', j: '決勝のわずか2日後に。' }] },

  { term: 'echarse atrás', kind: '熟語', pos: 'idiom', ja: '前言を撤回する、思いとどまる',
    note: '「自分を後ろに投げる」が原義。契約や約束を反故にする場合にも使う日常表現。同義は dar marcha atrás。',
    say: 'echarse atrás',
    examples: [{ o: 'Firmaron, pero luego se echaron atrás.', j: '契約したのに、後で撤回した。' }] },

  { term: 'la prórroga', kind: '単語', pos: 'n.f.', ja: '延長戦',
    note: '中南米では alargue（亜）や tiempo extra とも。サッカー用語は地域差の宝庫で、PK戦は penaltis（西）／penales（米）。',
    examples: [{ o: 'Marcó en la prórroga.', j: '彼は延長戦で得点した。' }] },

  { term: 'bancar', kind: '単語', pos: 'v. (arg./uru.)', ja: '（リオプラテンセ）支える、味方でいる、こらえる',
    note: '⚠️アルゼンチン・ウルグアイ特有。スペインでは通じません。「金銭的に支える」から「精神的に支える」へ広がった語。標準語なら apoyar。',
    examples: [{ o: 'Siempre te vamos a bancar.', j: '（亜）僕らはいつでも君の味方だよ。' }] },

  { term: 'alentar', kind: '単語', pos: 'v.', ja: '声援を送る、励ます',
    note: 'aliento（息・激励）から。e→ie の語幹母音変化動詞（aliento, alientas…）。中南米のサッカーでは「スタンドから歌って応援する」こと。',
    examples: [{ o: 'Seguiré alentando desde afuera.', j: '外から応援を続けます。' }] },

  { term: 'el suplente', kind: '単語', pos: 'n.', ja: '控え選手、交代要員',
    note: 'suplir（補う）から。entrar como suplente＝途中出場する。先発は titular。',
    examples: [{ o: 'Entró como suplente.', j: '彼は途中出場した。' }] },

  { term: 'la recompensa', kind: '単語', pos: 'n.f.', ja: '報い、報酬',
    note: 'recompensar（報いる）から。日本語の「ご褒美」に近い温度で、努力の見返りという含みがあります。como recompensa＝報酬として。',
    examples: [{ o: 'La recompensa llegó tarde.', j: '報われるのは遅かった。' }] },

  { term: 'aun así', kind: '熟語', pos: 'loc. adv.', ja: 'それでもなお',
    note: '⚠️ aun（アクセントなし）＝「〜さえ・それでも」／aún（アクセントあり）＝「まだ」。書き取りで必ず問われる区別です。',
    examples: [{ o: 'Estaba cansado; aun así, siguió.', j: '疲れていた。それでも彼は続けた。' }] },

  { term: 'salirle a alguien', kind: '熟語', pos: 'idiom', ja: '（人）に〜が思いがけず現れる',
    note: 'salir＋間接目的語。Le ha salido un competidor＝ライバルが現れた。予期しない出来事という含みがあり、口語で頻出。',
    say: 'Me ha salido una oportunidad.',
    examples: [{ o: 'Me ha salido una oportunidad muy buena.', j: 'とてもいい機会が舞い込んできた。' }] },

  { term: 'cuajar', kind: '単語', pos: 'v.', ja: '（卵が）固まる／（考えが）根づく',
    note: '料理の必須動詞。比喩では「実を結ぶ・定着する」。el proyecto no cuajó＝計画は実現しなかった。',
    examples: [{ o: 'La idea no cuajó entre los vecinos.', j: 'その案は住民のあいだで根づかなかった。' }] },

  { term: 'darle vueltas a algo', kind: '熟語', pos: 'idiom', ja: '〜をあれこれ考える、思案する',
    note: '「頭の中でぐるぐる回す」。No le des más vueltas＝もう考えすぎるな。日本語の「思いを巡らせる」とほぼ同じ比喩です。',
    say: 'Llevo semanas dándole vueltas.',
    examples: [{ o: 'Llevo semanas dándole vueltas.', j: '何週間もそのことを考え続けている。' }] },

  { term: 'regentar', kind: '単語', pos: 'v.', ja: '（店・事業を）経営する、切り盛りする',
    note: 'やや文語的で、報道が店主を紹介するときに好んで使います。日常会話なら llevar un bar / tener un bar。',
    examples: [{ o: 'Regenta un local de pinchos y vinos.', j: '彼はピンチョスとワインの店を営んでいる。' }] },

  { term: 'viralizarse', kind: '単語', pos: 'v. prnl.', ja: 'バズる、拡散する',
    note: 'viral から作られた新しい動詞。hacerse viral とも。SNS時代のスペイン語を代表する語で、辞書に載ったのはごく最近です。',
    examples: [{ o: 'El vídeo se viralizó en pocas horas.', j: 'その動画は数時間で拡散した。' }] },

  { term: 'estar acostumbrado a', kind: '熟語', pos: 'expresión', ja: '〜するのに慣れている',
    note: '前置詞は a で固定（× acostumbrado de）。acostumbrarse a algo＝〜に慣れる。',
    say: 'No estoy acostumbrado a madrugar.',
    examples: [{ o: 'No estoy acostumbrado a madrugar.', j: '早起きには慣れていない。' }] },

  { term: 'llevar + 期間 + gerundio', kind: '熟語', pos: 'perífrasis', ja: '〜し続けている',
    note: '英語の have been -ing に当たる最重要構文。Llevo tres años estudiando español. ¿Cuánto llevas esperando?（どれくらい待ってる？）',
    say: 'Llevo tres años estudiando español.',
    examples: [{ o: 'Llevo tres años estudiando español.', j: 'スペイン語を3年勉強しています。' }] },

  { term: 'no tan… como', kind: '熟語', pos: 'estructura', ja: '〜ほど…ではない',
    note: '同等比較 tan…como の否定形。比較の相手が節でも成り立ちます（como parece＝見た目ほど、como dicen＝言われているほど）。',
    say: 'No es tan difícil como dicen.',
    examples: [{ o: 'No es tan difícil como dicen.', j: '言われているほど難しくない。' }] }
],

/* ══════════════════ FRANÇAIS ══════════════════ */
fr: [
  { term: 'la rentrée', kind: '単語', pos: 'n.f.', ja: '（夏休み明けの）新学期、活動再開',
    note: 'フランス文化を理解する鍵。学校だけでなく la rentrée littéraire（秋の新刊）、la rentrée politique（政界の再開）と、9月の社会全体の再始動を指します。日本語に一語の訳語がありません。',
    examples: [{ o: 'Alors, cette rentrée ?', j: 'で、新学期はどう？' }] },

  { term: 'entrer en vigueur', kind: '熟語', pos: 'expression', ja: '施行される、発効する',
    note: 'vigueur は「活力」。法律・規則の話では必須。la loi en vigueur＝現行法。反対は abroger（廃止する）。',
    say: 'entrer en vigueur',
    examples: [{ o: 'Le règlement entrera en vigueur en janvier.', j: 'その規則は1月に施行される。' }] },

  { term: 'reprendre le chemin de', kind: '熟語', pos: 'expression', ja: '〜への道を再びたどる、〜に戻る',
    note: '「学校が始まる」を言うときの決まり文句。単に retourner à と言うより情緒があります。reprendre le chemin du travail も同様。',
    say: 'reprendre le chemin de l\'école',
    examples: [{ o: 'Ils ont repris le chemin de l\'école.', j: '彼らは学校へ戻った。' }] },

  { term: 'le volet', kind: '単語', pos: 'n.m.', ja: '（法案などの）部分、柱／鎧戸',
    note: '本来は「鎧戸」。そこから「全体を構成する一部門」へ。le volet social、un plan en trois volets。政治・行政の文章に頻出します。',
    examples: [{ o: 'Le volet principal a été censuré.', j: '中心部分は違憲とされた。' }] },

  { term: 'censurer', kind: '単語', pos: 'v.', ja: '（憲法評議会が）違憲として無効にする／検閲する',
    note: 'フランスの憲法評議会が条文を無効にすることを指します。「検閲」の意味もありますが、法律の文脈ではこちらが標準。',
    examples: [{ o: 'Le Conseil constitutionnel a censuré la disposition.', j: '憲法評議会はその条項を無効とした。' }] },

  { term: 'promulguer', kind: '単語', pos: 'v.', ja: '（法律を）公布する',
    note: 'フランスでは議会が可決した法律を大統領が公布して初めて効力が生じます。名詞は la promulgation。',
    examples: [{ o: 'Le président a décidé de promulguer le texte.', j: '大統領は法律の公布を決めた。' }] },

  { term: 'concéder', kind: '単語', pos: 'v.', ja: '（不利なことを）渋々認める、譲歩する',
    note: 'admettre と近いですが、「自分に不利な点を認める」という含み。報道が「〜と認めた」と書くときの語。名詞は une concession。',
    examples: [{ o: 'Il a concédé que ce serait difficile.', j: '彼はそれが難しいだろうと認めた。' }] },

  { term: 'faire respecter', kind: '熟語', pos: 'expression', ja: '守らせる、遵守させる',
    note: '使役の faire + 不定詞。⚠️語順は〈faire + 不定詞 + 意味上の主語〉で、英語の make them respect とは並びが違います。',
    say: 'faire respecter les règles',
    examples: [{ o: 'Difficile à faire respecter au début.', j: '最初のうちは守らせるのが難しい。' }] },

  { term: 'aucun … ne', kind: '熟語', pos: 'structure', ja: 'ひとつも〜ない',
    note: '必ず ne とセット。単数扱いなのが特徴（aucun argument ne permet）。名詞なしで代名詞としても使えます。',
    say: 'Aucun argument ne le permet.',
    examples: [{ o: 'Aucune solution ne semble parfaite.', j: '完璧に見える解決策はひとつもない。' }] },

  { term: 'le règlement intérieur', kind: '単語', pos: 'n.m.', ja: '（学校の）校則、（会社の）就業規則',
    note: 'フランスでは学校ごとに定め、生徒と保護者が署名します。新しい法律も、これに落とし込まれて初めて実効を持ちます。',
    examples: [{ o: 'Chaque lycée doit adapter son règlement intérieur.', j: '各高校が校則を改める必要がある。' }] },

  { term: 'le proviseur', kind: '単語', pos: 'n.m.', ja: '（高校の）校長',
    note: '⚠️学校段階ごとに呼び名が違います：directeur（小学校）、principal（中学）、proviseur（高校）。フランスの学校制度を語るのに欠かせません。',
    examples: [{ o: 'C\'est aux proviseurs de fixer les modalités.', j: '細部を決めるのは校長の役目だ。' }] },

  { term: 'les modalités', kind: '単語', pos: 'n.f.pl.', ja: '（実施の）具体的な方法、運用方法',
    note: 'ほぼ常に複数形。les modalités d\'application（適用の細目）、les modalités d\'inscription（申込方法）。行政文書の定番語です。',
    examples: [{ o: 'Il faut fixer les modalités pratiques.', j: '実務上の運用方法を決める必要がある。' }] },

  { term: 'généraliser', kind: '単語', pos: 'v.', ja: '全面的に導入する、一般化する',
    note: '試行（expérimentation）→ 全面展開（généralisation）はフランスの行政の定番の流れ。être généralisé à＝〜に拡大される。',
    examples: [{ o: 'Le dispositif est généralisé à toutes les classes.', j: 'その制度は全クラスに拡大される。' }] },

  { term: 'voir le jour', kind: '熟語', pos: 'expression', ja: '誕生する、日の目を見る',
    note: '「日を見る」＝この世に生まれる。人にも制度にもプロジェクトにも使えます。naître より文語的で、報道が新制度の創設を伝えるときの決まり文句。',
    say: 'voir le jour',
    examples: [{ o: 'Le musée devrait voir le jour en 2028.', j: 'その美術館は2028年に開館する見込みだ。' }] },

  { term: 'le malus', kind: '単語', pos: 'n.m.', ja: 'マリュス（悪い性能に対する課金・割増）',
    note: 'ラテン語の「悪い」から。bonus の対語として制度名に定着。bonus-malus は自動車保険、malus écologique は高排出車への課徴金。',
    examples: [{ o: 'Le malus atteint deux euros par tee-shirt.', j: '課金はTシャツ1枚あたり2ユーロに達する。' }] },

  { term: 'l\'arrêté', kind: '単語', pos: 'n.m.', ja: '省令、（大臣・知事の）命令',
    note: '⚠️動詞 arrêter（止める・逮捕する）の過去分詞と同じ形ですが、名詞では行政命令。loi ＞ décret ＞ arrêté ＞ circulaire という階層の一つです。',
    say: 'un arrêté ministériel',
    examples: [{ o: 'Un arrêté publié au Journal officiel.', j: '官報に掲載された省令。' }] },

  { term: 'instaurer', kind: '単語', pos: 'v.', ja: '（制度を）導入する、設ける',
    note: 'établir より制度的な響き。instaurer une taxe / un dialogue / un climat de confiance。名詞は l\'instauration。',
    examples: [{ o: 'L\'arrêté instaure des pénalités financières.', j: 'その省令は金銭的なペナルティを導入する。' }] },

  { term: 'grimper', kind: '単語', pos: 'v.', ja: '（数値が）跳ね上がる／よじ登る',
    note: '本来は「よじ登る」。経済記事では monter より勢いのある「急上昇」。les prix grimpent、grimper en flèche。',
    examples: [{ o: 'Le chômage a grimpé de deux points.', j: '失業率は2ポイント跳ね上がった。' }] },

  { term: 'hors taxe', kind: '熟語', pos: 'loc. adj.', ja: '税抜きの',
    note: '略して HT。対語は TTC（toutes taxes comprises＝税込み）。フランスで買い物や取引をするなら必須の略語です。',
    say: 'le prix hors taxe',
    examples: [{ o: 'Dans la limite de 50 % du prix hors taxe.', j: '税抜き価格の50%を上限として。' }] },

  { term: 'le dispositif', kind: '単語', pos: 'n.m.', ja: '（政策の）仕組み、制度／装置',
    note: 'フランスの行政用語の中核語。un dispositif d\'aide（支援制度）、un dispositif de sécurité（警備態勢）。政策記事にほぼ必ず出ます。',
    examples: [{ o: 'Le gouvernement assure que le dispositif épargnera les enseignes classiques.', j: '政府はこの制度が従来型のチェーンには及ばないとしている。' }] }
]

});
