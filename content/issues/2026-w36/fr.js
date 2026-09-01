/* LE MONDE FRANCOPHONE — Vol.1 / 2026-W36 */
WGL.registerArticles([

/* ══════════════════════════════════════════════════════════ */
{
  id: 'fr-rentree',
  lang: 'fr',
  category: 'Éducation / Société',
  level: 'B1–B2',
  headline: {
    orig: 'La rentrée 2026 : 11,6 millions d\'élèves reprennent l\'école — et les lycéens laissent leur portable au vestiaire',
    ja: '2026年の新学期 ― 1160万人が学校へ戻り、高校生はスマホを預ける'
  },
  why: 'フランスの9月1日は、日本の4月に当たる「一年の始まり」です。la rentrée という一語が、学校・仕事・政治・出版界のすべての再始動を指す ― この語を知らないとフランスの秋は理解できません。今年の目玉は高校でのスマートフォン禁止。憲法評議会が法律の中心部分を違憲としたのに、残った部分だけが施行されるという、フランスらしい複雑な経緯もついています。',

  body: [
    {
      id: 'fr-rentree-1',
      text: 'Environ 11,6 millions d\'élèves et 850 000 professeurs ont repris le chemin de l\'école mardi — et, pour les lycéens, sans téléphone portable.',
      ja: 'およそ1160万人の児童・生徒と85万人の教員が火曜日、学校へと戻った。そして高校生にとっては、携帯電話なしの復帰である。',
      literal: 'およそ1160万人の生徒と85万人の教師が火曜日に学校の道を再び取った ― そして高校生にとっては、携帯電話なしで。',
      vocab: [
        { term: 'reprendre le chemin de', pos: 'expression', ja: '〜への道を再びたどる、〜に戻る',
          note: 'reprendre（再び取る）＋le chemin de（〜への道）。「学校が始まる」を言うときのフランス語の決まり文句で、単に retourner à l\'école と言うより情緒があります。reprendre le chemin du travail（仕事に戻る）も同様。',
          collocations: ['reprendre le chemin de l\'école', 'reprendre le travail'],
          examples: [{ o: 'Après trois mois d\'arrêt, il a repris le chemin du bureau.', j: '3か月休んだあと、彼はオフィスに戻った。' }] },
        { term: 'lycéens', pos: 'n.m.pl.', ja: '高校生',
          note: 'フランスの学校段階：école maternelle（幼稚園）→ école élémentaire（小学校）→ collège（中学、collégien）→ lycée（高校、lycéen）。日本語の「リセ」はこの lycée。今回の禁止令は lycée のみで、collège ではすでに2018年から禁止されています。',
          collocations: ['un lycéen de terminale', 'les lycéens et les collégiens'] }
      ],
      grammar: [
        { point: '複合過去 ont repris', ja: 'passé composé。完了した出来事を表します。avoir + 過去分詞。reprendre の過去分詞は repris（不規則）。フランス語の話し言葉・新聞記事では、単純過去（passé simple）ではなく複合過去を使うのが標準です（単純過去は文学作品と歴史記述に限られます）。',
          examples: [{ o: 'Elle a pris le train de 8 heures.', j: '彼女は8時の電車に乗った。' }] },
        { point: '数字の書き方 11,6 millions / 850 000', ja: 'フランス語では小数点にカンマを使い（11,6 = 11.6）、桁区切りには空白（正確にはノーブレークスペース）を使います（850 000）。英語と真逆なので、数字の読み違いに注意。読み方は onze virgule six millions（virgule＝カンマ）。' },
        { point: '前置詞 sans + 無冠詞名詞', ja: 'sans téléphone portable。sans のあとでは不定冠詞・部分冠詞が消えます（× sans un téléphone）。同様に：sans argent（お金なしで）、sans problème（問題なく）。ただし特定のものを指すときは冠詞が残ります：sans le livre que j\'ai acheté。' }
      ],
      nuance: 'ダッシュのあとの et, pour les lycéens, sans téléphone portable は、動詞のない省略文です。フランス語の新聞はこの「言い切らない付け足し」を好み、読者に含みを感じさせます。'
    },
    {
      id: 'fr-rentree-2',
      text: 'L\'interdiction, votée par le Parlement fin juillet, {{entre en vigueur}} dès cette rentrée.',
      ja: '7月末に議会で可決されたこの禁止措置は、今回の新学期から効力を持つ。',
      vocab: [
        { term: 'entre en vigueur', pos: 'expression (entrer en vigueur)', ja: '施行される、発効する',
          note: 'vigueur は「活力」。en vigueur＝「効力を持って」。法律・規則の話では必須の表現です。la loi en vigueur＝現行法。反対は abroger（廃止する）。',
          collocations: ['entrer en vigueur le 1er janvier', 'la législation en vigueur'],
          examples: [{ o: 'Le nouveau règlement entrera en vigueur en janvier.', j: '新しい規則は1月に施行される。' }] },
        { term: 'la rentrée', pos: 'n.f.', ja: '（夏休み明けの）新学期、新年度、活動再開',
          note: 'フランス文化を理解する鍵になる語です。rentrer（戻る）から。la rentrée scolaire（新学期）だけでなく、la rentrée littéraire（秋の新刊ラッシュ）、la rentrée politique（政界の活動再開）、la rentrée sociale（労働運動の再開）と、9月の社会全体の再始動を指します。日本語に一語の訳語がありません。',
          collocations: ['la rentrée scolaire', 'la rentrée littéraire', 'faire sa rentrée'] }
      ],
      grammar: [
        { point: '過去分詞による挿入（votée par le Parlement）', ja: 'L\'interdiction (qui a été) votée par le Parlement。関係代名詞＋être を省いた形で、名詞を後ろから修飾します。カンマで挟むと補足説明になります。votée が e で終わっているのは、修飾する L\'interdiction が女性名詞だからです（性数一致）。',
          examples: [{ o: 'La loi, adoptée en juin, sera appliquée en 2027.', j: '6月に採択されたこの法律は、2027年に適用される。' }] },
        { point: '前置詞 dès', ja: '「〜から早くも／〜になったらすぐ」。単なる à partir de（〜から）より「もうその時点で」という早さの強調が入ります。dès cette rentrée＝「今回の新学期からもう」。dès demain（明日にはもう）、dès que possible（できるだけ早く）。',
          compare: 'à partir de septembre = 9月から（中立）／dès septembre = 9月からもう（早い、という含み）。' },
        { point: 'fin juillet（無冠詞・無前置詞）', ja: '「7月末に」。à la fin de juillet の短縮形で、新聞の見出しや本文で好まれます。同様に début septembre（9月初め）、mi-octobre（10月半ば）。この3つはセットで覚えます。' }
      ]
    },
    {
      id: 'fr-rentree-3',
      text: 'Elle faisait partie d\'une loi visant à protéger les mineurs face aux réseaux sociaux, {{dont}} le Conseil constitutionnel a censuré le volet principal : l\'interdiction des réseaux sociaux aux moins de 15 ans.',
      ja: 'この措置は、SNSから未成年を守ることを目的とした法律の一部だった。ただしその法律の中心部分 ― 15歳未満のSNS利用禁止 ― は、憲法評議会によって違憲とされている。',
      vocab: [
        { term: 'dont', pos: 'pron. rel.', ja: '（de を含む関係代名詞）その〜、〜のうちの',
          note: 'de + 関係代名詞 をまとめた形。ここでは le volet principal de cette loi（その法律の中心部分）の de を dont が担っています。フランス語学習の最重要項目のひとつで、日本人が最も苦手とする関係代名詞です。',
          collocations: ['le livre dont je parle', 'la ville dont il vient'],
          examples: [{ o: 'C\'est le film dont tout le monde parle.', j: 'それがみんなの話題になっている映画だ。' }] },
        { term: 'volet', pos: 'n.m.', ja: '（法案などの）部分、柱／（窓の）よろい戸',
          note: '本来は「鎧戸」。そこから「（全体を構成する）一部門」の意味へ。le volet social（社会政策の部分）、un plan en trois volets（3本柱の計画）。政治・行政の文章に頻出します。',
          collocations: ['le volet économique', 'le premier volet du plan'] },
        { term: 'censurer', pos: 'v.', ja: '（憲法評議会が）違憲として無効にする／検閲する',
          note: 'フランスの憲法評議会（le Conseil constitutionnel）が法律の条文を無効にすることを censurer と言います。「検閲」の意味もありますが、法律の文脈ではこちらが標準。日本語では「違憲とする」「削除する」と訳します。',
          collocations: ['censurer une disposition', 'la censure du Conseil constitutionnel'] }
      ],
      grammar: [
        { point: 'dont の使い方 — 見分けかた', ja: '元の文で de が必要なら dont を使います。① parler de qqch → le film dont je parle ② le volet de la loi → la loi dont le volet… ③ avoir besoin de → ce dont j\'ai besoin。日本語話者は「〜の」を où や que で受けてしまいがちですが、de が絡んだら dont です。',
          examples: [{ o: 'Voilà la maison dont je rêve.', j: 'あれが私の夢見ている家です（rêver de）。' },
                      { o: 'Une famille dont les enfants sont adultes.', j: '子どもたちが成人した家族。' }] },
        { point: '半過去 faisait partie', ja: 'imparfait。「（当時）〜の一部だった」という背景・状態の描写です。複合過去 a fait partie にすると「一時期一部だった（そして終わった）」という限定された出来事になります。imparfait＝状態・継続・背景／passé composé＝出来事、という対立はフランス語の中核です。',
          compare: 'Il pleuvait quand je suis sorti.（出たとき雨が降っていた：pleuvait＝背景／suis sorti＝出来事）' },
        { point: 'viser à + 不定詞', ja: '「〜することを目的とする」。une loi visant à protéger＝「守ることを目指す法律」。visant は現在分詞で、名詞 loi を修飾しています。行政・法律の文書で極めてよく使われる型です。',
          examples: [{ o: 'Des mesures visant à réduire la pollution.', j: '汚染を減らすことを目的とした措置。' }] },
        { point: 'les moins de 15 ans', ja: '「15歳未満の人たち」。〈les moins de + 年齢〉で年齢層を表す定型。les plus de 65 ans（65歳以上）。数詞の前に定冠詞 les が付いて名詞のかたまりになる点が特徴です。' }
      ],
      structure: 'Elle〈主語＝L\'interdiction〉 faisait partie〈動詞句〉 d\'une loi〈補語〉 [ visant à protéger les mineurs face aux réseaux sociaux ]〈現在分詞句が loi を修飾〉, [ dont le Conseil constitutionnel a censuré le volet principal ]〈関係節、先行詞は loi〉 : l\'interdiction…〈コロンで le volet principal を具体化〉'
    },
    {
      id: 'fr-rentree-4',
      text: 'Emmanuel Macron a néanmoins décidé de promulguer le texte. « Une école sans téléphone, c\'est retrouver la sérénité de l\'apprentissage », a-t-il écrit sur X.',
      ja: 'それでもエマニュエル・マクロン大統領は法律を公布することを決めた。「携帯電話のない学校とは、学びの落ち着きを取り戻すことだ」と彼はXに書いた。',
      vocab: [
        { term: 'promulguer', pos: 'v.', ja: '（法律を）公布する',
          note: 'フランスでは、議会が可決した法律を大統領が公布して初めて効力が生じます。promulguer une loi＝法律を公布する。名詞は la promulgation。',
          collocations: ['promulguer une loi', 'la promulgation du texte'] },
        { term: 'sérénité', pos: 'n.f.', ja: '落ち着き、静穏',
          note: '形容詞 serein / sereine（穏やかな）から。en toute sérénité＝落ち着いて。教育・政治の演説でよく使われる、やや高尚な響きの語です。',
          collocations: ['en toute sérénité', 'retrouver la sérénité'] },
        { term: 'apprentissage', pos: 'n.m.', ja: '学習／（職業）見習い',
          note: 'apprendre（学ぶ）から。教育の文脈では「学習」、労働の文脈では「見習い・職業訓練」（contrat d\'apprentissage＝見習い契約）。2つの意味を持つ重要語です。',
          collocations: ['les apprentissages fondamentaux', 'un contrat d\'apprentissage'] }
      ],
      grammar: [
        { point: '倒置 a-t-il écrit（引用のあとの語順）', ja: '引用文のあとで「〜と彼は書いた」と言うとき、主語と動詞が倒置します。母音で終わる動詞（a）と母音で始まる代名詞（il）のあいだには、発音しやすくするために -t- を挟みます（a-t-il, va-t-elle, parle-t-on）。この -t- は綴りのための挿入で、意味はありません。',
          examples: [{ o: '« Je viendrai », a-t-elle promis.', j: '「行くわ」と彼女は約束した。' }] },
        { point: 'C\'est + 不定詞（定義の構文）', ja: 'Une école sans téléphone, c\'est retrouver…＝「携帯のない学校、それは〜を取り戻すことだ」。主題を先に置き、カンマで区切って c\'est で受け直す「主題提示」の型です。話し言葉でも演説でも極めて頻繁に使われます。',
          examples: [{ o: 'Apprendre une langue, c\'est ouvrir une porte.', j: '言語を学ぶこと、それは扉を開くことだ。' }] },
        { point: 'néanmoins', ja: '「それにもかかわらず」。cependant / pourtant / toutefois と同義ですが、néanmoins は書き言葉寄りで、論理的な譲歩を示します。文中に置ける点も特徴（a néanmoins décidé）。' },
        { point: 'フランス語の引用符 « »', ja: 'ギユメ（guillemets）と呼ばれ、内側に半角スペースを入れます（« texte »）。英語の "..." は使いません。会話の引用、強調、専門用語の提示に使われます。' }
      ]
    },
    {
      id: 'fr-rentree-5',
      text: 'Le ministre de l\'Éducation nationale, Édouard Geffray, a concédé que la mesure {{serait}} « un peu difficile à faire respecter au début ».',
      ja: '国民教育相のエドゥアール・ジェフレは、この措置は「最初のうちは守らせるのが少し難しいだろう」と認めた。',
      vocab: [
        { term: 'serait', pos: 'v. (être・条件法現在)', ja: '〜だろう（過去における未来）',
          note: '条件法現在の形ですが、ここでは「仮定」ではなく「過去の時点から見た未来」を表します。詳しくは下の文法欄へ。フランス語のニュースを読むうえで避けて通れない用法です。',
          collocations: ['il serait possible', 'ce serait bien'] },
        { term: 'concéder', pos: 'v.', ja: '（不利なことを）認める、譲歩する',
          note: 'admettre（認める）と近いですが、concéder は「自分に不利な点を認める」という含みがあります。報道が「〜と（渋々）認めた」と書くときの語。名詞は une concession（譲歩）。',
          collocations: ['concéder une défaite', 'faire une concession'] },
        { term: 'faire respecter', pos: 'expression', ja: '守らせる、遵守させる',
          note: '使役の faire + 不定詞。respecter（尊重する・守る）を「他人にさせる」形です。faire respecter la loi＝法を守らせる。difficile à faire respecter＝「守らせるのが難しい」。',
          collocations: ['faire respecter les règles', 'se faire respecter'] }
      ],
      grammar: [
        { point: '時制の一致と条件法（le futur dans le passé）', ja: 'これはフランス語学習の要所です。直接話法「La mesure sera difficile.（単純未来）」を、過去の伝達動詞（a concédé）のあとに置くと、未来形は条件法現在（serait）に変わります。日本語では「〜だろうと認めた」。この serait は「もし〜なら」という仮定ではありません。',
          compare: 'Il dit qu\'il viendra.（来ると言っている：現在＋単純未来）／Il a dit qu\'il viendrait.（来ると言った：過去＋条件法現在）',
          examples: [{ o: 'Elle pensait que ce serait facile.', j: '彼女はそれが簡単だろうと思っていた。' }] },
        { point: '形容詞 + à + 不定詞', ja: 'difficile à faire respecter＝「守らせるのが難しい」。〈形容詞 + à + 不定詞〉で、不定詞の意味上の目的語が主語になります（La mesure est difficile à appliquer.＝その措置は適用するのが難しい）。一方 Il est difficile de + 不定詞 は非人称構文で、語順も前置詞も違います。',
          compare: 'Ce livre est difficile à lire.（この本は読みにくい）／Il est difficile de lire ce livre.（この本を読むのは難しい）― 意味はほぼ同じですが、構文が異なります。' },
        { point: '同格のカンマ Le ministre…, Édouard Geffray,', ja: '肩書きと人名を並べるとき、両側をカンマで挟みます。フランスの報道文の基本作法で、片方だけのカンマは誤りです。' }
      ]
    },
    {
      id: 'fr-rentree-6',
      text: 'Mais, a-t-il ajouté, « {{aucun}} argument sérieux ne permet de soutenir qu\'un téléphone est indispensable en cours ».',
      ja: 'しかし、と彼は付け加えた。「授業中に携帯電話が不可欠だと主張できる真面目な根拠は、ひとつもありません」。',
      vocab: [
        { term: 'aucun', pos: 'adj./pron. indéf.', ja: 'ひとつも〜ない',
          note: '必ず ne とセットで使います（aucun … ne …）。単数扱いなのが特徴：aucun argument ne permet（× aucuns arguments ne permettent）。名詞なしで代名詞としても使えます：Aucun n\'est venu.（誰も来なかった）。',
          collocations: ['aucun problème', 'sans aucun doute'],
          examples: [{ o: 'Aucune solution ne semble parfaite.', j: '完璧に見える解決策はひとつもない。' }] },
        { term: 'permettre de + inf.', pos: 'v.', ja: '〜することを可能にする',
          note: '「許す」より「〜できるようにする」の意味で使われることのほうが多い動詞です。前置詞は de。permettre à qqn de faire qqch＝人が〜するのを可能にする。フランス語の論説文で最頻出の動詞のひとつ。',
          collocations: ['cela permet de comprendre', 'permettre l\'accès'] },
        { term: 'indispensable', pos: 'adj.', ja: '不可欠な',
          note: 'in-（否定）+ dispensable（免除できる）＝「省けない」。nécessaire より強い語です。indispensable à / pour＝〜にとって不可欠。',
          collocations: ['un outil indispensable', 'il est indispensable de'] }
      ],
      grammar: [
        { point: 'aucun … ne … の枠', ja: 'フランス語の否定は原則として ne + 否定語 の2語で作ります：ne… pas / ne… jamais / ne… rien / ne… personne / ne… aucun / ne… plus。aucun が主語のときも ne は必要です（Aucun ne permet…）。話し言葉では ne が落ちがちですが、書き言葉では必須です。',
          examples: [{ o: 'Personne ne le sait.', j: '誰もそれを知らない。' },
                      { o: 'Je n\'ai rien vu.', j: '何も見なかった。' }] },
        { point: 'soutenir que + 直説法', ja: '「〜だと主張する」。断定的な主張の動詞なので直説法（est）を取ります。一方、否定形にすると疑いが入るため接続法になりえます：Je ne soutiens pas que ce soit vrai. この「肯定＝直説法／否定・疑問＝接続法」の揺れは、フランス語の接続法の中心的な仕組みです。' },
        { point: 'en cours（無冠詞）', ja: '「授業中に」。en + 無冠詞名詞 は状況を表す定型を作ります：en classe（教室で）、en vacances（休暇中）、en France（フランスで）、en voiture（車で）。⚠️ en cours de + 名詞 は「〜の途中で」（en cours de route）という別の表現なので混同注意。' },
        { point: '挿入節 a-t-il ajouté', ja: '引用の途中に「と彼は付け加えた」を挟む形。両側をカンマで区切ります。倒置と -t- の挿入は前文と同じ規則です。' }
      ],
      nuance: 'aucun argument sérieux（真面目な根拠はひとつもない）は、反対論を「真剣に検討する価値がない」と切り捨てる強い言い方です。閣僚の発言としてはかなり踏み込んでおり、記者があえてこの部分を引用しているのはそのためです。'
    },
    {
      id: 'fr-rentree-7',
      text: 'Concrètement, il faut que chaque lycée {{adapte}} son règlement intérieur : casiers, pochettes, surveillance, sanctions — c\'est aux proviseurs de fixer les modalités.',
      ja: '具体的には、各高校が校則を改める必要がある。ロッカー、専用ポーチ、見回り、罰則 ― その運用の細部を決めるのは校長の役目だ。',
      vocab: [
        { term: 'adapte', pos: 'v. (adapter・接続法現在)', ja: '適合させる、改める（の接続法）',
          note: 'il faut que のあとなので接続法。adapter A à B＝AをBに合わせる。s\'adapter à＝〜に順応する。ここでは「校則を新しい法律に合わせて書き換える」。',
          collocations: ['adapter un texte', 's\'adapter au changement'] },
        { term: 'règlement intérieur', pos: 'n.m.', ja: '（学校・会社の）内部規則、校則',
          note: '学校なら校則、企業なら就業規則。フランスでは学校ごとに règlement intérieur を定め、生徒と保護者が署名します。今回の禁止令も、この校則に落とし込まれて初めて実効を持ちます。',
          collocations: ['modifier le règlement intérieur'] },
        { term: 'proviseurs', pos: 'n.m.pl.', ja: '（高校の）校長',
          note: 'フランスでは学校段階ごとに校長の呼び名が違います：directeur（小学校）、principal（中学）、proviseur（高校）。これはフランスの学校制度を語るうえで欠かせない語彙の区別です。',
          collocations: ['le proviseur du lycée', 'le principal du collège'] },
        { term: 'modalités', pos: 'n.f.pl.', ja: '（実施の）具体的な方法、運用方法',
          note: 'ほぼ常に複数形で使います。les modalités d\'application（適用の細目）、les modalités d\'inscription（申込方法）。行政文書の定番語。',
          collocations: ['fixer les modalités', 'les modalités pratiques'] }
      ],
      grammar: [
        { point: 'il faut que + 接続法', ja: 'フランス語の接続法（subjonctif）が現れる最も典型的な場面です。必要・義務・願望・感情・疑いを表す表現のあとでは接続法になります。il faut que chaque lycée adapte（× adapte→ adapter ではなく、× il faut que…adapte を il faut que…adaptera とはしない）。',
          compare: 'Il faut adapter le règlement.（不定詞：一般論として「改めねばならない」）／Il faut que chaque lycée adapte son règlement.（接続法：「誰が」を明示するときは que + 接続法）',
          examples: [{ o: 'Il faut que tu viennes.', j: '君は来なければならない。' },
                      { o: 'Je veux qu\'il soit heureux.', j: '彼に幸せでいてほしい。' }] },
        { point: 'c\'est à qqn de + 不定詞', ja: '「〜するのは…の役目だ／…次第だ」。c\'est aux proviseurs de fixer＝「決めるのは校長の役目だ」。責任の所在を示す非常に便利な構文です。à + les → aux の縮約に注意。',
          examples: [{ o: 'C\'est à toi de décider.', j: '決めるのは君次第だ。' }] },
        { point: '無冠詞の列挙 casiers, pochettes, surveillance, sanctions', ja: '例を畳みかけるとき、冠詞を落として名詞だけを並べます。新聞記事のリズムを作る手法で、「こういったこと全部」という意味を圧縮して伝えます。' }
      ]
    },
    {
      id: 'fr-rentree-8',
      text: 'Des exceptions sont prévues, notamment pour les élèves en situation de handicap, pour les classes préparatoires et les BTS, ou simplement pour payer la cantine.',
      ja: '例外も設けられている。障害のある生徒、グランゼコール準備級や上級技術者課程の学生、あるいは単に学食の支払いのため、といった場合である。',
      vocab: [
        { term: 'en situation de handicap', pos: 'expression', ja: '障害のある（状態にある）',
          note: 'かつての handicapé（障害者）に代わる、現在のフランスの標準的な言い方です。「その人が障害者なのではなく、障害のある状況に置かれている」という考え方を反映した表現で、行政文書ではほぼ必ずこの形が使われます。日本語の「障害のある方」に相当する配慮語。',
          collocations: ['personne en situation de handicap', 'en situation de précarité'] },
        { term: 'classes préparatoires', pos: 'n.f.pl.', ja: 'グランゼコール準備級（プレパ）',
          note: 'グランゼコール（エリート高等教育機関）の入学試験に備える2年間の課程で、高校の中に置かれます。略して prépa。フランスの教育制度を理解するうえで欠かせない語で、日本の予備校とも大学とも違う独自の存在です。',
          collocations: ['faire une prépa', 'prépa scientifique'] },
        { term: 'BTS', pos: 'n.m.', ja: '上級技術者免状（brevet de technicien supérieur）',
          note: '高校卒業後2年間の職業教育課程。高校の中に置かれるため、今回の禁止令の対象施設と重なってしまい、例外が必要になりました。読み方は「ベー・テー・エス」。',
          collocations: ['un BTS commerce'] },
        { term: 'cantine', pos: 'n.f.', ja: '（学校・職場の）食堂',
          note: 'manger à la cantine＝学食で食べる。フランスの学食は多くの場合カード式で、スマホ決済も導入されているため「支払いのための例外」が必要になったわけです。',
          collocations: ['la cantine scolaire', 'les tickets de cantine'] }
      ],
      grammar: [
        { point: '受動態 sont prévues', ja: 'être + 過去分詞。prévoir（予定する・想定する）の過去分詞 prévu が主語 Des exceptions（女性複数）に性数一致して prévues。「誰が設けたか」を言う必要がないときの標準的な形です。ただしフランス語は英語ほど受動態を多用せず、on（不特定の人）や代名動詞で置き換えることも多いことを覚えておきましょう。',
          examples: [{ o: 'On a prévu des exceptions.', j: '例外が設けられた（能動で言う場合）。' }] },
        { point: 'notamment', ja: '「とりわけ、たとえば」。例を挙げるときの副詞で、フランス語の説明文に極めて頻出します。par exemple より書き言葉寄り。en particulier（特に）とほぼ同義。' },
        { point: 'pour + 不定詞（目的）', ja: 'pour payer la cantine＝「学食の支払いをするために」。この文では pour が3回繰り返され、最初の2つは名詞（pour les élèves, pour les classes）、最後は不定詞（pour payer）を取っています。前置詞のあとに名詞も不定詞も置けるのがフランス語の特徴です。' }
      ]
    },
    {
      id: 'fr-rentree-9',
      text: 'Ce n\'est pas la seule nouveauté : l\'éducation financière, expérimentée depuis 2019, est généralisée à toutes les classes de quatrième, en lien avec la Banque de France.',
      ja: '新しいのはそれだけではない。2019年から試験的に行われてきた金融教育が、フランス銀行と連携して中学2年生の全クラスに拡大される。',
      vocab: [
        { term: 'nouveauté', pos: 'n.f.', ja: '新しいこと、新機軸／新刊・新商品',
          note: 'nouveau（新しい）の名詞形。les nouveautés de la rentrée＝新学期の変更点。書店の「新刊コーナー」も les nouveautés です。',
          collocations: ['les nouveautés de la saison'] },
        { term: 'généraliser', pos: 'v.', ja: '全面的に導入する、一般化する',
          note: '試行（expérimentation）→ 全面展開（généralisation）は、フランスの教育行政の定番の流れです。être généralisé à＝〜に拡大される。名詞は la généralisation。',
          collocations: ['généraliser un dispositif', 'la généralisation du télétravail'] },
        { term: 'quatrième', pos: 'n.f.', ja: '（中学の）第2学年',
          note: '⚠️ フランスの学年は逆順に数えます。中学は sixième（6e・日本の小6相当）→ cinquième（5e）→ quatrième（4e）→ troisième（3e）、高校は seconde（2de）→ première（1re）→ terminale（最終学年）。日本人が最も混乱する制度差のひとつで、quatrième は「4年生」ではなく中学2年にあたります。',
          collocations: ['un élève de quatrième', 'passer en troisième'] }
      ],
      grammar: [
        { point: 'en lien avec', ja: '「〜と連携して、〜と関連して」。行政・報道の定型句です。en collaboration avec（〜と協力して）、en partenariat avec（〜と提携して）も同系統。' },
        { point: 'depuis + 時点（現在完了的な意味）', ja: 'expérimentée depuis 2019＝「2019年から（今まで）試験的に行われてきた」。フランス語では depuis を現在形と組ませて継続を表します：J\'habite ici depuis dix ans.（10年前からここに住んでいる）。⚠️ 英語のように現在完了にはしません（× J\'ai habité ici depuis dix ans）。日本人が最も間違えやすい時制です。',
          examples: [{ o: 'Il apprend le français depuis trois ans.', j: '彼は3年前からフランス語を学んでいる。' }] },
        { point: 'コロン（:）による説明', ja: 'フランス語のコロンは、前の文の内容を具体化・説明します。Ce n\'est pas la seule nouveauté :（それだけではない ― というのも…）。⚠️ フランス語ではコロンの前に半角スペースを入れます（nouveauté : l\'éducation）。「? ! ; :」の前にスペースを入れるのはフランス語の組版規則で、日本語や英語とは違います。' }
      ]
    },
    {
      id: 'fr-rentree-10',
      text: 'Et un concours général des collèges {{voit le jour}}, sur le modèle de celui des lycées, qui distingue les meilleurs élèves depuis 1744.',
      ja: 'さらに、中学生を対象とした全国コンクールが新設される。1744年から最優秀の生徒を表彰してきた高校版にならったものだ。',
      vocab: [
        { term: 'voit le jour', pos: 'expression (voir le jour)', ja: '誕生する、日の目を見る',
          note: '直訳は「日を見る」＝この世に生まれる。人にも制度にもプロジェクトにも使えます。naître より文語的で、報道が新制度の創設を伝えるときの決まり文句です。',
          collocations: ['un projet qui voit le jour', 'faire voir le jour à'],
          examples: [{ o: 'Le musée devrait voir le jour en 2028.', j: 'その美術館は2028年に開館する見込みだ。' }] },
        { term: 'distinguer', pos: 'v.', ja: '表彰する、際立たせる／区別する',
          note: '2つの意味があります。①区別する（distinguer A de B）②（賞などで）栄誉を与える。ここは②。名詞 une distinction は「区別」と「栄誉・勲章」の両方。',
          collocations: ['distinguer le vrai du faux', 'être distingué par un prix'] }
      ],
      grammar: [
        { point: '指示代名詞 celui / celle / ceux / celles', ja: 'celui des lycées＝「高校のそれ（＝高校版のコンクール）」。同じ名詞（concours）の繰り返しを避けるために使います。性数で形が変わり、必ず後ろに de か関係節が続きます。日本語の「〜のほう」「〜のもの」に当たる、非常に使用頻度の高い代名詞です。',
          examples: [{ o: 'Ma voiture et celle de mon frère.', j: '私の車と兄の車。' },
                      { o: 'Ceux qui veulent partir peuvent le faire.', j: '帰りたい人は帰ってよい。' }] },
        { point: '関係代名詞 qui の先行詞', ja: 'qui distingue… の先行詞は celui（＝高校版のコンクール）であって、lycées ではありません。動詞が単数形 distingue であることがその証拠です。フランス語では動詞の活用形が先行詞の手がかりになる、という読解のコツを覚えておきましょう。' },
        { point: 'sur le modèle de', ja: '「〜をモデルとして」。à l\'image de（〜にならって）、à l\'instar de（〜と同様に・文語）も同義です。制度紹介の定型句。' }
      ],
      nuance: '「1744年から」という一節が、フランスの教育文化を一言で語っています。革命よりも古い制度がいまも続いており、それを中学に広げる ― この歴史の連続性への意識は、フランスの教育議論に常に流れているものです。'
    }
  ],

  guide: [
    'フランスの9月1日は、日本の4月1日に当たります。夏のバカンスが終わり、学校も職場も政治も出版界もいっせいに動き出す ― この一年の再始動全体を la rentrée と呼びます。学校の新学期は la rentrée scolaire、秋の新刊ラッシュは la rentrée littéraire、政界の再開は la rentrée politique。この一語がフランスの秋を組織しています。',
    '2026年の la rentrée は、約1160万人の児童・生徒と85万人の教員で始まりました。最大の話題は、高校でのスマートフォン禁止です（中学ではすでに2018年から禁止されています）。',
    'ただし経緯は複雑です。この禁止は7月末に議会を通った「未成年をSNSから守る法律」の一部でした。ところが憲法評議会（le Conseil constitutionnel）が、その法律の中心部分 ― 15歳未満のSNS利用禁止 ― を違憲として削除しました。それでもマクロン大統領は残った条文を公布し、スマホ禁止だけが施行されることになったのです。「携帯電話のない学校とは、学びの落ち着きを取り戻すことだ」と大統領はXに書きました。',
    '国民教育相のエドゥアール・ジェフレは「最初のうちは守らせるのが少し難しいだろう」と認めつつ、「授業中に携帯が不可欠だと主張できる真面目な根拠はひとつもない」と述べています。運用は各校まかせで、ロッカーに入れるのか専用ポーチを使うのか、罰則をどうするかは校長（proviseur）が決めます。障害のある生徒、プレパやBTSの学生、学食の支払いといった例外も認められています。',
    '新学期の変更点はほかにもあります。2019年から試験的に行われてきた金融教育が、フランス銀行と連携して中学2年（quatrième）の全クラスに拡大されます。また、1744年から続く高校生の全国コンクール（concours général des lycées）にならった中学版が新設されます。',
    '語学面では、この記事は接続法（il faut que … adapte）、条件法による時制の一致（a concédé que … serait）、関係代名詞 dont、指示代名詞 celui ― フランス語の主要文法が一通り出てくる、教材としてきわめて密度の高いテキストです。'
  ],

  deepdive: [
    {
      title: 'Vocabulary｜フランスの学校制度を語る語彙',
      items: [
        { term: 'école / collège / lycée', ja: '小学校／中学校／高校',
          note: '通う生徒はそれぞれ écolier / collégien / lycéen、校長は directeur / principal / proviseur。この対応関係を押さえておくと、フランスの教育記事が一気に読めるようになります。' },
        { term: '学年の数え方', ja: '逆順に数える',
          note: 'CP → CE1 → CE2 → CM1 → CM2（小学校）、6e → 5e → 4e → 3e（中学）、2de → 1re → terminale（高校）。中学・高校は数字が減っていき、最後は terminale（最終学年）。日本の「中2」に当たるのは quatrième です。',
          examples: [{ o: 'Ma fille entre en sixième cette année.', j: '娘は今年、中学1年に上がります。' }] },
        { term: 'le bac / le brevet', ja: 'バカロレア／中学修了試験',
          note: 'le baccalauréat（略して le bac）は高校卒業＝大学入学資格試験。le brevet des collèges は中学修了時の試験。passer le bac＝バカロレアを受ける、⚠️ réussir le bac＝合格する。passer は「受験する」であって「合格する」ではありません（英語 pass との違い）。' },
        { term: 'grandes écoles / prépa', ja: 'グランゼコールと準備級',
          note: 'フランスには大学（université）とは別に、エリート養成のグランゼコールがあります。そこへ入るための2年間が classes préparatoires（prépa）。フランス社会の階層を理解する鍵になる制度です。' },
        { term: 'la circulaire / le décret / l\'arrêté / la loi', ja: '行政文書の階層',
          note: 'la loi（法律・議会が可決）＞ le décret（政令・首相や大統領）＞ l\'arrêté（省令・大臣）＞ la circulaire（通達・運用指針）。フランスの制度ニュースを正確に読むには、この4語の上下関係が必要です。この記事では circulaire（通達）が現場への指示を担っています。' }
      ]
    },
    {
      title: 'Grammar｜接続法はいつ使うのか',
      items: [
        { term: '① 必要・義務', ja: 'il faut que / il est nécessaire que',
          note: 'Il faut que tu partes.（君は出発しなければならない）。この記事の il faut que chaque lycée adapte がこれです。最も出会う頻度の高い接続法のきっかけ。' },
        { term: '② 願望・意志・感情', ja: 'vouloir que / souhaiter que / être content que / avoir peur que',
          note: 'Je veux qu\'il vienne.（彼に来てほしい）。⚠️ espérer que（希望する）だけは直説法を取るという例外があります：J\'espère qu\'il viendra.',
          examples: [{ o: 'Je suis content que tu sois là.', j: '君がいてくれてうれしい。' }] },
        { term: '③ 疑い・否定', ja: 'je ne pense pas que / il n\'est pas sûr que',
          note: 'Je pense qu\'il a raison.（直説法：そう思う）／Je ne pense pas qu\'il ait raison.（接続法：そうは思わない）。肯定なら直説法、否定なら接続法、という揺れがこの記事の soutenir que にも当てはまります。' },
        { term: '④ 特定の接続詞のあと', ja: 'bien que / pour que / avant que / jusqu\'à ce que / à moins que',
          note: 'Bien qu\'il pleuve, je sors.（雨だが出かける）。逆に、après que は本来直説法を取ります（現在は接続法も広く使われています）。接続詞ごとに決まっているので、セットで覚えるのが早道です。',
          examples: [{ o: 'Je te le dis pour que tu comprennes.', j: '君に分かってもらうために言っているんだ。' }] }
      ]
    },
    {
      title: 'Prononciation｜リエゾンとアンシェヌマン',
      open: false,
      items: [
        { term: 'liaison（リエゾン）', ja: '本来は発音しない語末の子音が、次の母音とつながって発音される',
          note: 'les_élèves [レゼレーヴ]、en_vigueur ではリエゾンは起きませんが、les_enfants [レザンファン]、un_argument [アナルギュマン]。この記事の les élèves、des exceptions、aucun argument はすべてリエゾンが起きます。',
          examples: [{ o: 'les élèves / des exceptions / aucun argument', j: 'レゼレーヴ／デゼクセプスィオン／オキュナルギュマン' }] },
        { term: 'enchaînement（アンシェヌマン）', ja: '常に発音される語末子音が、次の母音に移る',
          note: 'il a écrit → [イ・ラ・エクリ]。リエゾンと違い、もともと発音される子音が次の音節に流れ込む現象です。フランス語が「切れ目なく聞こえる」最大の理由。' },
        { term: 'リエゾンしてはいけない場所', ja: 'liaison interdite',
          note: 'et のあとは絶対にリエゾンしません（et_alors ではなく et / alors）。有音の h（le héros）、主語名詞と動詞のあいだ（Les enfants / arrivent）も禁止。「つなげればいい」わけではない点が難しいところです。' },
        { term: '数字の読み方 11,6 / 850 000', ja: 'onze virgule six / huit cent cinquante mille',
          note: 'カンマは virgule と読みます。⚠️ 80は quatre-vingts（4×20）、90は quatre-vingt-dix（4×20+10）。ベルギー・スイスでは septante（70）、nonante（90）を使い、スイスでは huitante（80）も使われます。フランス語圏の地域差が最も分かりやすく出るのが数字です。' }
      ]
    }
  ],

  breakdown: [
    {
      text: 'Elle faisait partie d\'une loi visant à protéger les mineurs face aux réseaux sociaux, dont le Conseil constitutionnel a censuré le volet principal.',
      structure: '<code>Elle</code>〈S＝L\'interdiction〉 <code>faisait partie de</code>〈V・半過去〉 <code>une loi</code>〈補語＝先行詞〉 + <code>[ visant à protéger … ]</code>〈現在分詞句〉 + <code>[ dont le Conseil constitutionnel a censuré le volet principal ]</code>〈関係節〉',
      grammar: '先行詞 loi に2つの修飾がぶら下がる構造。dont は le volet principal DE cette loi の de を担っています。関係節の中では〈dont + 主語 + 動詞 + 目的語〉という語順になり、英語の of which とは並びが違う点に注意。',
      vocab: 'faire partie de（〜の一部である）／viser à（〜を目指す）／dont（de を含む関係代名詞）／volet（部門・柱）／censurer（違憲として削除する）',
      literal: 'それは、SNSに直面した未成年者を保護することを目指す法律の一部をなしていた。その法律の主要な部分を、憲法評議会は削除した。',
      natural: 'この措置は、SNSから未成年を守ることを目的とした法律の一部だった。ただしその法律の中心部分は、憲法評議会によって違憲とされている。',
      nuance: 'dont の関係節は日本語では一文に収めにくいので、「ただしその〜は」と切って訳すのが実用的です。フランス語は関係代名詞で長くつなぎ、日本語は文を切る ― この非対称は仏日翻訳の基本です。無理に一文にすると、日本語が壊れます。'
    },
    {
      text: 'Le ministre a concédé que la mesure serait « un peu difficile à faire respecter au début ».',
      structure: '<code>Le ministre</code>〈S〉 <code>a concédé</code>〈V・複合過去〉 <code>que [ la mesure serait « un peu difficile à faire respecter au début » ]</code>〈従属節〉',
      grammar: '時制の一致。直接話法なら « La mesure sera difficile… »（単純未来）ですが、伝達動詞が過去（a concédé）なので、従属節の未来形は条件法現在 serait に変わります。「もし〜なら」という仮定ではありません。difficile à + 不定詞 は「〜するのが難しい」で、faire respecter は使役の faire。',
      vocab: 'concéder（渋々認める）／serait（過去における未来）／difficile à + inf.（〜しにくい）／faire respecter（守らせる）',
      literal: '大臣は、その措置が「最初のうちは守らせるのが少し難しいだろう」ということを譲歩して認めた。',
      natural: '大臣は、この措置は「最初のうちは守らせるのが少し難しいだろう」と認めた。',
      nuance: '日本語には時制の一致がないため、serait の「過去から見た未来」というニュアンスは「〜だろうと（当時）述べた」と処理するしかありません。逆に言えば、日本語からフランス語へ訳すときは、伝達動詞が過去なら従属節を条件法にする、という操作を意識的に行う必要があります。'
    }
  ],

  tryit: [
    { q: '「君は明日来なければならない」を、il faut que を使って書いてみましょう。',
      hint: 'venir の接続法現在は viennes。',
      a: 'Il faut que tu viennes demain.',
      aj: '君は明日来なければならない。',
      why: 'il faut que のあとは必ず接続法。venir の接続法現在は que je vienne / que tu viennes / qu\'il vienne。不定詞で Il faut venir demain. とすれば「（一般に）来なければならない」となり、主語が特定されません。' },
    { q: '「彼女はそれが簡単だろうと思っていた」を、時制の一致に注意して書いてみましょう。',
      hint: '主節が半過去なので、従属節は条件法現在。',
      a: 'Elle pensait que ce serait facile.',
      aj: '彼女はそれが簡単だろうと思っていた。',
      why: '直接話法なら « Ce sera facile »（単純未来）。主節が過去（pensait）になると、従属節の未来は条件法現在 serait に変わります。× Elle pensait que ce sera facile. は誤りです。' },
    { q: '「それがみんなの話題になっている映画だ」を、dont を使って書いてみましょう。',
      hint: 'parler de の de を dont が担います。',
      a: 'C\'est le film dont tout le monde parle.',
      aj: 'それがみんなの話題になっている映画だ。',
      why: 'parler de qqch なので関係代名詞は dont。× le film que tout le monde parle は誤り。動詞が要求する前置詞が de なら dont、à なら auquel / à qui、無しなら que ― この判断が関係代名詞の核心です。' },
    { q: '「私は3年前からフランス語を学んでいる」を書いてみましょう。時制に注意。',
      hint: 'depuis を使います。複合過去にはしません。',
      a: 'J\'apprends le français depuis trois ans.',
      aj: '私は3年前からフランス語を学んでいる。',
      why: 'フランス語では depuis を現在形と組み合わせて「今も続いている」ことを表します。× J\'ai appris le français depuis trois ans. は誤り（英語 I have been learning に引きずられた典型的なミス）。過去の時点まで続いていた場合は半過去を使います：J\'apprenais le français depuis trois ans quand…' }
  ],

  talk: [
    { q: 'Que pensez-vous de l\'interdiction du téléphone au lycée ?',
      qj: '高校でのスマホ禁止についてどう思いますか。',
      a: 'Sur le principe, je suis plutôt pour. Après, il faudra voir comment ça se passe concrètement.',
      aj: '原則としては賛成ですね。ただ、実際にどうなるかは見てみないと。',
      note: 'Sur le principe（原則としては）と Après（でも実際は）の組み合わせは、フランス語の会話で意見を述べるときの黄金パターンです。Après は本来「その後」ですが、話し言葉では「とはいえ」という留保を導きます。je suis pour / contre＝賛成／反対。' },
    { q: 'En France, la rentrée, c\'est vraiment important ?',
      qj: 'フランスでは、ラントレってそんなに重要なんですか。',
      a: 'Ah oui, c\'est tout un moment. On parle de la rentrée scolaire, mais aussi de la rentrée littéraire, politique... Tout redémarre en même temps.',
      aj: 'ええ、大きな節目ですよ。新学期のことも言いますし、出版界の、政界の…全部が同時に動き出すんです。',
      note: 'c\'est tout un moment＝「ちょっとした一大事だ」という口語表現。tout un / toute une は「まさに一つの〜」という強調です。redémarrer＝再始動する。' },
    { q: 'Vous aviez le droit d\'avoir votre téléphone au lycée ?',
      qj: '高校のとき、携帯は持ち込めましたか。',
      a: 'Officiellement non, mais tout le monde en avait un dans son sac. Disons que les profs fermaient les yeux.',
      aj: '公式にはだめでしたが、みんな鞄に入れていましたよ。先生たちは見て見ぬふりをしていた、という感じです。',
      note: 'fermer les yeux (sur qqch)＝「目をつぶる・見逃す」。日本語とまったく同じ比喩です。Disons que…＝「まあ〜ということです」と表現をやわらげる、非常に便利な会話のクッション。en avait un の en は「携帯を（そのうちの一つ）」を受ける代名詞です。' }
  ],

  sources: [
    { outlet: 'franceinfo', title: 'Interdiction du portable au lycée, éducation financière, questionnaire sur les violences sexuelles... Quelles sont les nouveautés de la rentrée 2026 ?',
      date: '2026-08-31', url: 'https://www.franceinfo.fr/france/rentree/interdiction-du-portable-au-lycee-education-financiere-questionnaire-sur-les-violences-sexuelles-quelles-sont-les-nouveautes-de-la-rentree-2026_8159330.html', accessed: '2026-09-01' },
    { outlet: 'franceinfo', title: 'Rentrée des classes : plus de 11 millions d\'élèves de retour dans leurs établissements... sans téléphone portable',
      date: '2026-09-01', url: 'https://www.franceinfo.fr/france/rentree/direct-rentree-des-classes-plus-de-11-millions-d-eleves-de-retour-dans-leurs-etablissements-sans-telephone-portable_8171747.html', accessed: '2026-09-01' }
  ]
},

/* ══════════════════════════════════════════════════════════ */
{
  id: 'fr-fastfashion',
  lang: 'fr',
  category: 'Économie / Environnement',
  level: 'B1–B2',
  headline: {
    orig: 'Deux euros de plus par tee-shirt : la France taxe l\'ultra fast-fashion',
    ja: 'Tシャツ1枚に2ユーロ上乗せ ― フランスが「超ファストファッション」に課金を始めた'
  },
  why: '本誌の表紙記事と同じ9月1日、パリでは別のことが起きていました。Shein、Temu、AliExpressが売るような「超使い捨てファッション」に、環境スコアに応じた課金（malus）が課され始めたのです。香港での上場と、フランスでの課金 ― 同じ産業に同じ日、正反対の向きの力が働いた。この偶然は、いま世界で何が争われているかを一枚の絵にして見せてくれます。',

  body: [
    {
      id: 'fr-ff-1',
      text: 'Depuis mardi, acheter un tee-shirt d\'ultra fast-fashion en France coûte deux euros de plus.',
      ja: '火曜日から、フランスで超ファストファッションのTシャツを買うと2ユーロ余計にかかるようになった。',
      vocab: [
        { term: 'ultra fast-fashion', pos: 'n.f.', ja: '超ファストファッション（極端に短いサイクルで大量の新作を出す衣料）',
          note: 'フランス語では la mode ultra éphémère（極めて短命なファッション）とも言います。éphémère＝「はかない・一日だけの」。英語をそのまま借用しつつ、フランス語の言い換えも併用されるのが今のフランス語の実情です。',
          collocations: ['la mode éphémère', 'la mode jetable'] }
      ],
      grammar: [
        { point: '不定詞句が主語', ja: 'acheter un tee-shirt… coûte…＝「Tシャツを買うことは〜かかる」。不定詞のかたまりが主語になり、動詞は3人称単数（coûte）で受けます。フランス語では英語の動名詞（buying）に当たるものがなく、不定詞がその役目を果たします。',
          examples: [{ o: 'Apprendre une langue demande du temps.', j: '言語を学ぶには時間がかかる。' }] },
        { point: 'de plus / de moins', ja: '「〜多く／〜少なく」。数量の差を表します。deux euros de plus＝2ユーロ多く。cinq minutes de moins＝5分短く。⚠️ 語順に注意：数量が前、de plus が後ろです（× de plus deux euros）。',
          examples: [{ o: 'Il gagne mille euros de plus que moi.', j: '彼は私より1000ユーロ多く稼いでいる。' }] },
        { point: 'depuis + 時点（現在形）', ja: 'Depuis mardi… coûte（現在形）。「火曜から今まで続いている」ので現在形です。前記事と同じ規則で、英語の現在完了に引きずられないよう注意が必要な箇所です。' }
      ]
    },
    {
      id: 'fr-ff-2',
      text: 'Un arrêté publié au Journal officiel instaure des pénalités financières — un « {{malus}} » — sur les vêtements de la mode ultra éphémère, celle que vendent Shein, Temu ou AliExpress.',
      ja: '官報に掲載された省令が、超短命ファッションの衣料品に金銭的なペナルティ ―「マリュス」― を導入した。Shein、Temu、AliExpressが売っているような衣料である。',
      vocab: [
        { term: 'malus', pos: 'n.m.', ja: 'マリュス（悪い性能に対する課金・割増）',
          note: 'ラテン語の「悪い」から。フランス語では bonus（優遇）の対語として制度名に定着しています。bonus-malus は自動車保険の等級制度、bonus écologique / malus écologique は環境性能に応じた車両購入時の補助金と課徴金。日本語に定訳がなく、そのまま「マリュス」と書くか「課徴金」と訳します。',
          collocations: ['le malus écologique', 'le système bonus-malus'] },
        { term: 'arrêté', pos: 'n.m.', ja: '省令、（大臣・知事などの）命令',
          note: '⚠️ 動詞 arrêter（止める・逮捕する）の過去分詞と同じ形ですが、名詞では行政命令を指します。法律（loi）→ 政令（décret）→ 省令（arrêté）という階層の一番下で、具体的な数値や運用を定めます。',
          collocations: ['un arrêté préfectoral', 'un arrêté ministériel'] },
        { term: 'Journal officiel', pos: 'n.m.', ja: '（フランスの）官報',
          note: '略して le JO。法令はここに掲載されて初めて効力を持ちます。⚠️ les JO（複数）は Jeux Olympiques（オリンピック）の略なので、単複で意味がまったく変わります。',
          collocations: ['publié au Journal officiel'] },
        { term: 'instaurer', pos: 'v.', ja: '（制度を）導入する、設ける',
          note: 'établir（設立する）より制度的な響き。instaurer une taxe / un dialogue / un climat de confiance。名詞は l\'instauration。',
          collocations: ['instaurer une taxe', 'instaurer un dialogue'] }
      ],
      grammar: [
        { point: '指示代名詞 celle que', ja: 'celle＝la mode（女性名詞）を受けています。celle que vendent Shein…＝「Sheinらが売っているそのファッション」。前記事の celui des lycées と同じ用法で、名詞の繰り返しを避けます。',
          examples: [{ o: 'Ma voiture est plus vieille que celle de Paul.', j: '私の車はポールのより古い。' }] },
        { point: '関係節内の主語倒置 que vendent Shein, Temu ou AliExpress', ja: '通常の語順なら que Shein, Temu ou AliExpress vendent ですが、主語が長いとき、フランス語は動詞を前に出します。que のあとにいきなり動詞が来たら「主語は後ろにある」と考えてください。書き言葉では非常に一般的で、読解の妨げになりやすい構造です。',
          examples: [{ o: 'le livre qu\'a écrit mon professeur', j: '私の先生が書いた本' }] },
        { point: 'ダッシュによる挿入 — un « malus » —', ja: '言い換えや補足を挟むときに使います。カンマや括弧より視覚的に強く、読者の注意を引きます。ここでは「金銭的ペナルティ」を「マリュス」という制度名で言い直しています。' }
      ],
      structure: 'Un arrêté〈S〉 [ publié au Journal officiel ]〈過去分詞句〉 instaure〈V〉 des pénalités financières〈O〉 [— un « malus » —]〈同格の挿入〉 sur les vêtements de la mode ultra éphémère〈対象〉, celle que vendent Shein, Temu ou AliExpress〈同格の言い換え〉。'
    },
    {
      id: 'fr-ff-3',
      text: 'Le montant dépend du score environnemental de chaque article : 50 centimes pour une paire de chaussettes, 2 euros pour un tee-shirt, 9 euros pour un jean, 12 euros pour une veste.',
      ja: '金額は各商品の環境スコアに応じて決まる。靴下1足に50サンチーム、Tシャツに2ユーロ、ジーンズに9ユーロ、上着に12ユーロである。',
      vocab: [
        { term: 'montant', pos: 'n.m.', ja: '（金額の）額',
          note: 'monter（上る）から。le montant de la facture＝請求額。prix（値段）が「商品の価格」であるのに対し、montant は「合計として算出された額」を指します。行政・経理の文書で頻出。',
          collocations: ['le montant total', 'le montant des aides'] },
        { term: 'dépendre de', pos: 'v.', ja: '〜次第である、〜による',
          note: '前置詞は必ず de。Ça dépend.（場合による）は会話で毎日使う返事です。dépendre de qqn＝人に依存する。',
          collocations: ['ça dépend', 'dépendre des circonstances'],
          examples: [{ o: 'Tout dépend du temps qu\'il fera.', j: 'すべては天気次第だ。' }] },
        { term: 'centimes', pos: 'n.m.pl.', ja: 'サンチーム（ユーロの100分の1）',
          note: '公式には cent ですが、フランスでは日常的に centime と呼ばれます。50 centimes＝0.50ユーロ。ベルギー・カナダのフランス語圏でも centime / cenne（ケベック）など呼び方に差があります。',
          collocations: ['cinquante centimes'] }
      ],
      grammar: [
        { point: '数量表現 une paire de', ja: '「一足の・一組の」。une paire de chaussettes / de chaussures / de lunettes（眼鏡は必ず une paire de）。数量を表す名詞のあとの de には冠詞がつきません（× une paire des chaussettes）。beaucoup de、un peu de、une bouteille de も同じ規則です。' },
        { point: '対価の pour', ja: '2 euros pour un tee-shirt＝「Tシャツ1枚につき2ユーロ」。pour は「〜と引き換えに・〜あたり」という交換・対価の意味を持ちます。par（〜ごとに）との違い：2 euros par article は「1品ごとに2ユーロ」という配分の意味合いが強くなります。' },
        { point: 'コロンによる列挙', ja: '前の文の内容（金額は環境スコア次第）を、具体的な数字で展開しています。フランス語ではコロンの前に半角スペースを入れる点を忘れずに（article : 50 centimes）。' }
      ]
    },
    {
      id: 'fr-ff-4',
      text: 'D\'ici à 2030, le malus pourra grimper jusqu\'à 19,50 euros par pièce, sans toutefois dépasser 50 % du prix hors taxe.',
      ja: '2030年までにマリュスは1点あたり最大19.50ユーロまで上がりうる。ただし税抜き価格の50%を超えることはない。',
      vocab: [
        { term: 'grimper', pos: 'v.', ja: '（数値が）跳ね上がる／よじ登る',
          note: '本来は「よじ登る」。経済記事では「急上昇する」の意味で好んで使われ、monter（上がる）より勢いがあります。les prix grimpent＝物価が跳ね上がる。',
          collocations: ['les prix grimpent', 'grimper en flèche'],
          examples: [{ o: 'Le chômage a grimpé de deux points.', j: '失業率は2ポイント跳ね上がった。' }] },
        { term: 'hors taxe', pos: 'loc. adj.', ja: '税抜きの',
          note: '略して HT。対語は TTC（toutes taxes comprises＝税込み）。フランスの価格表示・請求書では必ずこの2つが併記されるため、生活とビジネスの必須語です。',
          collocations: ['prix HT', 'prix TTC'] },
        { term: 'pièce', pos: 'n.f.', ja: '1点、1個／部屋／硬貨／演劇',
          note: '極めて多義的な語です。par pièce＝1点あたり。un appartement de trois pièces＝3部屋のアパート。une pièce de théâtre＝演劇作品。une pièce de monnaie＝硬貨。文脈で判断する典型的な多義語。',
          collocations: ['vendu à la pièce', 'une pièce d\'identité'] }
      ],
      grammar: [
        { point: 'sans + 不定詞（否定の付帯状況）', ja: 'sans toutefois dépasser＝「ただし超えることなく」。sans + 不定詞で「〜せずに」。ne… pas を使わずに否定を表せる便利な形です。⚠️ sans のあとは必ず不定詞で、活用形は置けません（× sans il dépasse）。',
          examples: [{ o: 'Il est parti sans dire au revoir.', j: '彼はさよならも言わずに出ていった。' }] },
        { point: 'pouvoir の単純未来 pourra', ja: 'pouvoir の未来形は不規則です（je pourrai, tu pourras, il pourra…）。r が2つ重なる点が特徴。同様に不規則な未来形：être→serai、avoir→aurai、aller→irai、faire→ferai、venir→viendrai、voir→verrai。この6つは最優先で覚えるべき動詞です。' },
        { point: 'D\'ici à + 期限', ja: '「〜までに」。d\'ici à 2030 / d\'ici 2030（à は省略可）。jusqu\'à（〜まで、継続の終点）との違い：d\'ici à は「その時点までのあいだに」という期限、jusqu\'à は「その時点までずっと」という継続です。',
          compare: 'D\'ici à demain, il faut finir.（明日までに終える必要がある）／Jusqu\'à demain, on peut attendre.（明日まで待てる）。' },
        { point: 'toutefois の位置', ja: '「しかしながら」。文中に自由に置ける副詞で、ここでは sans と dépasser のあいだに割り込んでいます。この柔軟な位置取りはフランス語の副詞の特徴で、cependant / néanmoins も同様です。' }
      ]
    },
    {
      id: 'fr-ff-5',
      text: 'Le gouvernement assure que le dispositif épargnera les enseignes de fast-fashion « classique », comme Primark, Zara, Uniqlo ou H&M.',
      ja: '政府は、この制度がプリマーク、ザラ、ユニクロ、H&Mといった「従来型」のファストファッション企業には及ばないと説明している。',
      vocab: [
        { term: 'dispositif', pos: 'n.m.', ja: '（政策の）仕組み、制度／装置',
          note: 'フランスの行政用語の中核語です。un dispositif d\'aide（支援制度）、un dispositif de sécurité（警備態勢）。「装置」から「制度・仕組み」へ意味が広がっており、政策記事ではほぼ必ず出てきます。',
          collocations: ['mettre en place un dispositif', 'un dispositif fiscal'] },
        { term: 'épargner', pos: 'v.', ja: '（被害・負担を）免れさせる／貯金する',
          note: '2つの意味を持ちます。①〜を免れさせる（La crise a épargné ce secteur.＝危機はこの部門を襲わなかった）②貯蓄する（l\'épargne＝貯蓄）。ここは①。日本語の「エパルニュ（貯蓄）」からは①の意味が出てこないので注意。',
          collocations: ['épargner de l\'argent', 'être épargné par la crise'] },
        { term: 'enseignes', pos: 'n.f.pl.', ja: '（小売の）ブランド、チェーン店',
          note: '本来は「看板」。そこから「その看板を掲げる店・ブランド」へ。les grandes enseignes de la distribution＝大手流通チェーン。marque（ブランド）よりも「店舗として展開している」という含みが強い語です。',
          collocations: ['les grandes enseignes', 'une enseigne lumineuse'] }
      ],
      grammar: [
        { point: 'assurer que + 直説法', ja: '「〜だと断言する・保証する」。断定の動詞なので直説法（épargnera）。前記事の soutenir que と同じ仕組みです。フランス語では「発言・断定＝直説法／願望・疑い・感情＝接続法」という大原則が働きます。' },
        { point: '単純未来 épargnera', ja: 'futur simple。まだ起きていない制度の効果について述べています。フランス語には近接未来（aller + 不定詞）もあり、va épargner なら「もうすぐそうなる」という近さが出ます。書き言葉の報道では単純未来が標準です。',
          compare: 'Il va pleuvoir.（今にも降りそう）／Il pleuvra demain.（明日は雨だろう）。' },
        { point: 'comme（例示）', ja: '「〜のような」。par exemple（たとえば）より軽く、名詞を直接つなげます。⚠️ comme には「〜として」（Il travaille comme serveur.）、「〜なので」（Comme il pleut, je reste.）の意味もあり、フランス語で最も多義的な語のひとつです。' },
        { point: '引用符による留保 « classique »', ja: 'ギユメで囲むことで、「いわゆる『従来型』の」という距離を置いた言い方になります。日本語の「いわゆる」やカギカッコと同じ機能で、書き手が完全にはその呼び方に同意していないことを示します。' }
      ],
      nuance: 'この一文が制度の政治的な要点です。狙い撃ちされているのは中国発のプラットフォームであり、フランス国内に店舗と雇用を持つ既存チェーンは対象外 ― と政府は説明しています。「環境政策」と「産業政策」が同じ制度の中に同居している、という読み方ができます。'
    },
    {
      id: 'fr-ff-6',
      text: 'C\'est l\'une des mesures phares de la loi adoptée cet été contre la mode jetable.',
      ja: 'これは、この夏に成立した使い捨てファッション規制法の目玉のひとつである。',
      vocab: [
        { term: 'mesures phares', pos: 'n.f.pl.', ja: '目玉政策、看板となる措置',
          note: 'phare は「灯台」。名詞を後ろから修飾して「その分野を照らす＝代表的な」という意味を作ります。le produit phare（主力商品）、le projet phare（旗艦プロジェクト）。フランス語では名詞を形容詞のように使うこの用法が生産的です。',
          collocations: ['le produit phare', 'la mesure phare du budget'] },
        { term: 'jetable', pos: 'adj.', ja: '使い捨ての',
          note: 'jeter（捨てる）＋-able（〜できる）。un briquet jetable（使い捨てライター）、des couverts jetables（使い捨てカトラリー）。la mode jetable は「使い捨てファッション」という批判的な言い方です。',
          collocations: ['un appareil photo jetable', 'la société du jetable'] }
      ],
      grammar: [
        { point: 'l\'une des + 複数名詞', ja: '「〜のうちのひとつ」。l\'un / l\'une の l\' は古い定冠詞の名残で、une des mesures とも言えますが l\'une des のほうが書き言葉では丁寧です。動詞は単数で受けます（C\'est l\'une des mesures…）。',
          examples: [{ o: 'C\'est l\'un des meilleurs restaurants de la ville.', j: 'ここは街で最高のレストランのひとつだ。' }] },
        { point: '過去分詞の後置修飾 la loi adoptée cet été', ja: 'la loi (qui a été) adoptée cet été。関係代名詞＋être の省略で、adoptée は loi（女性単数）に一致しています。前記事の votée par le Parlement と同じ構造で、フランス語の報道文では極めて頻繁に使われます。' },
        { point: '時の表現 cet été（無前置詞）', ja: '「この夏に」。ce matin, ce soir, cette semaine, cet été — 指示形容詞がつくと前置詞は不要です（× en cet été）。一方、指示形容詞がないときは en été（夏に）と前置詞が必要になります。' }
      ]
    },
    {
      id: 'fr-ff-7',
      text: 'Le hasard du calendrier a bien fait les choses : le même jour, à Hong Kong, Shein faisait ses premiers pas en Bourse — et l\'action {{chutait}}.',
      ja: '暦のいたずらはよくできていた。同じ日、香港ではSheinが株式市場に初めて足を踏み入れており ― そして株価は下落していた。',
      vocab: [
        { term: 'chutait', pos: 'v. (chuter・半過去)', ja: '（相場が）下落する／転倒する',
          note: 'une chute（落下・下落）から。経済記事では株価・売上・支持率の下落に使います。日常では「転ぶ」（il a chuté dans l\'escalier）。同義で dégringoler（転がり落ちる、より口語的）、s\'effondrer（暴落する）。',
          collocations: ['les cours chutent', 'une chute libre'],
          examples: [{ o: 'Le titre a chuté de 10 % en une journée.', j: 'その銘柄は一日で10%下落した。' }] },
        { term: 'faire ses premiers pas', pos: 'expression', ja: '初めの一歩を踏み出す、デビューする',
          note: '赤ん坊が歩き始めるイメージから。faire ses premiers pas en Bourse / au cinéma / dans le journalisme。日本語の「第一歩を踏み出す」とまったく同じ比喩です。',
          collocations: ['faire ses premiers pas', 'les premiers pas d\'un bébé'] },
        { term: 'Bourse', pos: 'n.f.', ja: '証券取引所、株式市場',
          note: '大文字で書きます。entrer en Bourse＝株式を上場する。⚠️ 小文字の une bourse は「財布」または「奨学金」（une bourse d\'études）。大文字・小文字で意味が変わる語です。',
          collocations: ['entrer en Bourse', 'la Bourse de Paris'] }
      ],
      grammar: [
        { point: '半過去 faisait / chutait による同時進行', ja: 'ここでの半過去は「同じ時に、向こうではこういう状況だった」という背景描写です。複合過去（a fait / a chuté）にすると出来事の報告になりますが、半過去にすることで「フランスで課金が始まったちょうどそのとき、香港では…」という同時性が生まれます。この時制の選択が、この一文の効果のすべてです。',
          compare: 'L\'action a chuté.（株価は下落した：出来事）／L\'action chutait.（株価は下落しつつあった：その時の情景）' },
        { point: 'bien faire les choses', ja: '「うまくやる・気が利いている」。Le hasard a bien fait les choses.＝「偶然がうまい具合に働いた」という決まった言い回しです。皮肉として使われることも多く、ここでもその響きがあります。',
          examples: [{ o: 'Vous avez bien fait les choses !', j: '（もてなしなどに対して）行き届いていますね！' }] },
        { point: 'le même jour（同格の時間表現）', ja: '「同じ日に」。même は名詞の前で「同じ」、名詞の後ろで「〜自身」（le jour même＝まさにその日）。位置で意味が変わる形容詞の代表例です。',
          examples: [{ o: 'la même chose / la chose même', j: '同じこと／まさにそのもの' }] }
      ],
      nuance: 'Le hasard du calendrier a bien fait les choses. は、フランスのジャーナリズムが好む「軽い皮肉」の典型です。事実だけを並べて、評価は読者に委ねる ― しかし語の選び方で明らかに方向づけている。この距離感がフランスの報道文体の味わいです。'
    },
    {
      id: 'fr-ff-8',
      text: 'Reste une question que la loi ne tranche pas : le malus fera-t-il renoncer les acheteurs, ou {{sera-t-il}} simplement absorbé dans le prix ?',
      ja: '残るのは、法律が答えを出していない問いである。マリュスは買い手に購入をあきらめさせるのか、それとも単に価格の中に吸収されてしまうのか。',
      vocab: [
        { term: 'sera-t-il', pos: 'v. (être・単純未来＋倒置)', ja: '〜だろうか（疑問形）',
          note: 'sera（être の単純未来3人称単数）＋ -t- ＋ il。母音で終わる動詞と il/elle/on のあいだに -t- を挟む規則です（a-t-il, va-t-elle, sera-t-il）。書き言葉の疑問文の標準形。',
          collocations: ['sera-t-il possible ?', 'y aura-t-il...?'] },
        { term: 'trancher', pos: 'v.', ja: '（問題に）決着をつける／切る',
          note: '本来は「切断する」。そこから「議論を断ち切る＝決着をつける」へ。trancher une question / un débat。名詞は une tranche（一切れ：une tranche de pain）。',
          collocations: ['trancher le débat', 'une décision tranchée'] },
        { term: 'renoncer à', pos: 'v.', ja: '〜を断念する、あきらめる',
          note: '前置詞は à。renoncer à un projet / à ses droits。ここでは faire renoncer les acheteurs で「買い手に断念させる」という使役形になっており、à 以下（何を断念するか）は文脈から自明なため省略されています。',
          collocations: ['renoncer à un voyage', 'y renoncer'] },
        { term: 'absorbé', pos: 'adj. (absorber)', ja: '吸収された',
          note: 'ここでは「コストが価格の中に吸収され、消費者に転嫁されない／気づかれない」という経済用語的な使い方です。absorber une hausse des coûts＝コスト上昇を吸収する。',
          collocations: ['absorber les coûts', 'être absorbé par'] }
      ],
      grammar: [
        { point: '主語の倒置 Reste une question', ja: '本来は Une question reste。動詞を先に出すことで「残っているものがある ― それは…」という提示の効果が生まれます。文語的で、記事の締めや論説の転換点でよく使われます。Restent deux problèmes.（2つの問題が残る）。',
          examples: [{ o: 'Vient ensuite la question du financement.', j: '次に来るのが財源の問題である。' }] },
        { point: '倒置疑問文（書き言葉の疑問）', ja: 'フランス語の疑問文は3種類：① 語調のみ（Tu viens ?）② est-ce que（Est-ce que tu viens ?）③ 倒置（Viens-tu ?）。①は口語、②は中立、③は書き言葉・改まった場です。報道記事の問いかけは必ず③になります。',
          examples: [{ o: 'Le malus sera-t-il efficace ?', j: 'マリュスは効果があるのだろうか。' }] },
        { point: '使役 faire + 不定詞', ja: 'faire renoncer les acheteurs＝「買い手に断念させる」。faire + 不定詞は「〜させる」。⚠️ 語順に注意：不定詞のすぐ後ろに意味上の主語が来ます（faire renoncer les acheteurs であって × faire les acheteurs renoncer ではありません）。英語の make them give up とは並びが違います。',
          examples: [{ o: 'Cette nouvelle m\'a fait changer d\'avis.', j: 'その知らせで考えが変わった。' },
                      { o: 'Il fait travailler ses employés le week-end.', j: '彼は従業員を週末も働かせている。' }] },
        { point: 'ou（二者択一の提示）', ja: '2つの可能性を並べて読者に問いかける形。フランス語の論説記事は、結論を言い切らずに「AなのかBなのか」で終える書き方を好みます。答えを与えるのではなく、考える枠組みを与える ― この文体はフランスの教育（dissertation）の型そのものです。' }
      ],
      structure: '<code>Reste</code>〈V・倒置〉 <code>une question</code>〈S〉 [ <code>que la loi ne tranche pas</code> ]〈関係節〉 : <code>le malus fera-t-il renoncer les acheteurs</code>〈疑問①〉, ou <code>sera-t-il simplement absorbé dans le prix</code>〈疑問②〉 ?'
    }
  ],

  guide: [
    '9月1日、フランスの官報（Journal officiel）に掲載された省令（arrêté）が施行され、「超ファストファッション（la mode ultra éphémère）」の衣料品に金銭的なペナルティが課されるようになりました。フランスではこうした制度上の課徴金を malus（マリュス）と呼びます ― 自動車の bonus-malus 制度でおなじみの言葉です。',
    '金額は各商品の環境スコアに応じて決まります。2026年時点では、靴下1足に50サンチーム、Tシャツに2ユーロ、ジーンズに9ユーロ、上着に12ユーロ。2030年までには1点あたり最大19.50ユーロまで引き上げられる可能性がありますが、税抜き価格の50%を超えないという上限が設けられています。',
    '政府の説明によれば、この制度はプリマーク、ザラ、ユニクロ、H&Mといった「従来型」のファストファッション企業には及びません。つまり実質的な標的は、Shein、Temu、AliExpress といった中国発のオンラインプラットフォームです。これは今夏に成立した「使い捨てファッション」規制法の目玉措置のひとつとされています。',
    '偶然ですが、この制度が動き出したのとまったく同じ日、香港ではSheinが株式市場に上場し、株価が下落しました（本誌の表紙記事を参照してください）。一方で資本市場に迎え入れられ、他方で規制の網がかかる ― 同じ産業に、同じ日に、正反対の力が働いたことになります。',
    'そして記事が最後に投げかける問いは、まだ誰にも答えられていません。この課金は買い手を思いとどまらせるのか、それとも単に価格に吸収されて終わるのか。フランスの論説記事は、このように結論を言い切らずに問いで終える形を好みます。これは学校教育で徹底的に鍛えられる dissertation（小論文）の型そのものです。'
  ],

  deepdive: [
    {
      title: 'Vocabulary｜フランスの制度と経済を読む語彙',
      items: [
        { term: 'loi / décret / arrêté / circulaire', ja: '法令の4階層',
          note: 'loi（法律・議会）→ décret（政令・大統領/首相）→ arrêté（省令・大臣）→ circulaire（通達・運用指針）。フランスの制度ニュースはこの4語を正確に使い分けます。この記事の主役は arrêté で、法律が定めた枠の中で具体的な金額を決めるのがその役割です。' },
        { term: 'bonus / malus', ja: '優遇と課徴',
          note: 'ラテン語の「良い／悪い」。フランスの環境政策は、この対概念で組み立てられることが多い。bonus écologique（電気自動車購入への補助）と malus écologique（高排出車への課徴金）はその代表です。' },
        { term: 'HT / TTC', ja: '税抜き／税込み',
          note: 'hors taxe / toutes taxes comprises。フランスで買い物や取引をするなら必須の略語。消費者向け価格は TTC、企業間は HT で表示されるのが原則です。' },
        { term: 'dispositif / mesure / disposition', ja: '紛らわしい3語',
          note: 'un dispositif＝制度・仕組み全体。une mesure＝個々の措置。une disposition＝法文の中の一条項。この記事にはすべて出てくる可能性のある語で、行政フランス語の基礎です。' },
        { term: 'entrer en Bourse / être coté', ja: '上場する',
          note: 'entrer en Bourse（上場する）、être coté en Bourse（上場している）、l\'introduction en Bourse（IPO・新規株式公開）。英語の IPO もそのまま使われますが、フランス語の正式表現はこちらです。' }
      ]
    },
    {
      title: 'Grammar｜使役の faire と laisser',
      items: [
        { term: 'faire + 不定詞', ja: '〜させる（積極的に）',
          note: 'faire renoncer les acheteurs（買い手に断念させる）。⚠️ 語順は〈faire + 不定詞 + 意味上の主語〉。英語と並びが違うので、日本人が最も間違える構文のひとつです。',
          examples: [{ o: 'Il a fait pleurer sa sœur.', j: '彼は妹を泣かせた。' },
                      { o: 'Je vais faire réparer ma voiture.', j: '車を修理してもらうつもりだ。' }] },
        { term: 'laisser + 不定詞', ja: '〜させておく（放任）',
          note: 'faire が「させる」なら laisser は「するのを許す・放っておく」。Laisse-moi faire.（私にやらせて）。Il a laissé partir son fils.（息子が出ていくのを止めなかった）。' },
        { term: 'se faire + 不定詞', ja: '〜される・〜してもらう',
          note: 'Je me suis fait couper les cheveux.（髪を切ってもらった）。Il s\'est fait voler son vélo.（自転車を盗まれた）。「してもらう」と「されてしまう」の両方を表し、話し言葉で極めて頻繁に使われます。日本語の受け身に相当する重要な形です。',
          examples: [{ o: 'Elle s\'est fait avoir.', j: '彼女は騙された。' }] },
        { term: '代名詞の位置', ja: 'faire + 不定詞では代名詞は faire の前へ',
          note: 'Il me fait rire.（彼は私を笑わせる）。× Il fait me rire. 使役の2つの動詞は1つのかたまりとして扱われるため、代名詞は最初の動詞の前に置きます。' }
      ]
    },
    {
      title: 'Expressions｜数字と変動を語る',
      open: false,
      items: [
        { term: '上昇：grimper / bondir / s\'envoler / progresser / augmenter', ja: '強い順',
          note: 's\'envoler（飛び立つ＝急騰）＞ bondir（跳ねる）＞ grimper（よじ登る）＞ augmenter（増える・中立）＞ progresser（伸びる・やや前向き）。英語と同じく、動詞の選択そのものが評価を含みます。' },
        { term: '下降：s\'effondrer / plonger / dégringoler / chuter / reculer / baisser', ja: '強い順',
          note: 's\'effondrer（崩壊する）＞ plonger（急降下）＞ dégringoler（転げ落ちる・口語）＞ chuter（下落）＞ reculer（後退する）＞ baisser（下がる・中立）。この記事の chutait は中程度の強さです。' },
        { term: 'de + 数値 / à + 数値', ja: '変化幅と到達点',
          note: 'baisser de 10 %（10%分下がる）／baisser à 10 %（10%の水準まで下がる）。前置詞ひとつで意味がまったく変わります。数字を読み違えないための最重要の区別です。',
          examples: [{ o: 'Le taux est passé de 5 % à 3 %.', j: '比率は5%から3%へ下がった。' }] },
        { term: 'd\'ici à / jusqu\'à / dès', ja: '期限の3語',
          note: 'd\'ici à 2030（2030年までに）／jusqu\'à 2030（2030年までずっと）／dès 2030（2030年からもう）。時間の前置詞は、政策記事の正確な理解に直結します。' }
      ]
    }
  ],

  breakdown: [
    {
      text: 'Un arrêté publié au Journal officiel instaure des pénalités financières sur les vêtements de la mode ultra éphémère, celle que vendent Shein, Temu ou AliExpress.',
      structure: '<code>Un arrêté</code>〈S〉 [ <code>publié au Journal officiel</code> ]〈過去分詞句〉 <code>instaure</code>〈V〉 <code>des pénalités financières</code>〈O〉 <code>sur les vêtements de la mode ultra éphémère</code>〈対象〉, <code>celle [ que vendent Shein, Temu ou AliExpress ]</code>〈同格〉',
      grammar: '主語 Un arrêté と動詞 instaure のあいだに過去分詞句が割り込んでいます。文末の celle は la mode を受ける指示代名詞で、その関係節では主語（Shein…）が動詞 vendent の後ろに倒置されています。「que のあとにいきなり動詞」は、フランス語の書き言葉で最も読みにくい構造のひとつです。',
      vocab: 'arrêté（省令）／Journal officiel（官報）／instaurer（導入する）／celle que（〜であるところのそれ）',
      literal: '官報に公表された一つの省令が、超短命なファッションの衣服に対して、金銭的な罰則を設ける。すなわち、シーイン、テム、アリエクスプレスが売っているところのそれである。',
      natural: '官報に掲載された省令によって、超ファストファッションの衣料品 ― Shein、Temu、AliExpressが売っているような衣料 ― に課金が導入された。',
      nuance: 'フランス語は「無生物主語＋能動態」を好みます（Un arrêté instaure…）。日本語では「省令によって〜が導入された」と受け身にするほうが自然です。この主語の扱いの違いは、仏日翻訳で最も頻繁に調整が必要になる箇所です。'
    },
    {
      text: 'Reste une question que la loi ne tranche pas : le malus fera-t-il renoncer les acheteurs, ou sera-t-il simplement absorbé dans le prix ?',
      structure: '<code>Reste</code>〈V・倒置〉 <code>une question</code>〈S〉 [ <code>que la loi ne tranche pas</code> ]〈関係節〉 : ① <code>le malus fera-t-il renoncer les acheteurs</code> ou ② <code>sera-t-il simplement absorbé dans le prix</code> ?',
      grammar: '文頭の動詞倒置（Reste une question）は「残るのは〜だ」という提示の型。コロンのあとは2つの倒置疑問文が ou で並列されています。fera-t-il renoncer は〈単純未来＋倒置〉＋〈使役 faire + 不定詞〉の二重構造。sera-t-il absorbé は〈単純未来＋倒置〉＋〈受動態〉です。',
      vocab: 'trancher（決着をつける）／faire renoncer（断念させる）／être absorbé（吸収される）',
      literal: '法律が切断しない一つの問いが残る。すなわち、マリュスは購買者たちに断念させるのだろうか、それとも単に価格の中に吸収されるのだろうか。',
      natural: '法律が答えを出していない問いが残る。この課金は買い手に購入をあきらめさせるのか、それとも単に価格の中に吸収されて終わるのか。',
      nuance: 'trancher（切る）を「答えを出す」と訳せるかどうかが分かれ目です。フランス語は議論を「切断する」と表現し、日本語は「決着をつける／答えを出す」と表現します。比喩の身体感覚が言語ごとに違う、という好例です。'
    }
  ],

  tryit: [
    { q: '「彼はさよならも言わずに出ていった」を、sans を使って書いてみましょう。',
      hint: 'sans のあとは不定詞です。',
      a: 'Il est parti sans dire au revoir.',
      aj: '彼はさよならも言わずに出ていった。',
      why: 'sans + 不定詞で「〜せずに」。× sans il a dit は不可。partir は être を助動詞に取る動詞なので、複合過去は il est parti（性数一致に注意：elle est partie）。' },
    { q: '「その知らせで私は考えを変えた」を、使役の faire を使って書いてみましょう。',
      hint: '「知らせが私に考えを変えさせた」と発想します。',
      a: 'Cette nouvelle m\'a fait changer d\'avis.',
      aj: 'その知らせで私は考えが変わった。',
      why: 'faire + 不定詞の使役。代名詞 me は faire の前に置きます（× a fait me changer）。changer d\'avis＝考えを変える（前置詞 de が必要）。日本語では無生物主語を避けて「〜で」と訳すのが自然です。' },
    { q: '「マリュスは効果があるのだろうか」を、書き言葉の倒置疑問文で書いてみましょう。',
      hint: '-t- が必要です。',
      a: 'Le malus sera-t-il efficace ?',
      aj: 'マリュスは効果があるのだろうか。',
      why: '名詞主語の倒置疑問では、名詞をそのまま置いたうえで代名詞を動詞の後ろに付けます（Le malus sera-t-il…）。sera が母音で終わるため -t- を挟みます。⚠️ フランス語では ? の前に半角スペースを入れます。' },
    { q: '「比率は5%から3%へ下がった」を書いてみましょう。前置詞に注意。',
      hint: 'passer de … à … を使います。',
      a: 'Le taux est passé de 5 % à 3 %.',
      aj: '比率は5%から3%へ下がった。',
      why: 'passer de A à B＝AからBへ移る。baisser de 2 points（2ポイント分下がる）と baisser à 3 %（3%の水準まで下がる）の違いも確認しておきましょう。passer は être を助動詞に取ります。' }
  ],

  talk: [
    { q: 'Vous pensez que ce malus va changer quelque chose ?',
      qj: 'このマリュスで何かが変わると思いますか。',
      a: 'Honnêtement, j\'ai des doutes. Deux euros sur un tee-shirt à cinq euros, ça reste moins cher qu\'ailleurs.',
      aj: '正直、疑わしいですね。5ユーロのTシャツに2ユーロ足しても、よそより安いままですから。',
      note: 'Honnêtement（正直なところ）は意見を切り出す定番。avoir des doutes＝疑いを持つ。ça reste + 形容詞＝「それでも〜のままだ」という、口語で非常に使いやすい形です。' },
    { q: 'Vous achetez parfois sur ces sites-là ?',
      qj: 'ああいうサイトで買うことはありますか。',
      a: 'Ça m\'est arrivé, oui. Mais depuis que je sais comment c\'est fabriqué, j\'ai un peu de mal.',
      aj: 'ありますよ。でも、どうやって作られているか知ってからは、ちょっと抵抗があります。',
      note: 'Ça m\'est arrivé＝「そういうことはあった」という控えめな肯定。avoir du mal (à faire qqch)＝「〜するのがつらい・抵抗がある」。depuis que + 直説法＝「〜して以来」。どれも会話の頻出表現です。' },
    { q: 'En France, on parle beaucoup d\'écologie dans la vie quotidienne ?',
      qj: 'フランスでは日常生活で環境の話をよくしますか。',
      a: 'Assez, oui. Le tri, les transports, ce qu\'on mange... C\'est devenu un sujet de conversation banal, presque comme la météo.',
      aj: 'まあまあしますね。ゴミの分別、交通手段、何を食べるか…。天気の話と同じくらい、ごく普通の話題になりました。',
      note: 'le tri（分別）は le tri sélectif（分別収集）の略。ce qu\'on mange＝「私たちが食べるもの」（ce que＋節）。banal＝ありふれた。presque comme…＝「ほとんど〜と同じくらい」で、比較を柔らかく述べる形です。' }
  ],

  sources: [
    { outlet: 'Le Monde', title: 'Les pénalités financières sur les produits d\'ultrafast-fashion, visant Shein, Temu et AliExpress, entrent en vigueur mardi',
      date: '2026-09-01', url: 'https://www.lemonde.fr/economie/article/2026/09/01/les-penalites-financieres-sur-les-produits-d-ultrafast-fashion-visant-shein-temu-et-aliexpress-entrent-en-vigueur-mardi_6763279_3234.html', accessed: '2026-09-01' },
    { outlet: 'franceinfo', title: 'Arrêts maladie à durée limitée, interdiction du portable au lycée, taxe sur les vêtements… Voici tout ce qui change au 1er septembre',
      date: '2026-08-31', url: 'https://www.franceinfo.fr/societe/arrets-maladie-a-duree-limitee-interdiction-du-portable-au-lycee-taxe-sur-les-vetements-voici-tout-ce-qui-change-au-1er-septembre_8169296.html', accessed: '2026-09-01' }
  ]
}

]);
