/* MUNDO EN ESPAÑOL — Vol.1 / 2026-W36 */
WGL.registerArticles([

/* ══════════════════════════════════════════════════════════ */
{
  id: 'es-messi',
  lang: 'es',
  category: 'Deporte / Sociedad · Argentina',
  level: 'B1–B2',
  headline: {
    orig: '"Me vacié": Messi se despide de la selección argentina',
    ja: '「空っぽになった」― メッシ、アルゼンチン代表に別れを告げる'
  },
  why: '20年以上続いた物語の終わりです。ただ語学的にもうひとつ理由があります。メッシの別れの言葉には、リオプラテンセ（アルゼンチン・ウルグアイ）のスペイン語がそのまま出てきます ― bancar、ustedes、そして「amo, amé y amaré」という現在・過去・未来を一息に並べる一節。教科書のスペイン語と、実際に人が感情を込めて話すスペイン語の距離を、これほど鮮やかに見せてくれる素材はそうありません。',

  body: [
    {
      id: 'es-messi-1',
      text: 'Lionel Messi anunció el lunes que deja la selección argentina, después de más de veinte años y de dos récords que probablemente {{tarden}} mucho en caer: 207 partidos y 125 goles.',
      ja: 'リオネル・メッシは月曜日、アルゼンチン代表を退くと発表した。20年を超える歳月と、当分は破られそうにない2つの記録 ― 207試合出場、125得点 ― を残しての引退である。',
      vocab: [
        { term: 'tarden', pos: 'v. (tardar・接続法現在)', ja: '時間がかかる（の接続法）',
          note: 'tardar en + 不定詞 で「〜するのに時間がかかる」。tardar mucho en caer＝「破られるまでに長くかかる」。ここが接続法になっている理由は下の文法欄を参照。',
          collocations: ['tardar en llegar', '¿cuánto tardas?'],
          examples: [{ o: 'Tardé dos horas en llegar.', j: '着くのに2時間かかった。' }] },
        { term: 'caer', pos: 'v.', ja: '（記録が）破られる、（政権が）倒れる',
          note: '基本義は「落ちる」。記録について使うと「破られる」。スポーツ記事の定番で、日本語の「記録が落ちる」とは発想が違うので覚えておく価値があります。',
          collocations: ['caer un récord', 'caer el gobierno'] },
        { term: 'la selección', pos: 'n.f.', ja: '（サッカーの）代表チーム',
          note: '本来は「選抜・選択」。スポーツでは定冠詞つきで「代表」を指し、アルゼンチンでは大文字で la Selección と書かれることも多いです。愛称は la Albiceleste（白と空色）。' }
      ],
      grammar: [
        { point: '関係節中の接続法 que probablemente tarden', ja: '先行詞（dos récords）の性質が「まだ確定していない・推測である」ときは接続法を使います。ここでは probablemente（おそらく）が不確実性を明示しているため tarden。直説法 tardan にすると「事実としてそうだ」と断定することになります。',
          compare: 'récords que tardan en caer = 事実として破られにくい記録／récords que tarden en caer = （おそらく）破られにくいであろう記録。この一文字の差が確信度を表します。',
          examples: [{ o: 'Busco a alguien que hable japonés.', j: '日本語を話せる人を探している（誰かは未定＝接続法）。' },
                      { o: 'Conozco a alguien que habla japonés.', j: '日本語を話せる人を知っている（特定の人＝直説法）。' }] },
        { point: 'anunciar que + 直説法', ja: '「〜だと発表する」。情報の伝達動詞なので直説法（deja）を取ります。一方、anunciar が「〜するよう告げる」という命令の意味になると接続法になります。伝える系の動詞（decir, informar, anunciar）は「事実の伝達＝直説法／依頼・命令＝接続法」で分かれます。',
          examples: [{ o: 'Me dijo que venía. / Me dijo que viniera.', j: '「来る」と言った。／「来るように」と言った。' }] },
        { point: '現在形 deja で未来を表す', ja: 'anunció（過去）que deja（現在）。スペイン語では、決定済みの近い未来を現在形で言うことがよくあります。日本語の「代表を退く」と同じ感覚です。' }
      ]
    },
    {
      id: 'es-messi-2',
      text: '"{{Me vacié}}, ya no tengo más para dar", escribió en Instagram el jugador de 39 años.',
      ja: '「空っぽになった。もう出せるものが残っていない」。39歳の選手はインスタグラムにそう書いた。',
      literal: '「私は自分を空にした、もはや与えるためのものをこれ以上持っていない」と、39歳のその選手はインスタグラムに書いた。',
      vocab: [
        { term: 'Me vacié', pos: 'v. (vaciarse・点過去)', ja: '（自分を）出し切った、空っぽになった',
          note: 'vaciar（空にする）の再帰形。「自分自身を空にした」＝出せるものはすべて出した、という意味です。辞書的な「空になる」よりずっと感情的で、スポーツ選手の引退の言葉として非常に強い響きを持ちます。日本語の「出し尽くした」がいちばん近い。',
          collocations: ['vaciar un vaso', 'vaciarse por completo'],
          examples: [{ o: 'Se vació en el último partido de su carrera.', j: '彼はキャリア最後の試合ですべてを出し切った。' }] },
        { term: 'para dar', pos: 'prep. + inf.', ja: '与えるための、差し出すべき',
          note: 'tener algo para + 不定詞 で「〜すべき何かを持っている」。no tener más para dar＝「もう差し出せるものがない」。por dar とすると意味が変わる（下の文法欄）ので、para/por の区別の好例です。' }
      ],
      grammar: [
        { point: '再帰動詞による「自分への働きかけ」', ja: 'vaciar（何かを空にする）→ vaciarse（自分自身が空になる）。スペイン語の再帰は、単なる「自分を」だけでなく、感情の関与や完全性を表します。comer（食べる）→ comerse（平らげる）、ir（行く）→ irse（立ち去る）。この一語で「消耗しきった」という感情が乗ります。',
          examples: [{ o: 'Se comió toda la pizza.', j: 'ピザを丸ごと平らげた。' },
                      { o: 'Me voy.', j: '（もう）行くね。' }] },
        { point: 'para と por の分かれ目', ja: 'para は「目的・向かう先」、por は「理由・原因・交換」。para dar＝「与えるという目的のために（持っているもの）」。もし por dar なら「与えたせいで」となり、意味が通りません。「これから向かう」なら para、「すでに起きた原因」なら por、と方向で考えると整理しやすくなります。',
          examples: [{ o: 'Estudio para aprobar.', j: '合格するために勉強している（目的）。' },
                      { o: 'Lo hice por ti.', j: '君のためにやった／君のせいでやった（動機・原因）。' }] },
        { point: '点過去 vacié', ja: '完結した一回の出来事として捉えています。imperfecto の me vaciaba なら「（当時）出し切っていた最中だった」という継続の描写になり、別れの宣言としては成り立ちません。' }
      ],
      nuance: 'Me vacié は一語で「もう限界だ」ではなく「出せるものは全部出した」という肯定的な達成感も含みます。悲壮ではなく、やり切った者の言葉です。'
    },
    {
      id: 'es-messi-3',
      text: 'Añadió que fue "una decisión que dolió y duele en el alma", aunque entiende que es el momento.',
      ja: 'そして「痛かったし、今も魂に痛む決断だった」と付け加えた。それでも、いま潮時なのだと理解しているという。',
      vocab: [
        { term: 'el alma', pos: 'n.f.', ja: '魂、心',
          note: '女性名詞ですが、アクセントのある a- で始まるため単数では男性定冠詞 el を取ります（el alma / las almas / el alma buena ではなく el alma buena…形容詞は女性形）。同じ現象は el agua, el águila, el aula。文法の例外として必ず問われるところです。',
          collocations: ['con toda el alma', 'en cuerpo y alma'] },
        { term: 'doler', pos: 'v.', ja: '痛む',
          note: 'gustar と同じ「逆転構文」の動詞です。Me duele la cabeza＝「頭が私に痛みを与える」＝頭が痛い。主語は痛む部位のほうで、人は間接目的語になります。',
          collocations: ['me duele la cabeza', 'duele en el alma'],
          examples: [{ o: 'Me duelen los pies.', j: '足が痛い（複数なので duelen）。' }] }
      ],
      grammar: [
        { point: 'dolió y duele — 点過去と現在の並置', ja: '「痛んだ、そして今も痛む」。同じ動詞を点過去と現在形で並べることで、「あのときの痛み」と「今も続く痛み」を一息に表現しています。スペイン語の時制のコントラストを、修辞として使った見事な例です。日本語では「痛かったし、今も痛い」と分けて訳すしかありません。',
          examples: [{ o: 'Lo pensé y lo sigo pensando.', j: 'そう思ったし、今もそう思っている。' }] },
        { point: 'aunque + 直説法 / 接続法', ja: 'aunque entiende（直説法）は「実際に理解している」という既知の事実。aunque entienda（接続法）なら「たとえ理解していたとしても」という譲歩の仮定になります。事実なら直説法、仮定なら接続法 ― この対立は aunque の核心です。',
          compare: 'Aunque llueve, voy. = 雨が降っているが行く（現に降っている）／Aunque llueva, voy. = たとえ雨が降っても行く（まだ降っていない）。',
          examples: [{ o: 'Aunque es caro, lo compro.', j: '高いけれど買う。' },
                      { o: 'Aunque sea caro, lo compro.', j: 'たとえ高くても買う。' }] },
        { point: 'ser の点過去 fue', ja: 'ser の点過去 fue は ir（行く）の点過去とまったく同じ形です（fui, fuiste, fue…）。文脈で判断するしかありません。ここは una decisión が続くので ser。' }
      ]
    },
    {
      id: 'es-messi-4',
      text: 'El capitán reveló al final del mensaje que había escrito esas palabras el 21 de julio, apenas dos días después de la final del Mundial que Argentina perdió ante España.',
      ja: 'キャプテンはメッセージの最後で、その言葉を書いたのは7月21日、アルゼンチンがスペインに敗れたワールドカップ決勝のわずか2日後だったと明かした。',
      vocab: [
        { term: 'apenas', pos: 'adv.', ja: 'わずか〜、かろうじて、〜するや否や',
          note: '3つの用法があります。①数量の前で「わずか」（apenas dos días）②動詞と「ほとんど〜ない」（apenas duermo＝ほとんど眠れない）③接続詞で「〜するとすぐ」（apenas llegó, salió）。この記事は①。',
          collocations: ['apenas unos minutos', 'apenas nada'],
          examples: [{ o: 'Apenas lo conozco.', j: '彼のことはほとんど知らない。' }] },
        { term: 'ante', pos: 'prep.', ja: '〜に対して、〜を前にして',
          note: 'スポーツでは perder ante / ganar a のように対戦相手を示します。contra（〜に対抗して）より中立的で、書き言葉向き。ante todo＝何よりまず。',
          collocations: ['perder ante', 'ante el juez', 'ante todo'] }
      ],
      grammar: [
        { point: '過去完了 había escrito', ja: '「（明かした時点より）すでに書いてあった」。過去のある時点より前を示す大過去です。reveló（明かした）は8月末、había escrito（書いた）は7月21日 ― 時間の層が2つあることを、この時制が示しています。スペイン語は英語と同じくこの層を厳密に区別します。',
          examples: [{ o: 'Cuando llegué, ya se habían ido.', j: '私が着いたときには、彼らはもう帰っていた。' }] },
        { point: '日付の言い方 el 21 de julio', ja: '〈el + 日 + de + 月〉。前置詞は不要です（× en el 21 de julio）。曜日も同じく el lunes（月曜に）で en は付けません。日本人が最も余分な前置詞を入れてしまう箇所です。' },
        { point: '関係節 la final del Mundial que Argentina perdió', ja: 'que の先行詞は la final（決勝）です。関係節の中で主語（Argentina）が動詞の前に来ているので分かりやすいですが、スペイン語では que perdió Argentina と主語を後置することも多く、その場合は「誰が誰に負けたか」を落ち着いて確認する必要があります。' }
      ],
      structure: 'El capitán〈S〉 reveló〈V〉 al final del mensaje〈場所〉 que [ había escrito esas palabras el 21 de julio ]〈従属節＝O〉, apenas dos días después de [ la final del Mundial que Argentina perdió ante España ]〈同格の時間句〉。'
    },
    {
      id: 'es-messi-5',
      text: 'No las publicó entonces. La muerte de su padre, Jorge Messi, el 8 de agosto en Rosario, terminó de confirmar una decisión que ya {{estaba tomada}}.',
      ja: 'そのときは公開しなかった。8月8日にロサリオで父ホルヘ・メッシが亡くなったことが、すでに固まっていた決断を最終的に確かなものにした。',
      vocab: [
        { term: 'estaba tomada', pos: 'estar + 過去分詞', ja: '（決断が）すでに下されていた',
          note: 'tomar una decisión＝決断を下す。その結果の状態を estar + 過去分詞 で表します。「誰が下したか」ではなく「もう下された状態にあった」ことを言うのが狙いです。',
          collocations: ['tomar una decisión', 'la decisión está tomada'] },
        { term: 'terminar de + inf.', pos: 'perífrasis', ja: '〜し終える、最終的に〜する',
          note: '「〜するのを終える」が基本ですが、この文のように「決定打となる／とどめを刺す」という意味でも使います。terminó de confirmar＝「確認作業を完了させた」＝「決定的にした」。',
          collocations: ['terminar de comer', 'terminar de convencer'],
          examples: [{ o: 'Ese comentario terminó de convencerme.', j: 'そのひとことで私はすっかり納得した。' }] }
      ],
      grammar: [
        { point: 'ser + 過去分詞 と estar + 過去分詞', ja: 'これはスペイン語学習の要です。ser + p.p.＝受動態（動作）：La decisión fue tomada ayer.（決断は昨日下された）。estar + p.p.＝結果状態：La decisión estaba tomada.（決断はすでに下された状態だった）。この文が estar なのは、誰がいつ決めたかではなく「もう決まっていた」という状態を言いたいからです。',
          compare: 'La puerta fue cerrada por el portero.（守衛によって閉められた＝動作）／La puerta estaba cerrada.（ドアは閉まっていた＝状態）。',
          examples: [{ o: 'El problema ya está resuelto.', j: 'その問題はもう解決している。' }] },
        { point: '直接目的語代名詞 las', ja: 'No las publicó の las は前文の esas palabras（女性・複数）を受けています。スペイン語は繰り返しを嫌い、代名詞で受けます。代名詞は活用動詞の前に置くのが原則（× No publicó las）。' },
        { point: '同格のカンマ su padre, Jorge Messi,', ja: 'カンマで挟んで補足説明を入れる形です。両側にカンマが必要で、片方だけだと誤り。日付や場所（el 8 de agosto en Rosario）も同じくカンマで挿入されており、この一文は挿入句の練習に最適です。' }
      ]
    },
    {
      id: 'es-messi-6',
      text: 'Su despedida internacional fue el 19 de julio en Nueva Jersey: España ganó 1-0 con un gol de Ferran Torres en la {{prórroga}}.',
      ja: '代表としての最後の試合は7月19日、ニュージャージーだった。フェラン・トーレスの延長戦での1点で、スペインが1対0で勝った。',
      vocab: [
        { term: 'prórroga', pos: 'n.f.', ja: '延長戦',
          note: '動詞 prorrogar（延長する）から。中南米では tiempo extra / alargue（アルゼンチン）とも言います。地域差の分かりやすい例です。PK戦は los penaltis（スペイン）／los penales（中南米）。',
          collocations: ['en la prórroga', 'ir a la prórroga'] },
        { term: 'despedida', pos: 'n.f.', ja: '別れ、送別',
          note: 'despedir（見送る・解雇する）→ despedirse（別れを告げる）→ despedida（別れ）。una fiesta de despedida＝送別会。なお despedir a alguien は「解雇する」の意味にもなるので文脈注意。',
          collocations: ['fiesta de despedida', 'carta de despedida'] }
      ],
      grammar: [
        { point: 'コロン（:）の使い方', ja: 'スペイン語のコロンは、前文の内容を具体化・説明するときに使います。ここでは「最後の試合はこれだった」→「その内容はこうだ」。英語と同じ用法ですが、スペイン語ではコロンのあとを大文字で始めることが多い点が違います（España…）。' },
        { point: 'スコアの言い方 ganó 1-0', ja: '読み方は ganó uno a cero。「〜に勝つ」は ganar a（España ganó a Argentina）、「〜に負ける」は perder ante / contra。empatar a dos＝2対2で引き分ける。' },
        { point: '点過去の連続', ja: 'fue / ganó とも点過去。完結した過去の出来事を時系列で並べるときは点過去が基本です。線過去（era, ganaba）にすると「そのころは〜だった」という背景描写になり、試合結果の報告には使えません。' }
      ]
    },
    {
      id: 'es-messi-7',
      text: 'Aun así, a los 39 años, Messi terminó aquel torneo con ocho goles y cuatro asistencias, solo por detrás de Kylian Mbappé.',
      ja: 'それでも39歳のメッシは、その大会を8得点4アシストで終えた。キリアン・エムバペに次ぐ2位の成績である。',
      vocab: [
        { term: 'Aun así', pos: 'loc. adv.', ja: 'それでもなお',
          note: '⚠️ aun（アクセントなし）＝「〜さえ／それでも」、aún（アクセントあり）＝「まだ（todavía）」。この2語の区別は書き取りで必ず問われます。aun así は「それでもなお」、aún no は「まだ〜ない」。',
          collocations: ['aun así', 'aún no'],
          examples: [{ o: 'Aún no ha llegado.', j: '彼はまだ着いていない。' },
                      { o: 'Estaba cansado; aun así, siguió.', j: '疲れていた。それでも彼は続けた。' }] },
        { term: 'por detrás de', pos: 'loc. prep.', ja: '〜の後ろに、〜に次いで',
          note: '順位を表します。solo por detrás de X＝「Xに次いで2番目」。反対は por delante de（〜を上回って）。detrás de は物理的な「後ろ」でも使います。',
          collocations: ['quedar por detrás de', 'por delante de'] }
      ],
      grammar: [
        { point: '年齢の a los 39 años', ja: '「39歳のときに」。〈a los + 数 + años〉で年齢の時点を表します。tener 39 años（39歳である）との使い分けに注意。a los ocho años empecé a estudiar piano.（8歳でピアノを始めた）。' },
        { point: 'aquel torneo — 指示詞の3系列', ja: 'este（この・話し手に近い）／ese（その・聞き手に近い）／aquel（あの・両者から遠い）。日本語のこそあどと完全に対応します。ここで aquel を使うのは、話題の大会が時間的にも心理的にも「あのとき」として距離を置かれているからです。',
          examples: [{ o: 'aquel verano', j: 'あの夏' }] },
        { point: 'solo のアクセント', ja: 'かつては副詞（＝solamente）に sólo とアクセントを付けましたが、現在のスペイン王立アカデミーの規範ではアクセント不要です。古い教材では sólo と書かれていることがあり、両方見かけます。' }
      ]
    },
    {
      id: 'es-messi-8',
      text: 'Nada de esto estaba escrito. Debutó el 17 de agosto de 2005, con 18 años, en un amistoso en Budapest: entró como {{suplente}} y lo expulsaron a los 47 segundos.',
      ja: 'こうなることは何ひとつ決まっていたわけではない。デビューは2005年8月17日、18歳のとき、ブダペストでの親善試合だった。途中出場し、わずか47秒で退場になった。',
      vocab: [
        { term: 'suplente', pos: 'n.com.', ja: '控え選手、交代要員',
          note: 'suplir（補う）から。entrar como suplente＝途中出場する。先発は titular。中南米では banca（ベンチ）を使った言い方も一般的です。',
          collocations: ['jugador suplente', 'banquillo de suplentes'] },
        { term: 'amistoso', pos: 'n.m./adj.', ja: '親善試合／友好的な',
          note: 'amistad（友情）から。un partido amistoso を短くして un amistoso。形容詞としては「友好的な」（un tono amistoso）。',
          collocations: ['un partido amistoso', 'relaciones amistosas'] },
        { term: 'expulsar', pos: 'v.', ja: '退場させる、追放する',
          note: 'サッカーでは「レッドカードで退場させる」。lo expulsaron＝「彼を退場させた」＝彼は退場になった。学校からの「退学」も expulsar です。',
          collocations: ['ser expulsado', 'tarjeta roja'] }
      ],
      grammar: [
        { point: '3人称複数による非人称（lo expulsaron）', ja: '「（誰かが）彼を退場させた」＝「彼は退場になった」。スペイン語は受動態（fue expulsado）よりも、この3人称複数を使うほうがはるかに自然です。動作主が不明・不問のときの標準的な言い方で、日本語の受け身に当たります。会話でも書き言葉でも極めて頻繁に使われます。',
          examples: [{ o: 'Me robaron el móvil.', j: '携帯を盗まれた。' },
                      { o: 'Dicen que va a llover.', j: '雨が降るらしい。' }] },
        { point: 'estaba escrito（結果状態）', ja: 'ここでも estar + 過去分詞。「（運命として）書かれた状態にあった」＝「決まっていた」。Nada de esto estaba escrito. は「こうなる運命ではなかった＝当たり前ではなかった」という決まった言い回しで、スポーツ記事の締めや導入によく使われます。' },
        { point: 'con 18 años / a los 18 años', ja: 'どちらも「18歳で」。con のほうがやや口語的で、スペインで好まれます。a los は書き言葉でも会話でも通用する標準形。' }
      ],
      nuance: 'Nada de esto estaba escrito. は直訳すると「これらのどれも書かれていなかった」。運命の書に記されていた必然ではなかった、という含意です。栄光の物語を語る前に置くことで、その後の20年の重みを際立たせています。'
    },
    {
      id: 'es-messi-9',
      text: 'Después llegaron una final del Mundial perdida en 2014, tres finales de Copa América perdidas y, en 2016, un primer anuncio de retirada del que {{se echó atrás}}.',
      ja: 'その後にやってきたのは、2014年に落としたワールドカップ決勝、3度のコパ・アメリカ決勝での敗戦、そして2016年の最初の引退表明 ― これは後に撤回された。',
      vocab: [
        { term: 'se echó atrás', pos: 'v. (echarse atrás)', ja: '前言を撤回する、引き下がる',
          note: 'echar（投げる）＋se＋atrás（後ろへ）＝「自分を後ろに投げる」→「思いとどまる・撤回する」。契約や約束を反故にする場合にも使う、非常に日常的な表現です。',
          collocations: ['echarse atrás en el último momento'],
          examples: [{ o: 'Firmaron el contrato, pero luego se echaron atrás.', j: '契約したのに、後になって撤回した。' }] },
        { term: 'retirada', pos: 'n.f.', ja: '引退、撤退',
          note: 'retirarse（引退する・退く）の名詞形。anunciar su retirada＝引退を表明する。中南米では retiro（男性名詞）を使うことが多く、これも地域差の例です（アルゼンチン紙では su retiro）。',
          collocations: ['anunciar la retirada', 'salir del retiro'] }
      ],
      grammar: [
        { point: '前置詞 + 関係代名詞 del que', ja: 'echarse atrás de algo（〜を撤回する）なので、関係節では de + el que → del que となります。スペイン語は英語と違い、前置詞を文末に残せません（× un anuncio que se echó atrás de）。前置詞は必ず関係代名詞の前に置きます。日本人が最も間違えやすい構造のひとつです。',
          examples: [{ o: 'Es el libro del que te hablé.', j: '君に話したあの本だよ。' },
                      { o: 'La casa en la que vivo es pequeña.', j: '私が住んでいる家は小さい。' }] },
        { point: '過去分詞の後置修飾 una final perdida', ja: '「失われた決勝」＝落とした決勝戦。名詞の後ろに過去分詞を置いて形容詞的に使います。性数一致が必要：una final perdida（女性単数）／tres finales perdidas（女性複数）。' },
        { point: '動詞の位置 Después llegaron una final…', ja: '主語（una final…, tres finales… y un anuncio…）が動詞 llegaron の後ろに来ています。スペイン語は新情報を後ろに置く傾向が強く、この語順は完全に自然です。日本語も「その後にやってきたのは〜」と訳せば同じ効果が出ます。' }
      ]
    },
    {
      id: 'es-messi-10',
      text: 'La recompensa llegó tarde: la Copa América de 2021, la Finalissima de 2022, el Mundial de Qatar y otra Copa América en 2024.',
      ja: '報われるのは遅かった。2021年のコパ・アメリカ、2022年のフィナリッシマ、カタール・ワールドカップ、そして2024年のもう一度のコパ・アメリカ。',
      vocab: [
        { term: 'recompensa', pos: 'n.f.', ja: '報い、報酬',
          note: 'recompensar（報いる）から。como recompensa＝報酬として。日本語の「ご褒美」に近い温度で、努力の見返りという含みがあります。',
          collocations: ['una justa recompensa', 'como recompensa'] },
        { term: 'llegar tarde', pos: 'loc. v.', ja: '遅れて来る、遅刻する',
          note: '文字通りにも比喩的にも使えます。ここは「（報いが）来るのが遅かった」。人について言えば「遅刻する」。反対は llegar temprano / a tiempo（時間どおりに）。',
          collocations: ['llegar tarde al trabajo', 'llegar a tiempo'] }
      ],
      grammar: [
        { point: '定冠詞と年号 la Copa América de 2021', ja: '大会名には定冠詞をつけ、年は de + 数字 または en + 数字 で示します。この文では de 2021 / de 2022 と en 2024 が混在していますが、どちらも正しく、リズムのために変えているだけです。' },
        { point: 'otra + 名詞（もう一つの）', ja: '「もう一度の」。× una otra とは言えません（英語の another one に当たる形はスペイン語にない）。otro/otra は単独で冠詞なしに使うのが原則です。日本人が最も余分な un/una を入れてしまう箇所。',
          examples: [{ o: '¿Quieres otro café?', j: 'コーヒーをもう一杯どう？' }] }
      ]
    },
    {
      id: 'es-messi-11',
      text: '"Amo, amé y amaré siempre estar en la Selección", escribió. "Ahora voy a ser uno más de ustedes, alentando y {{bancando}} siempre desde afuera."',
      ja: '「代表にいることを、愛しているし、愛してきたし、これからもずっと愛し続ける」と彼は書いた。「これからは僕も君たちの一人だ。外からずっと声援を送り、支え続ける」。',
      vocab: [
        { term: 'bancando', pos: 'v. (bancar・現在分詞)', ja: '（リオプラテンセ）支える、応援し続ける、我慢する',
          note: '⚠️ アルゼンチン・ウルグアイ特有の動詞です。スペインでは通じないか、別の意味に取られます。「金銭的に支える」から「精神的に支える・こらえる」へ広がった語で、サッカーの応援では「どんなときも味方でいる」という強い意味を持ちます。スペイン標準語なら apoyar。',
          collocations: ['bancar a alguien', 'bancársela'],
          examples: [{ o: 'Siempre te vamos a bancar.', j: '（亜）僕らはいつでも君の味方だよ。' }] },
        { term: 'alentando', pos: 'v. (alentar)', ja: '声援を送る、励ます',
          note: 'aliento（息・激励）から。e→ie の語幹母音変化動詞（aliento, alientas, alienta…）。中南米のサッカー文脈では「スタンドから歌って応援する」ことを指します。',
          collocations: ['alentar al equipo', 'palabras de aliento'] },
        { term: 'ustedes', pos: 'pron.', ja: '（中南米）君たち、あなたがた',
          note: '中南米全域では、親しい相手にも ustedes を使います。スペインでは親しい複数は vosotros、丁寧な複数が ustedes という区別があります。メッシがファンに向かって ustedes と言うのは、アルゼンチンではごく自然な二人称複数です。',
          collocations: ['ustedes son', 'vosotros sois'] }
      ],
      grammar: [
        { point: 'Amo, amé y amaré — 現在・点過去・未来の三連', ja: 'この一節がこの記事の白眉です。同じ動詞を現在・点過去・未来で並べ、「今も・かつても・これからも」を一息に言い切っています。日本語では「愛しているし、愛してきたし、これからも愛する」と3つに割るしかありません。スペイン語の活用が持つ表現力を、これ以上ないほど鮮やかに使った例です。',
          examples: [{ o: 'Lo dije, lo digo y lo diré.', j: '私はそう言ったし、今も言うし、これからも言う。' }] },
        { point: 'uno más de ustedes', ja: '「君たちのうちのもう一人」＝「これからは自分もただのファンの一人だ」。uno más de + 集団 は「その中の一員にすぎない」という謙遜の定型です。' },
        { point: '現在分詞（gerundio）による付帯状況', ja: 'alentando y bancando＝「声援を送りながら、支えながら」。gerundio は「〜しながら」という同時進行を表します。英語の -ing と似ていますが、スペイン語の gerundio は名詞にはなれない（主語になれない）点が決定的に違います。',
          examples: [{ o: 'Salió corriendo.', j: '走って出ていった。' }] },
        { point: 'desde afuera / desde fuera', ja: 'afuera は中南米で好まれ、スペインでは fuera が一般的。どちらも「外から」。前置詞 desde（〜から）と組み合わさっています。' }
      ],
      nuance: 'この最後の一文には、アルゼンチンのスペイン語が凝縮されています。ustedes（vosotros ではなく）、bancar（apoyar ではなく）、afuera（fuera ではなく）。教科書で学ぶスペイン（イベリア）のスペイン語しか知らないと、母語話者の感情がこもった文章ほど読めなくなる ― その事実を、この一文が教えてくれます。'
    }
  ],

  guide: [
    'リオネル・メッシが8月31日、インスタグラムでアルゼンチン代表からの引退を発表しました。39歳。代表通算207試合・125得点は、いずれもアルゼンチン史上最多です。',
    '本人の説明によれば、この文章を書いたのは7月21日 ― 2026年ワールドカップ決勝でスペインに0-1で敗れたわずか2日後でした。しかしそのときは公開しませんでした。8月8日、父ホルヘ・メッシさんがロサリオで亡くなり、それが「すでに決まっていた決断」を最終的に固めた、と本人は記しています。',
    '最後の試合は7月19日、ニュージャージーでの決勝。フェラン・トーレスが延長で決めた1点にアルゼンチンは沈みました。それでもメッシはこの大会で8得点4アシストを記録し、得点ランキングではエムバペに次ぐ2位でした。39歳の数字としては驚異的です。',
    '代表としての道のりは平坦ではありませんでした。デビューは2005年8月17日、18歳、ブダペストでの親善試合。途中出場して47秒で退場という、これ以上ない不吉な始まりでした。2014年のワールドカップ決勝で敗れ、コパ・アメリカの決勝でも3度敗れ、2016年には一度引退を表明して撤回しています。報われたのは2021年のコパ・アメリカ以降 ― フィナリッシマ、カタール・ワールドカップ、そして2024年のコパ・アメリカでした。',
    '語学の観点では、この記事は「教科書のスペイン語」と「実際に人が話すスペイン語」の距離を測るのに最適です。とくに最後の一文 ― Amo, amé y amaré（現在・点過去・未来の三連）、ustedes（中南米の二人称複数）、bancando（アルゼンチン特有の動詞）、desde afuera（中南米の語形）。これらはスペインの教材では出会いにくく、しかし中南米のスペイン語話者と話すなら必ず出会う要素です。'
  ],

  deepdive: [
    {
      title: 'Vocabulary｜スペインと中南米で違う語',
      items: [
        { term: 'bancar (arg./uru.) ↔ apoyar', ja: '支える・応援する',
          note: 'リオプラテンセ地域の代表的な動詞。te banco＝「君の味方だよ」。スペインで使っても伝わりません。同地域には他にも boludo（呼びかけ／罵倒）、laburo（仕事＝trabajo）、pibe（少年）など、イタリア移民の影響を受けた語彙が豊富です。' },
        { term: 'retirada (esp.) ↔ retiro (am.)', ja: '引退',
          note: 'スペイン紙は su retirada、アルゼンチン紙は su retiro と書きます。名詞の性まで変わる（女性／男性）ので注意。同じ現象：la computadora（米）／el ordenador（西）。' },
        { term: 'prórroga (esp.) ↔ alargue / tiempo extra (am.)', ja: '延長戦',
          note: 'サッカー用語は地域差の宝庫です。penaltis（西）／penales（米）、portero（西）／arquero（南米）／portero・guardameta（中米）、césped（西）／cancha（米）。' },
        { term: 'ustedes ↔ vosotros', ja: '二人称複数',
          note: '中南米には vosotros が存在せず、親しい相手にも ustedes（3人称複数活用）を使います。スペインの教材で vosotros の活用を覚えても、中南米では一度も使わないまま終わる可能性が高い ― という現実は知っておくべきです。',
          examples: [{ o: '¿Ustedes vienen? (am.) / ¿Vosotros venís? (esp.)', j: '君たちは来る？' }] },
        { term: 'voseo', ja: 'tú ではなく vos',
          note: 'アルゼンチン・ウルグアイ・パラグアイ、中米の一部では2人称単数に vos を使い、活用も変わります：vos tenés（tú tienes）、vos sos（tú eres）、vení（ven）。メッシのインタビュー音声を聞くと必ず出てきます。',
          examples: [{ o: '¿Vos qué pensás?', j: '（亜）君はどう思う？' }] }
      ]
    },
    {
      title: 'Grammar｜点過去と線過去、そして接続法',
      items: [
        { term: 'pretérito indefinido（点過去）', ja: '完結した出来事',
          note: 'anunció, escribió, debutó, llegaron, ganó。「いつ起きたか」が言える一回の出来事に使います。この記事が点過去だらけなのは、報道が「何が起きたか」を語るジャンルだからです。' },
        { term: 'pretérito imperfecto（線過去）', ja: '背景・継続・状態',
          note: 'estaba tomada, estaba escrito。「そのときどういう状態だったか」を描写します。物語では「点過去＝出来事／線過去＝背景」という役割分担が明確です。',
          examples: [{ o: 'Llovía cuando salí.', j: '出かけたとき雨が降っていた。（llovía＝背景／salí＝出来事）' }] },
        { term: 'subjuntivo（接続法）が出る場所', ja: 'この記事では que probablemente tarden の1か所',
          note: '接続法は「事実として断定しない」ときに現れます。①未確定の先行詞を修飾する関係節 ②感情・願望・疑いの後 ③aunque が仮定のとき ④目的の para que。この記事のように報道文では、事実を述べる部分は直説法が中心で、接続法は推測や評価の箇所に限られます。この分布そのものが理解の手がかりになります。' },
        { term: 'ser / estar + 過去分詞', ja: '受動態と結果状態',
          note: 'fue expulsado（退場させられた＝動作）／estaba escrito（書かれていた＝状態）。さらにスペイン語は受動態そのものを避け、lo expulsaron（3人称複数の非人称）や se + 動詞（se vende＝売られている）で表すことのほうが多い、という点も重要です。' }
      ]
    },
    {
      title: 'Expressions｜感情を語る決まり文句',
      open: false,
      items: [
        { term: 'doler en el alma', ja: '魂に痛む＝心底つらい',
          note: 'me duele en el alma. 身体の痛みの表現（me duele la cabeza）を心に転用した、非常に強い言い方です。' },
        { term: 'dar(lo) todo / vaciarse', ja: 'すべてを出し切る',
          note: 'siempre dejé todo（いつも全部置いてきた＝出し尽くした）というメッシの言葉もこの系統。スポーツの別れの場面の定番語彙群です。' },
        { term: 'echarse atrás', ja: '前言を撤回する',
          note: 'ビジネスでも日常でも使えます。同義：dar marcha atrás（後退する＝撤回する）。この記事の元になった報道でも dio marcha atrás が使われています。' },
        { term: 'no estaba escrito', ja: '決まった運命ではなかった',
          note: 'estar escrito は「運命として書かれている」。Estaba escrito.（そうなる運命だった）／No estaba escrito.（当たり前ではなかった）。スポーツ記事とドラマの定番句です。' },
        { term: 'uno más', ja: '（その他大勢の）一人',
          note: 'ser uno más＝特別扱いされない一員になる。ser uno más del equipo（チームの一員として溶け込む）。謙遜の表現としてよく使われます。' }
      ]
    }
  ],

  breakdown: [
    {
      text: '"Amo, amé y amaré siempre estar en la Selección", escribió.',
      structure: '<code>Amo</code>〈現在〉, <code>amé</code>〈点過去〉 y <code>amaré</code>〈未来〉 + <code>siempre</code>〈副詞〉 + <code>estar en la Selección</code>〈3つの動詞に共通する目的語＝不定詞句〉, <code>escribió</code>〈伝達動詞〉',
      grammar: '3つの活用形が1つの不定詞句（estar en la Selección）を共有しています。スペイン語は活用語尾だけで人称と時制を担うため、こうした「動詞だけを並べる」修辞が可能です。英語なら I love, I have loved and I will always love… と主語を繰り返す必要があり、日本語なら3文に割る必要があります。',
      vocab: 'amar（愛する）／la Selección（代表チーム）／siempre（いつも）',
      literal: '「私は代表にいることを愛し、愛した、そして常に愛するだろう」と彼は書いた。',
      natural: '「代表にいることを、愛しているし、愛してきたし、これからもずっと愛し続ける」と彼は書いた。',
      nuance: '直訳では3つの時制がただ並んでいるだけに見えますが、原文の力は「一息で言い切っている」ことにあります。日本語訳で「〜し、〜し、〜し続ける」と畳みかけるリズムを保つと、その勢いが残ります。訳とは、意味だけでなくリズムを移す作業でもあります。'
    },
    {
      text: 'Después llegaron una final del Mundial perdida en 2014, tres finales de Copa América perdidas y, en 2016, un primer anuncio de retirada del que se echó atrás.',
      structure: '<code>Después</code>〈時〉 <code>llegaron</code>〈V・複数〉 + 主語3つ： ① <code>una final del Mundial perdida en 2014</code> ② <code>tres finales de Copa América perdidas</code> ③ <code>un primer anuncio de retirada [ del que se echó atrás ]</code>〈関係節つき〉',
      grammar: '動詞が主語より前に出る倒置。主語が3つ並び、しかもそれぞれに修飾がついているため、後置したほうが読みやすくなります。perdida / perdidas は過去分詞の後置修飾で、先行する名詞と性数一致。del que は de + el que で、echarse atrás de の de を関係代名詞の前に引き出した形です。',
      vocab: 'final（決勝）／perdida（落とした）／anuncio de retirada（引退表明）／echarse atrás（撤回する）',
      literal: 'その後、2014年に失われたワールドカップの決勝、3つの失われたコパ・アメリカの決勝、そして2016年に、それから後ろへ身を引いたところの最初の引退の発表が到来した。',
      natural: 'その後にやってきたのは、2014年に落としたワールドカップ決勝、コパ・アメリカ決勝での3度の敗戦、そして2016年の最初の引退表明 ― のちに撤回された ― だった。',
      nuance: 'llegaron（やってきた）という動詞に注目してください。「敗北が到来した」という擬人的な言い方で、本人の意志とは関係なく降りかかってきた、という感じを出しています。日本語で「〜があった」と平板に訳すとこの含みが消えるので、「やってきたのは〜」と語順を保つのが効果的です。'
    }
  ],

  tryit: [
    { q: '「彼女は3年前にそう言ったし、今もそう思っている」を、点過去と現在形の並置で書いてみましょう。',
      hint: 'decir と seguir pensando を使います。',
      a: 'Lo dijo hace tres años y lo sigue pensando.',
      aj: '彼女は3年前にそう言ったし、今もそう思っている。',
      why: 'hace + 期間＝「〜前に」。seguir + 現在分詞＝「〜し続ける」。lo は前に述べた内容を受ける中性代名詞で、スペイン語では文の内容全体を lo で受けられます。' },
    { q: '「たとえ高くても買います」と「高いけれど買います」を、それぞれスペイン語で書き分けてみましょう。',
      hint: 'aunque + 接続法／直説法。',
      a: 'Aunque sea caro, lo compro. / Aunque es caro, lo compro.',
      aj: 'たとえ高くても買います。／高いけれど買います。',
      why: '接続法 sea は「まだ高いかどうか分からない・仮定」、直説法 es は「実際に高いと分かっている」。同じ日本語でも、話し手が事実を知っているかどうかで形が変わります。' },
    { q: '「君に話したあの映画だよ」を、前置詞つき関係代名詞を使って書いてみましょう。',
      hint: 'hablar de algo なので de が必要です。',
      a: 'Es la película de la que te hablé.',
      aj: '君に話したあの映画だよ。',
      why: 'hablar de（〜について話す）の de を関係代名詞の前に置きます。× la película que te hablé de は不可。スペイン語では前置詞を文末に残せません。先行詞が女性単数なので la que。' },
    { q: '「携帯を盗まれた」を、受動態を使わずにスペイン語らしく書いてみましょう。',
      hint: '3人称複数の非人称を使います。',
      a: 'Me robaron el móvil.',
      aj: '携帯を盗まれた。',
      why: '直訳は「（誰かが）私に携帯を盗んだ」。Mi móvil fue robado は文法的には正しいものの、話し言葉としては不自然です。日本語の受け身は、スペイン語では3人称複数か se で表すのが自然、と覚えておくと表現力が一段上がります。' }
  ],

  talk: [
    { q: '¿Qué te pareció la despedida de Messi?',
      qj: 'メッシの引退についてどう思いましたか。',
      a: 'Me pareció muy honesta. Eso de "me vacié" lo dice todo, ¿no?',
      aj: 'とても誠実だと思いました。「出し切った」という言葉に全部詰まっていますよね。',
      note: '¿Qué te pareció…? は感想を尋ねる最頻出表現。Eso de「〜」は「あの『〜』という言葉」と引用を指す口語表現で、非常に便利です。lo dice todo＝「それがすべてを物語る」。' },
    { q: '¿En Japón hay algún deportista con una despedida parecida?',
      qj: '日本にも似たような引退をしたスポーツ選手はいますか。',
      a: 'Sí, cuando Ichiro se retiró fue algo parecido. Mucha gente lloró, y eso que él estaba tranquilo.',
      aj: 'ええ、イチローが引退したときが似ていました。多くの人が泣きました ― 本人はいたって落ち着いていたのに。',
      note: 'y eso que…＝「〜なのに」という口語の譲歩表現で、驚きや意外さを添えます。aunque より会話的で、覚えておくと一気にこなれた話し方になります。' },
    { q: '¿Vos seguís el fútbol?',
      qj: '（アルゼンチン風に）サッカーは見ますか。',
      a: 'No mucho, la verdad. Pero los mundiales sí los veo, como todo el mundo.',
      aj: '正直そんなには。でもワールドカップは見ますよ、みんなと同じで。',
      note: '質問の Vos seguís は voseo（tú sigues に相当）。答えの los mundiales sí los veo は、目的語を文頭に出して代名詞で受け直す「左方転位」で、話し言葉では非常によく使います。la verdad は「正直なところ」。' }
  ],

  sources: [
    { outlet: 'BBC Mundo', title: '"Me vacié, ya no tengo más para dar": Messi anuncia su retirada de la selección argentina',
      date: '2026-08-31', url: 'https://www.bbc.com/mundo/articles/cp8dkw2z2wyo', accessed: '2026-09-01' },
    { outlet: 'BBC 中文', title: '梅西退出阿根廷國家隊：「已沒什麼可以再付出了」',
      date: '2026-09-01', url: 'https://www.bbc.com/zhongwen/articles/cp8dkp32xndo/simp', accessed: '2026-09-01' }
  ]
},

/* ══════════════════════════════════════════════════════════ */
{
  id: 'es-pulpo',
  lang: 'es',
  category: 'Gastronomía / Cultura · Galicia',
  level: 'B1–B2',
  headline: {
    orig: 'La pizza de pulpo le sale competidora a la tortilla más famosa de España',
    ja: 'タコのピザが、スペインでいちばん有名なトルティージャのライバルになった'
  },
  why: 'ガリシアの小さな町ベタンソスは、ほとんど固めない「ほぼ液状」のトルティージャで全国に知られてきました。ところが今年4月、地元の料理人がタコのピザでスペイン一のピッツァ賞を獲り、町を訪れる目的が変わり始めている ― そんな話です。ハードニュースからは絶対に見えてこない「その土地らしさ」があり、食べ物の話は外国人との会話でいちばん役に立つ話題でもあります。料理のスペイン語は動詞と口語表現の宝庫です。',

  body: [
    {
      id: 'es-pulpo-1',
      text: 'A la tortilla más famosa de España {{le ha salido}} competidora, y lleva pulpo por encima.',
      ja: 'スペインでいちばん有名なトルティージャに、ライバルが現れた。しかもその上にはタコが載っている。',
      literal: 'スペインで最も有名なトルティージャに競争相手が出てきた。そしてそれは上にタコを運んでいる。',
      vocab: [
        { term: 'le ha salido', pos: 'v. (salirle a alguien)', ja: '〜に（思いがけず）現れる、出てくる',
          note: 'salir（出る）＋間接目的語＝「（その人にとって）〜が出てきた」。Le ha salido un competidor＝「彼にライバルが現れた」。話し手の予期しない出来事という含みがあり、口語で非常によく使います。',
          collocations: ['le salió un problema', 'me salió un trabajo'],
          examples: [{ o: 'Me ha salido una oportunidad muy buena.', j: 'とてもいい機会が舞い込んできた。' }] },
        { term: 'por encima', pos: 'loc. adv.', ja: '上に、表面に',
          note: '料理では「トッピングとして上に載っている」。ほかに por encima de（〜を超えて）、leer por encima（ざっと目を通す）という重要な用法もあります。',
          collocations: ['por encima de todo', 'echar un vistazo por encima'] }
      ],
      grammar: [
        { point: '間接目的語の重複（A la tortilla … le ha salido）', ja: 'スペイン語では、間接目的語を名詞で示すときも代名詞 le を必ず併用します。A María le gusta / A la tortilla le ha salido…。この重複は省略できません（× A la tortilla ha salido competidora）。日本人が最も落としやすい要素のひとつです。',
          examples: [{ o: 'A mis padres les encanta viajar.', j: '両親は旅行が大好きだ。' }] },
        { point: '現在完了 ha salido', ja: 'スペイン（イベリア）では「今につながる最近の出来事」に現在完了を使います。中南米の多くの地域では同じ場面で点過去（le salió）を使うのが普通で、これは非常に大きな地域差です。この記事がスペインの新聞に載っていることが、時制からも分かります。',
          compare: 'Hoy he comido paella.（西）／Hoy comí paella.（米）― どちらも「今日パエリアを食べた」。' },
        { point: '無冠詞の competidora', ja: '「（ある一人の）ライバル」を初めて話題に出すとき、salir のような存在提示の動詞では冠詞を落とすことがあります。ここでは「ライバルというものが出現した」という抽象的な提示。' }
      ],
      nuance: '見出しの妙は、トルティージャ（卵とじゃがいも）とピザ（タコ載せ）という、まったく別ジャンルのものを「競合」として並べたところにあります。町の名物が入れ替わりつつある、という状況が一文で伝わります。'
    },
    {
      id: 'es-pulpo-2',
      text: 'Betanzos, una pequeña localidad de la provincia de A Coruña, es conocida en toda España por su tortilla de patatas, que apenas se {{cuaja}} y se sirve casi líquida.',
      ja: 'ア・コルーニャ県の小さな町ベタンソスは、ほとんど固めずに、ほぼ液状のまま供されるじゃがいものトルティージャでスペイン中に知られている。',
      vocab: [
        { term: 'cuaja', pos: 'v. (cuajar)', ja: '（卵などが）固まる、凝固する',
          note: '料理の必須動詞。cuajar la tortilla＝トルティージャを固める。比喩で「（計画が）実を結ぶ」の意味もあります：el proyecto no cuajó（計画は実現しなかった）。',
          collocations: ['cuajar la tortilla', 'no cuajar la idea'],
          examples: [{ o: 'La idea no cuajó entre los vecinos.', j: 'その案は住民のあいだで根づかなかった。' }] },
        { term: 'localidad', pos: 'n.f.', ja: '町、集落',
          note: 'pueblo（村・町）よりやや行政的・中立的な語で、報道でよく使われます。なお劇場の「席」も localidad（las localidades están agotadas＝完売）。',
          collocations: ['una localidad costera', 'localidades agotadas'] }
      ],
      grammar: [
        { point: 'se + 動詞（受動・非人称の se）', ja: 'se cuaja / se sirve＝「固められる／供される」。動作主を示さない言い方で、スペイン語では受動態（es servida）よりこちらのほうが圧倒的に自然です。料理のレシピはほぼ全編この形で書かれます。',
          examples: [{ o: 'Se sirve frío.', j: '冷やして供します。' },
                      { o: 'Aquí se habla español.', j: 'ここではスペイン語が話されています。' }] },
        { point: '説明的関係節（カンマつきの que）', ja: 'su tortilla de patatas, que apenas se cuaja… のカンマは重要です。カンマなしの限定用法なら「固めないほうのトルティージャ（＝他にも種類がある）」、カンマありの説明用法は「そのトルティージャについて補足すると」。ここは後者で、ベタンソスのトルティージャは1種類しかありません。',
          compare: 'Los alumnos que aprobaron celebraron.（合格した学生だけが祝った）／Los alumnos, que aprobaron, celebraron.（学生たちは、全員合格したのだが、祝った）。' },
        { point: '同格のカンマ Betanzos, una pequeña localidad…,', ja: '固有名詞のあとにカンマで挟んで説明を入れる形。前後両方にカンマが必要です。報道文で人名・地名を初出させるときの標準的な作法。' },
        { point: 'ser conocido por', ja: '「〜で知られている」。por は理由・原因を示します。para にすると意味が通りません。ser conocido como なら「〜という名で知られている」で、意味が変わります。',
          examples: [{ o: 'Es conocido como "el Rey".', j: '彼は「王様」の名で知られている。' }] }
      ]
    },
    {
      id: 'es-pulpo-3',
      text: 'Desde el pasado mes de abril, sin embargo, ocurre algo curioso: hay gente que viaja hasta allí buscando pizza.',
      ja: 'ところが今年4月以降、奇妙なことが起きている。ピザを目当てにこの町までやってくる人がいるのだ。',
      vocab: [
        { term: 'curioso', pos: 'adj.', ja: '不思議な、興味深い／（人が）詮索好きな',
          note: '⚠️ 英語の curious と同じく2つの意味があります。物事について＝「面白い・妙な」、人について＝「知りたがりの」。algo curioso＝「ちょっと妙なこと」。日本語の「キュリオシティ」からは前者の意味が出てこないので注意。',
          collocations: ['un dato curioso', 'es curioso que...'] },
        { term: 'hasta', pos: 'prep.', ja: '〜まで（到達点の強調）',
          note: 'viajar hasta allí＝「そこまでわざわざ行く」。a なら単に「そこへ行く」ですが、hasta にすると「その距離を押して」というニュアンスが加わります。副詞としては「〜さえ」（hasta yo lo sé＝私でさえ知っている）。',
          collocations: ['hasta ahora', 'hasta luego'] }
      ],
      grammar: [
        { point: '関係節の法：hay gente que viaja（直説法）', ja: '「実際にそういう人がいる」ので直説法。もし「そんな人がいればいいのに／いるだろうか」という未確定なら接続法 viaje になります。存在文 hay + 先行詞 のあとの法選択は、スペイン語学習の分かれ道です。',
          compare: 'Busco a alguien que sepa chino.（中国語ができる人を探している＝まだ見つかっていない・接続法）／Conozco a alguien que sabe chino.（知っている＝特定・直説法）。',
          examples: [{ o: 'No hay nadie que lo entienda.', j: 'それを理解できる人は誰もいない（否定＝接続法）。' }] },
        { point: 'gente は単数扱い', ja: 'la gente viaja（× la gente viajan）。集合名詞ですが文法上は単数です。動詞・形容詞も単数で一致させます。日本人だけでなく英語話者も間違えるポイント。' },
        { point: 'gerundio による目的（buscando pizza）', ja: '「ピザを探しながら／ピザを求めて」。厳密には gerundio は目的を表さないとされますが、実際の口語・報道ではこの用法が広く使われます。硬く書くなら en busca de pizza。' },
        { point: 'sin embargo の位置', ja: '「しかしながら」。文頭のほか、この文のようにカンマで挟んで2番目の位置に置くこともできます。位置を動かせるのが接続副詞の特徴で、pero（純粋な接続詞）は必ず文頭・節頭に置かれる点が違います。' }
      ]
    },
    {
      id: 'es-pulpo-4',
      text: 'Ese mes, el cocinero Antón Belmonte ganó el premio a la mejor pizza napolitana contemporánea de España con una pizza de pulpo.',
      ja: 'その月、料理人アントン・ベルモンテがタコのピザで、スペイン最優秀コンテンポラリー・ナポリピッツァ賞を受賞した。',
      vocab: [
        { term: 'cocinero', pos: 'n.m.', ja: '料理人、コック',
          note: 'cocinar（料理する）＋-ero（〜する人）。同じ造語法で panadero（パン屋）、carnicero（肉屋）、zapatero（靴屋）。より格の高い「シェフ」は chef（フランス語からの借用）。' },
        { term: 'premio a', pos: 'n.m. + prep.', ja: '〜賞',
          note: '⚠️ 前置詞は a です（× premio de）。el premio a la mejor película＝最優秀作品賞。一方「〜からの賞」は premio de。ganar un premio＝受賞する、llevarse el premio＝賞をさらう。',
          collocations: ['el premio a la mejor actriz', 'ganar un premio'] }
      ],
      grammar: [
        { point: '前置詞 con（手段）', ja: 'ganó … con una pizza de pulpo＝「タコのピザで（＝それを使って）受賞した」。con は道具・手段を表す最も基本的な前置詞です。por にすると「タコのピザのおかげで／のせいで」となり、因果のニュアンスに変わります。' },
        { point: '形容詞の位置', ja: 'la mejor pizza napolitana contemporánea。mejor のような評価の形容詞は名詞の前、napolitana / contemporánea のような分類の形容詞は名詞の後ろ ― これがスペイン語の原則です。位置が意味を変える例：un gran hombre（偉大な人）／un hombre grande（大柄な人）。',
          examples: [{ o: 'una vieja amiga / una amiga vieja', j: '昔からの友人／年老いた友人' }] },
        { point: '職業名の前の定冠詞', ja: 'el cocinero Antón Belmonte＝「料理人のアントン・ベルモンテ」。スペイン語では肩書き＋人名に定冠詞を付けます（el presidente Sánchez）。ただし呼びかけでは付けません（Buenos días, presidente）。' }
      ]
    },
    {
      id: 'es-pulpo-5',
      text: '"La tenía en carta, pero {{le metí}} los grelos y los langostinos marinados en kimchi", explica. "La idea surge del producto cercano, de lo que estamos acostumbrados a comer."',
      ja: '「もともとメニューには載せていたんですが、そこにグレロスと、キムチに漬けたエビを入れたんです」と彼は説明する。「発想は地元の食材から、自分たちがふだん食べているものから来ています」。',
      vocab: [
        { term: 'le metí', pos: 'v. (meter)', ja: '（そこに）入れた、突っ込んだ',
          note: 'meter は「入れる」の口語的な動詞。poner（置く）より雑で勢いがあり、料理人の話し言葉らしさが出ます。le は「そのピザに」を指す間接目的語。meterle algo a algo＝「〜に…をぶち込む」。',
          collocations: ['meter la pata (へまをする)', 'meterse en líos'],
          examples: [{ o: 'Le metí un poco de picante.', j: '少し辛みを効かせてみた。' }] },
        { term: 'en carta', pos: 'loc.', ja: 'メニューに載せて',
          note: 'la carta＝（レストランの）メニュー表。tener algo en carta＝メニューに載せている。⚠️ el menú はスペインでは「日替わり定食（menú del día）」を指すことが多く、日本語の「メニュー」とはずれます。中南米では menú がメニュー表の意味でも使われます。',
          collocations: ['la carta de vinos', 'menú del día'] },
        { term: 'grelos', pos: 'n.m.pl.', ja: 'グレロス（カブの若葉・菜の花に似た葉物）',
          note: 'ガリシア料理を代表する野菜で、lacón con grelos（豚肩肉とグレロス）は同地方の郷土料理。日本語に定訳がなく、「カブの若菜」と説明するしかない、まさに現地語でしか出会えない語です。' },
        { term: 'langostinos', pos: 'n.m.pl.', ja: 'クルマエビ類の大きめのエビ',
          note: 'エビの呼び分けはスペイン語圏でかなり細かい：gamba（小〜中）、langostino（大）、camarón（中南米で広く「エビ」）、cigala（アカザエビ）、langosta（イセエビ）。langosta には「バッタ」の意味もあります。' }
      ],
      grammar: [
        { point: '線過去 tenía と点過去 metí の対比', ja: 'この一文はスペイン語の時制対比の教科書的な例です。La tenía en carta＝「（以前から継続して）メニューに載せていた」＝背景・状態＝線過去。le metí＝「（あるとき一回）入れた」＝出来事＝点過去。この2つが同じ文に並ぶことで、「もともとあったもの」と「そこで加えた変化」がはっきり分かれます。',
          examples: [{ o: 'Vivía en Madrid cuando conocí a mi mujer.', j: '妻と出会ったときはマドリードに住んでいた。（住んでいた＝背景／出会った＝出来事）' }] },
        { point: 'estar acostumbrado a + inf.', ja: '「〜するのに慣れている」。前置詞は a で固定です（× acostumbrado de）。acostumbrarse a algo＝〜に慣れる。lo que estamos acostumbrados a comer＝「私たちが食べ慣れているもの」。',
          examples: [{ o: 'No estoy acostumbrado a madrugar.', j: '早起きには慣れていない。' }] },
        { point: '中性の lo que', ja: '「〜であるところのもの（こと）」。特定の名詞ではなく漠然とした内容を指します。lo que quiero es…（私が望むのは…）、lo bueno（良いところ）。英語の what に相当し、非常に使用頻度が高い形です。' }
      ]
    },
    {
      id: 'es-pulpo-6',
      text: 'Tras el certamen, un vídeo {{se viralizó}} en TikTok e Instagram y empezaron a llegar visitantes que querían probarla.',
      ja: 'コンテストのあと、ある動画がTikTokとインスタグラムで拡散し、それを食べてみたいという客が訪れ始めた。',
      vocab: [
        { term: 'se viralizó', pos: 'v. (viralizarse)', ja: 'バズる、拡散する',
          note: 'viral（ウイルス性の）から作られた新しい動詞。hacerse viral（バズる）とも言います。SNS時代のスペイン語を代表する語で、辞書に載り始めたのはごく最近です。',
          collocations: ['hacerse viral', 'un vídeo viral'],
          examples: [{ o: 'El vídeo se hizo viral en pocas horas.', j: 'その動画は数時間で拡散した。' }] },
        { term: 'certamen', pos: 'n.m.', ja: 'コンクール、コンテスト',
          note: 'concurso（コンテスト）より格式の高い語で、芸術・文学・料理の賞に使われます。un certamen literario＝文学賞。',
          collocations: ['certamen internacional', 'participar en un certamen'] }
      ],
      grammar: [
        { point: '接続詞 y → e の変化', ja: 'TikTok e Instagram。y の直後の語が i- または hi- の音で始まるとき、y は e になります（発音の重なりを避けるため）。同様に o は o- / ho- の前で u になります：siete u ocho（7か8）。書き取りでよく問われる規則です。',
          examples: [{ o: 'madre e hija', j: '母と娘' },
                      { o: 'uno u otro', j: 'どちらか一方' }] },
        { point: 'empezar a + 不定詞', ja: '「〜し始める」。前置詞 a が必須です（× empezar llegar）。同じく a を取る動詞：aprender a, ayudar a, volver a（再び〜する）, ir a。一方 dejar de（〜をやめる）、terminar de（〜し終える）は de を取ります。この前置詞のセットは丸ごと覚えるしかありません。' },
        { point: '関係節の法：visitantes que querían probarla', ja: '直説法 querían。「実際にそういう客が来た」からです。もし「食べてみたい客がいれば」という仮定なら quisieran / quieran。すでに存在が確認された対象を修飾するときは直説法、という原則の確認になります。' },
        { point: 'tras と después de', ja: 'tras el certamen＝después del certamen。tras のほうが書き言葉的で簡潔なため、新聞で好まれます。ただし tras には「〜を追って」の意味もあります（correr tras el ladrón）。' }
      ]
    },
    {
      id: 'es-pulpo-7',
      text: 'Belmonte {{regenta}} Adega do Pino, un local de pinchos y vinos, y empezó a hacer pizzas durante la pandemia, cuando no podía abrir por la noche.',
      ja: 'ベルモンテはピンチョスとワインの店「アデガ・ド・ピノ」を営んでおり、夜の営業ができなかったパンデミックの時期にピザを作り始めた。',
      vocab: [
        { term: 'regenta', pos: 'v. (regentar)', ja: '（店・事業を）経営する、切り盛りする',
          note: 'やや文語的で、報道が店主を紹介するときに好んで使います。日常会話なら tener un bar / llevar un bar。llevar は「（店を）回している」という実務的な響き。',
          collocations: ['regentar un negocio', 'llevar un bar'] },
        { term: 'pinchos', pos: 'n.m.pl.', ja: 'ピンチョス（串や楊枝で留めた小さなつまみ）',
          note: '本来「串・とがったもの」。バスク地方・北スペインの食文化を代表する語です。tapa（小皿のつまみ）とは厳密には別物で、pincho は楊枝で留めてパンに載せるものを指します。ir de pinchos＝ピンチョスをはしごする。',
          collocations: ['ir de pinchos', 'un pincho de tortilla'] },
        { term: 'local', pos: 'n.m.', ja: '店舗、店',
          note: '⚠️ 形容詞の「地元の」（producto local）と同じ形ですが、男性名詞では「店・営業スペース」を指します。un local de copas＝バー。日本語の「ローカル」からは出てこない意味です。',
          collocations: ['abrir un local', 'local comercial'] }
      ],
      grammar: [
        { point: '線過去 podía（背景の状態）', ja: 'cuando no podía abrir por la noche＝「夜に開けられなかった時期に」。継続的な状態なので線過去。点過去 no pudo abrir なら「（あるとき一度）開けられなかった」という一回の出来事になり、パンデミック期間全体の描写にはなりません。',
          compare: 'No podía dormir.（眠れない状態が続いていた）／No pude dormir.（あの晩は眠れなかった）。' },
        { point: 'por la noche / de noche / en la noche', ja: 'スペインでは por la noche が標準。de noche は「夜間に（総称的）」。en la noche は中南米で一般的です。時間帯の言い方は地域差が出るところ：a las tres de la tarde（午後3時に）は共通。' },
        { point: 'ガリシア語の店名 Adega do Pino', ja: 'Adega＝ワイン蔵（スペイン語なら bodega）、do＝de + o（＝del）。ガリシア州では公用語のガリシア語（gallego）とスペイン語が併用され、店名や地名にガリシア語形がそのまま残ります。スペイン語圏を旅すると、こうした地域言語に必ず出会います。' }
      ]
    },
    {
      id: 'es-pulpo-8',
      text: 'No es el único: en Sinuessa, un restaurante italiano con más de cuatro décadas en el pueblo, la preparan desde antes de la pandemia, y sus dueños llegaron a ganar tres veces el concurso local de tortilla.',
      ja: '彼だけではない。町で40年以上続くイタリア料理店シヌエッサでは、パンデミックより前から作っている。しかもその店の主人たちは、地元のトルティージャ・コンテストで3度も優勝している。',
      vocab: [
        { term: 'dueños', pos: 'n.m.pl.', ja: '（店・物の）持ち主、経営者',
          note: 'el dueño / la dueña。propietario（所有者）より日常的です。ser dueño de sí mismo＝自制心がある。「飼い主」も dueño。',
          collocations: ['el dueño del bar', 'cambiar de dueño'] },
        { term: 'décadas', pos: 'n.f.pl.', ja: '10年間',
          note: 'con más de cuatro décadas＝40年以上。報道では años より décadas を使って年月の長さを印象づけます。同じく siglo（世紀）、quinquenio（5年間）。',
          collocations: ['a lo largo de tres décadas'] }
      ],
      grammar: [
        { point: 'llegar a + 不定詞', ja: '「〜するまでに至る／〜しさえする」。単に ganaron（勝った）と言うより、「なんと3度も優勝するに至った」という驚きが加わります。llegar a ser＝〜になる（到達する）。話者の評価を込められる便利な迂言法です。',
          compare: 'Ganaron tres veces.（3度勝った・事実）／Llegaron a ganar tres veces.（3度も勝った・驚き）。',
          examples: [{ o: 'Llegó a ser director.', j: '彼はついに部長にまでなった。' }] },
        { point: 'desde antes de + 名詞', ja: '「〜より前から（ずっと）」。前置詞が3つ重なる形ですが、これで一つのまとまりです。desde（起点）＋antes de（〜の前）。desde hace（〜前から）と混同しないように：Vivo aquí desde hace dos años.（2年前からここに住んでいる）。' },
        { point: 'la preparan — 目的語代名詞の指すもの', ja: 'la は前に出てきた la pizza de pulpo を受けています。スペイン語は代名詞で既出のものを受けるので、何を指しているかを常に追う必要があります。女性単数なので la、男性単数なら lo。' },
        { point: 'コロンによる展開', ja: 'No es el único: … 「彼だけではない ― というのも、…」。コロンが「その根拠はこうだ」と続きを導いています。スペイン語のコロンは英語より説明的な用法が広いのが特徴です。' }
      ]
    },
    {
      id: 'es-pulpo-9',
      text: 'En la vinoteca La Travesía, abierta en 2025 por las hermanas venezolanas Mariana y Ana Delgado, sirven un calzone de pulpo con queso de Arzúa.',
      ja: 'ワインバー「ラ・トラベシーア」― 2025年にベネズエラ出身のマリアナとアナ・デルガード姉妹が開いた店では、タコとアルスーアのチーズを使ったカルツォーネを出している。',
      vocab: [
        { term: 'vinoteca', pos: 'n.f.', ja: 'ワインバー、ワインショップ',
          note: 'vino（ワイン）＋-teca（収蔵所：biblioteca 図書館、discoteca、videoteca と同じ接尾辞）。飲めて買える店を指します。造語法が透けて見える、覚えやすい語。',
          collocations: ['abrir una vinoteca'] },
        { term: 'queso de Arzúa', pos: 'n.m.', ja: 'アルスーア産チーズ（ガリシアの原産地呼称チーズ）',
          note: '正式には Arzúa-Ulloa。ガリシアには queso de tetilla（円錐形の「乳房チーズ」）など個性的なチーズがあり、いずれも DOP（原産地呼称保護）を持ちます。食のスペイン語では地名がそのまま品質の保証になります。' }
      ],
      grammar: [
        { point: '過去分詞の後置修飾＋動作主の por', ja: 'abierta en 2025 por las hermanas＝「2025年に姉妹によって開かれた」。受動の過去分詞が名詞 La Travesía を後ろから修飾しています。性数一致に注意：vinoteca は女性なので abierta。動作主は por で示します。',
          examples: [{ o: 'Un libro escrito por una japonesa.', j: '日本人女性によって書かれた本。' }] },
        { point: '主語のない3人称複数 sirven', ja: '「（店の人が）出している」＝「出されている」。前出の Messi 記事の lo expulsaron と同じ非人称用法です。店やレストランの話でとくによく使われます：Aquí hacen una paella buenísima.（ここのパエリアはすごくうまい）。' },
        { point: '国籍形容詞は小文字', ja: 'las hermanas venezolanas。スペイン語では国籍・言語・曜日・月名をすべて小文字で書きます（× Venezolanas, × Español, × Lunes）。英語との最大の表記上の違いのひとつで、作文で必ず減点される箇所です。',
          examples: [{ o: 'Hablo español y estudio francés los lunes.', j: '私はスペイン語を話し、月曜にフランス語を勉強します。' }] }
      ]
    },
    {
      id: 'es-pulpo-10',
      text: 'La combinación no es tan rara como parece: en Galicia, la tosta de pulpo con queso de tetilla es un clásico, y la cadena Galipizza lleva desde 2013 con su versión.',
      ja: 'この組み合わせは見た目ほど突飛ではない。ガリシアでは、タコとテティージャチーズを載せたトーストは定番であり、チェーン店ガリピッサは2013年から自前のバージョンを出し続けている。',
      vocab: [
        { term: 'tosta', pos: 'n.f.', ja: '（具を載せた）トースト、オープンサンド',
          note: 'tostar（焼く）から。バルの定番メニューで、パンの上に具を載せたもの。tostada は朝食のトースト（バター・トマトを塗る）を指すことが多く、tosta のほうが「一品料理」寄りです。',
          collocations: ['una tosta de jamón'] },
        { term: 'cadena', pos: 'n.f.', ja: 'チェーン（店舗網）／鎖',
          note: '基本義は「鎖」。そこから「チェーン店」「（テレビの）チャンネル」「連鎖」へ。una cadena de televisión＝テレビ局。多義語として覚える価値があります。',
          collocations: ['cadena de restaurantes', 'cadena de televisión'] }
      ],
      grammar: [
        { point: 'no tan A como B（BほどAではない）', ja: '同等比較 tan…como の否定形です。no es tan rara como parece＝「見た目ほど珍しくはない」。比較の相手が節（parece）でも成り立ちます。日本語の「〜ほど…ない」と発想が同じなので作りやすい構文です。',
          examples: [{ o: 'No es tan difícil como dicen.', j: '言われているほど難しくない。' }] },
        { point: 'llevar + 期間（〜し続けている）', ja: 'lleva desde 2013＝「2013年からずっと続けている」。llevar は現在の継続を表す非常に便利な動詞です。llevo tres años estudiando español（スペイン語を3年勉強している）、llevo aquí dos horas（ここに2時間いる）。英語の have been -ing に当たり、日本人が使いこなせると表現力が大きく上がります。',
          examples: [{ o: '¿Cuánto llevas esperando?', j: 'どれくらい待っているの？' }] },
        { point: '定冠詞つきの総称 la tosta … es un clásico', ja: '「（一般に）タコのトーストというものは定番だ」。スペイン語は種類全体を指すときに定冠詞を使います（Me gusta el café＝コーヒーが好き）。英語のように無冠詞にはできない点が重要です。' }
      ]
    },
    {
      id: 'es-pulpo-11',
      text: 'Belmonte, mientras tanto, {{le da vueltas}} a la fusión definitiva: una pizza de tortilla de Betanzos. "Ahora mismo no tengo la posibilidad de servirla", concluye. "Pero la receta está muy avanzada."',
      ja: '一方ベルモンテは、究極の融合 ― ベタンソス風トルティージャのピザ ― を思案中だ。「今すぐ出せる状況ではありません」と彼は締めくくる。「でもレシピはかなり進んでいます」。',
      vocab: [
        { term: 'le da vueltas', pos: 'v. (dar vueltas a algo)', ja: '〜をあれこれ考える、思案する',
          note: '直訳は「〜に回転を与える」＝頭の中でぐるぐる回す。darle vueltas a una idea＝アイデアを練る。No le des más vueltas＝もう考えすぎるな。日本語の「思いを巡らせる」とほぼ同じ比喩なので覚えやすい表現です。',
          collocations: ['no le des más vueltas', 'dar vueltas al asunto'],
          examples: [{ o: 'Llevo semanas dándole vueltas.', j: '何週間もそのことを考え続けている。' }] },
        { term: 'receta', pos: 'n.f.', ja: 'レシピ／（医者の）処方箋',
          note: '料理と医療の両方で使う多義語です。文脈で判断します。una receta médica＝処方箋。recetar は動詞で「処方する」。',
          collocations: ['seguir una receta', 'receta médica'] },
        { term: 'avanzada', pos: 'adj.', ja: '進んだ、進行した',
          note: 'avanzar（進む）の過去分詞から。está muy avanzada＝「かなり進んでいる」。nivel avanzado＝上級レベル。a horas avanzadas＝夜遅くに。',
          collocations: ['nivel avanzado', 'tecnología avanzada'] }
      ],
      grammar: [
        { point: 'estar + 過去分詞（結果の状態）', ja: 'la receta está muy avanzada＝「レシピは（すでに）かなり進んだ状態にある」。ser なら受動態の動作になってしまいます。Messi の記事に出てきた estaba tomada と同じ構造で、スペイン語では極めて頻出のパターンです。' },
        { point: 'ahora mismo', ja: '「今この瞬間は」。mismo が強調を加えます。同じ形で aquí mismo（まさにここで）、hoy mismo（今日中に）、él mismo（彼自身）。' },
        { point: '間接目的語の重複 le da vueltas a la fusión', ja: 'le と a la fusión が同じものを指しています。この重複はスペイン語では必須で、省略できません。文頭の記事第1文（A la tortilla … le ha salido）と同じ構造です。この記事の最初と最後に同じ文法が現れているのは偶然ではなく、スペイン語で最も基本的な構造だからです。' }
      ],
      nuance: 'concluye（結論づける）で発言を締めるのは、スペイン語の記事が人物ルポを終えるときの定番の型です。最後に本人の言葉を置き、その余韻で終わる ― 日本の新聞が事実で締めるのとは対照的な作りで、読み比べると文化の違いが見えてきます。'
    }
  ],

  guide: [
    'ベタンソスはガリシア州ア・コルーニャ県の小さな町です。スペイン中に知られている理由はただ一つ ― トルティージャ・デ・パタタス。ほとんど火を通さず、切ると中身がとろりと流れ出す「ほぼ液状」のスタイルで、これを目当てに全国から人がやってきます。',
    'ところが今年4月、料理人アントン・ベルモンテがタコのピザで「スペイン最優秀コンテンポラリー・ナポリピッツァ」賞を受賞しました。すでにメニューにあったタコのピザに、ガリシアの葉物野菜グレロスと、キムチに漬けたエビを加えて出品したものです。「発想は身近な食材から、自分たちが食べ慣れているものから来ている」と本人は語っています。',
    'コンテスト後、動画がTikTokとInstagramで拡散し、ピザ目当ての来訪者が現れ始めました。彼の店アデガ・ド・ピノは本来ピンチョスとワインの店で、パンデミックで夜間営業ができなくなったときにピザを焼き始めたのが出発点です。',
    'ただし彼だけではありません。町で40年以上続くイタリア料理店シヌエッサはパンデミック以前から出しており、その店主たちは地元のトルティージャ・コンテストで3度優勝しています（イタリア料理店がトルティージャで勝つ、というのがまた面白いところです）。2025年開店のワインバー「ラ・トラベシーア」は、ベネズエラ出身の姉妹が営み、タコとアルスーア産チーズのカルツォーネを出しています。',
    'そもそもガリシアではタコとチーズの組み合わせは珍しくありません。タコとテティージャチーズを載せたトーストは定番で、チェーン店ガリピッサは2013年からタコのピザを出し続けています。そしてベルモンテがいま考えているのは、究極の融合 ― ベタンソス風の液状トルティージャをピザにすること。「今すぐは出せませんが、レシピはかなり進んでいます」。',
    'この記事の魅力は、グローバルな料理（ピザ）が土地の食材と衝突して、まったく新しいローカルな名物になっていく過程が見えることです。そして語学的には、料理の動詞（cuajar, meter, servir, preparar）、口語表現（le ha salido, darle vueltas）、地域語（Adega do Pino のガリシア語）が一度に学べます。'
  ],

  deepdive: [
    {
      title: 'Vocabulary｜料理と店の話をするスペイン語',
      items: [
        { term: 'la carta / el menú', ja: 'メニュー表／日替わり定食',
          note: 'スペインでレストランに入って「メニューをください」は La carta, por favor. ¿Me trae el menú? と言うと「日替わり定食をください」の意味になりかねません。中南米では menú がメニュー表の意味でも通じます。旅行で最も実用的な区別のひとつ。' },
        { term: 'tapa / pincho / ración', ja: 'つまみのサイズ',
          note: 'tapa＝飲み物に付いてくる小皿（地域により無料）。pincho＝楊枝で留めた一口。ración＝取り分ける大皿。media ración＝半皿。バルで注文するときはこの3語で量を指定します。',
          examples: [{ o: 'Ponme una ración de pulpo, por favor.', j: 'タコを一皿お願いします。' }] },
        { term: 'pulpo a la gallega / pulpo á feira', ja: 'ガリシア風タコ',
          note: 'ゆでたタコにパプリカとオリーブオイル、粗塩をかけた料理。現地では ガリシア語で pulpo á feira（市の日のタコ）と呼ばれます。ガリシアを代表する一皿で、この記事の背景にある食文化そのものです。' },
        { term: 'cuajar / dorar / rehogar / sofreír', ja: '調理の動詞',
          note: 'cuajar（固める）、dorar（きつね色にする）、rehogar（弱火で炒める）、sofreír（軽く炒める）、pochar（玉ねぎをしんなりさせる）。レシピを読むにはこの動詞群が要ります。日本語の「炒める」ひとつに対し、スペイン語は火加減で語を分けます。' },
        { term: 'estar bueno / ser bueno', ja: '「おいしい」と「良い」',
          note: 'Está buenísimo.＝（今食べていて）すごくおいしい。Es bueno.＝（一般に）良質だ・体にいい。食べ物の感想はほぼ常に estar です。ser/estar の使い分けが最も実感しやすい場面。',
          examples: [{ o: 'La tortilla está buenísima.', j: 'このトルティージャ、めちゃくちゃおいしい。' }] }
      ]
    },
    {
      title: 'Grammar｜se の4つの顔',
      items: [
        { term: '① 再帰の se', ja: '自分自身に働きかける',
          note: 'se lava（自分を洗う＝体を洗う）、se viste（服を着る）。動作の受け手が主語自身。' },
        { term: '② 受動・非人称の se', ja: 'se cuaja / se sirve / se habla',
          note: 'この記事の主役。動作主を言わずに「〜される／〜するものだ」を表します。Se sirve frío.（冷やして供します）Aquí se vive bien.（ここは暮らしやすい）。レシピ・掲示・説明文はこの形が基本です。',
          examples: [{ o: 'Se prohíbe fumar.', j: '喫煙禁止。' }] },
        { term: '③ 相互の se', ja: 'お互いに',
          note: 'se conocieron（二人は知り合った）、se escriben（文通している）。主語は必ず複数。' },
        { term: '④ 間接目的語 le/les が変身した se', ja: 'se lo dije',
          note: 'le lo とは言えないので、le → se に変わります。Se lo dije a María.（マリアにそれを言った）。日本人が最も混乱するのがこの se で、再帰とは無関係です。' },
        { term: 'おまけ：強意の se', ja: 'comerse, beberse, leerse',
          note: 'Se comió toda la pizza.（ピザを全部平らげた）。se を付けると「完全に・すっかり」という完了の含みが加わります。文法的には必須ではありませんが、これがあると格段に自然になります。' }
      ]
    },
    {
      title: 'Cultural Notes｜ガリシアという場所',
      open: false,
      items: [
        { term: 'gallego（ガリシア語）', ja: 'スペイン語と並ぶ公用語',
          note: 'ポルトガル語に近い言語で、ガリシア州では公用語です。Adega do Pino（do = de + o = del）、pulpo á feira（á = a + a）のように、店名や料理名にそのまま残ります。スペインにはほかにカタルーニャ語、バスク語、バレンシア語などがあり、「スペイン語＝スペインの唯一の言語」ではありません。' },
        { term: 'la tortilla de Betanzos', ja: '「固めない」トルティージャ',
          note: '一般的なスペインのトルティージャは中まで火を通しますが、ベタンソス式はほとんど固めません。スペイン国内では con cebolla（玉ねぎ入り）か sin cebolla（なし）かをめぐる論争が有名で、食卓の話題としては尽きません。会話のきっかけとして非常に強い話題です。' },
        { term: 'DOP / IGP', ja: '原産地呼称の制度',
          note: 'Denominación de Origen Protegida（原産地呼称保護）。queso de Arzúa-Ulloa、queso de tetilla、pimientos de Padrón などガリシアには多数あります。スペイン語圏の食品ラベルを読むうえで必須の略語です。' }
      ]
    }
  ],

  breakdown: [
    {
      text: 'A la tortilla más famosa de España le ha salido competidora, y lleva pulpo por encima.',
      structure: '<code>A la tortilla más famosa de España</code>〈間接目的語（名詞）〉 <code>le</code>〈同じものを指す代名詞・必須〉 <code>ha salido</code>〈V〉 <code>competidora</code>〈主語！〉，y <code>lleva</code>〈V〉 <code>pulpo</code>〈O〉 <code>por encima</code>〈場所〉',
      grammar: 'この文の主語は competidora（ライバル）であって、tortilla ではありません。tortilla は「ライバルが現れた相手」＝間接目的語です。gustar 型の構文と同じ発想で、日本語の「〜に〜ができた」に対応します。le と A la tortilla の重複はスペイン語では義務的。',
      vocab: 'salirle algo a alguien（〜に…が現れる）／competidora（ライバル）／por encima（上に）',
      literal: 'スペインで最も有名なトルティージャに、ライバルが出てきた。そしてそれは上にタコを運んでいる。',
      natural: 'スペインでいちばん有名なトルティージャに、ライバルが現れた。しかもその上にはタコが載っている。',
      nuance: 'lleva（運ぶ）は料理の話では「（具を）載せている・入れている」という意味の日常語です。Esta pizza lleva anchoas.（このピザにはアンチョビが入っている）。tener でも通じますが、llevar のほうがはるかに自然で、メニューを読むときに必ず出会います。'
    },
    {
      text: '"La tenía en carta, pero le metí los grelos y los langostinos marinados en kimchi", explica.',
      structure: '<code>La</code>〈目的語代名詞＝la pizza〉 <code>tenía</code>〈線過去＝背景〉 <code>en carta</code>〈場所〉, pero <code>le</code>〈間接目的語＝そのピザに〉 <code>metí</code>〈点過去＝出来事〉 <code>los grelos y los langostinos marinados en kimchi</code>〈直接目的語〉, <code>explica</code>〈伝達動詞・現在形〉',
      grammar: '線過去 tenía（以前から載せていた＝状態）と点過去 metí（そのとき加えた＝出来事）の対比が一文の中で起きている、時制学習の理想的な例文です。le は「そのピザに」を指し、直接目的語 la と間接目的語 le が同じ文に共存しています。marinados は過去分詞の後置修飾で、langostinos（男性複数）に一致。',
      vocab: 'tener en carta（メニューに載せている）／meterle algo（〜にぶち込む）／grelos（カブの若菜）／marinado（漬け込んだ）',
      literal: '「私はそれをメニューに持っていた、しかし私はそれにグレロスとキムチに漬け込まれたエビを入れた」と彼は説明する。',
      natural: '「もともとメニューには載せていたんですが、そこにグレロスと、キムチに漬けたエビを入れたんです」と彼は説明する。',
      nuance: '発言を引用したあとの explica が現在形である点に注目してください。スペイン語の報道では、取材で聞いた話を dice / explica / cuenta と現在形で受けることが多く、これが記事に臨場感を与えます。日本語では「と語る」「と説明する」で同じ効果が出ます。'
    }
  ],

  tryit: [
    { q: '「そのアイデアは住民のあいだで根づかなかった」を、cuajar を使って書いてみましょう。',
      hint: 'entre を使います。',
      a: 'La idea no cuajó entre los vecinos.',
      aj: 'その案は住民のあいだで根づかなかった。',
      why: 'cuajar は料理の「固まる」から比喩的に「（考えが）定着する・実を結ぶ」へ広がります。entre＝〜のあいだで。vecinos は「隣人」だけでなく「（町の）住民」も指します。' },
    { q: '「私はここで3年働いています」を、llevar を使って書いてみましょう。',
      hint: 'llevar + 期間 + 現在分詞。',
      a: 'Llevo tres años trabajando aquí.',
      aj: '私はここで3年働いています。',
      why: 'Trabajo aquí desde hace tres años. でも正しいですが、llevar を使うほうが会話では自然です。llevar + 期間 + gerundio は現在まで続く継続を表す最重要構文のひとつ。' },
    { q: '「それは言われているほど難しくない」を、no tan…como を使って書いてみましょう。',
      hint: '「言われている」は3人称複数で。',
      a: 'No es tan difícil como dicen.',
      aj: 'それは言われているほど難しくない。',
      why: 'no tan A como B の B に節（dicen）を置く形。dicen は3人称複数の非人称で「（人々が）言う」＝「言われている」。スペイン語らしい受け身の避け方です。' },
    { q: '「何週間もそのことを考え続けている」を、darle vueltas と llevar を組み合わせて書いてみましょう。',
      hint: '2つの構文を同時に使います。',
      a: 'Llevo semanas dándole vueltas.',
      aj: '何週間もそのことを考え続けている。',
      why: 'llevar + 期間 + gerundio（継続）と darle vueltas a algo（あれこれ考える）の合わせ技。dándole は gerundio に代名詞が後接した形で、アクセント記号が必要になります（dando → dándole）。' }
  ],

  talk: [
    { q: '¿Has probado alguna vez el pulpo a la gallega?',
      qj: 'ガリシア風のタコを食べたことはありますか。',
      a: 'Sí, una vez en Santiago. Estaba buenísimo, aunque me sorprendió lo blando que estaba.',
      aj: 'ええ、サンティアゴで一度。すごくおいしかったです。ただ、あんなに柔らかいとは思いませんでした。',
      note: 'lo + 形容詞 + que + 動詞＝「どれほど〜か」という感嘆構文。lo blando que estaba＝「どれほど柔らかかったか」。非常によく使う形なので、この形で覚えてしまうのが得策です。' },
    { q: '¿Qué plato de tu país recomendarías a un español?',
      qj: 'スペイン人に自分の国の料理をすすめるなら、何にしますか。',
      a: 'Le diría que probara la okonomiyaki. Es como una tortilla, pero con col y salsa. Creo que le encantaría.',
      aj: 'お好み焼きをすすめますね。トルティージャみたいなものですが、キャベツとソースが入っています。きっと気に入ると思います。',
      note: 'Le diría que probara は「〜するようにと言うだろう」で、主節が過去未来（条件法）なので従属節は接続法過去（probara）になります。時制の一致の実例。「〜みたいなもの」は es como… が最も使いやすい説明の型です。' },
    { q: '¿Prefieres la tortilla con cebolla o sin cebolla?',
      qj: 'トルティージャは玉ねぎ入り派ですか、なし派ですか。',
      a: 'Con cebolla, sin duda. Ya sé que es un tema delicado en España.',
      aj: '玉ねぎ入りですね、間違いなく。スペインではデリケートな話題だと分かっていますが。',
      note: 'スペインで最も盛り上がる（そして最も真剣な）論争のひとつです。sin duda＝間違いなく。Ya sé que…＝「〜なのは分かっていますが」と、あえて地雷を踏む前置き。この話題を振れると、スペイン人との距離は一気に縮まります。' }
  ],

  sources: [
    { outlet: 'El País (Gastronomía)', title: 'La pizza de pulpo conquista Betanzos, la tierra de la tortilla líquida',
      date: '2026-09-01', url: 'https://elpais.com/gastronomia/2026-09-01/la-pizza-de-pulpo-conquista-betanzos-la-tierra-de-la-tortilla-liquida.html', accessed: '2026-09-01' }
  ]
}

]);
