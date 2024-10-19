$(function () {    
    function setBook(){      
        // var bookUrl = "https://xhwtc.wenming.news.cn/u/f/carousel.do"
        var bookUrl = "//xhbooks.news.cn/u/f/carousel.do"
		
		
        $.ajax({
            url: bookUrl,
            success: function(data){
                // console.log("data:", data.data);
                localStorage.setItem("xhBook", JSON.stringify(data.data));
				setData(data.data);
            },
            error:function(){
                // console.log("error")
                //null
                var getXhBook = localStorage.getItem("xhBook");
                //console.log("getXhBook:", getXhBook)
                if (getXhBook!==null){
                    getXhBook = JSON.parse(getXhBook);
					setData(getXhBook);					
                }else{
					var data = [{
					  "id" : 2,
					  "name" : "【新华网】习近平谈治国理政第三卷 第3卷 中文版平装",
					  "info" : "近平谈治国理政第三卷 第3卷 中文版平装",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-2295073052",
					  "picUrl" : "https://img.alicdn.com/imgextra/i2/2208205833955/O1CN014i6lHY1f5R3DG8XG2_!!2208205833955.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 3,
					  "name" : "十四五大战略与2035远景",
					  "info" : "十四五大战略与2035远景 清华大学国情研究院 编写",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.226.7028697796w2vB&id=631061875967&rn=390e86e69ba0f836a4a8d1cb56e48872&abbucket=7",
					  "picUrl" : "https://img.alicdn.com/imgextra/i4/2208205833955/O1CN01No6XxZ1f5R4REn3nt_!!2208205833955.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 4,
					  "name" : "十九届五中全会建议单行本",
					  "info" : "中国共产党第十九届中央委员会第五次全体会议通过的《建议》文件单行本。",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.174.2f956977DwHmib&id=630760074725&rn=4fe72e33cf59acd440b7dde1c1f2a2f2&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN011cw9e3qdKnD1Pvo_!!1049653664.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 5,
					  "name" : "中国制度面对面",
					  "info" : "中国制度面对面——理论热点面对面·2020",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.98.64326977uSZwvf&id=622934833566&rn=24d2ea7555e6f860c8adfc09e0585db8&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01Ot7WfY1cw9nU4iZ7a_!!1049653664-0-lubanu-s.jpg_430x430q90.jpg",
					  "sort" : 2,
					  "isDel" : 0
					}, {
					  "id" : 6,
					  "name" : "习近平讲故事",
					  "info" : "习近平讲故事",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.147.4f166977in2JJq&id=621992124111&rn=104e5ad68d380bdfe7443c18c4d7315f&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/TB2Ej1GqH1YBuNjSszeXXablFXa_!!1049653664-0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 7,
					  "name" : "价值",
					  "info" : "价值投资实战手册 金融投资财务书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a212k0.12153887.0.0.788f687dgOCyjd&id=628457766481",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/2208205833955/O1CN018RIvBi1f5R5AufFNE_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : 3,
					  "isDel" : 0
					}, {
					  "id" : 8,
					  "name" : "巴菲特致股东的信",
					  "info" : "投资者和公司高管教程 原书第4版 行为金融与投资心理学",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.154.7e686977LFmTAW&id=621973121886&rn=85767c68a0e74509e9b7a98471500139&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i2/1049653664/O1CN01BEtato1cw9hfIWW5Q_!!1049653664.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 9,
					  "name" : "定位",
					  "info" : "互联网市场营销商业竞争模式市场营销零售管理书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.130.7e686977LFmTAW&id=621903757643&rn=85767c68a0e74509e9b7a98471500139&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/2208205833955/O1CN01OLYVbR1f5R340GevI_!!2208205833955.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 10,
					  "name" : "清晨领导力 新经理人的50个领导力修炼",
					  "info" : "管理领导学领导力企业管理书籍 组织管理领导力进阶宝典书",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.151.601d28f3L2xVwn&id=624622048800&rn=70506d78f87dd0300c70baaecc9330d4&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i2/1049653664/O1CN01E11rbT1cw9njRTNig_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 11,
					  "name" : "心理学导论",
					  "info" : "普通心理学教材领域 现象级心理学入门思想与行为的认识之路",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.157.4b957897rrdnaI&id=630349010345&rn=8ee7eb00ae304bbea7d2b2956f397e71&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/2208205833955/O1CN01Syw11v1f5R5LBOYHd_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 12,
					  "name" : "恰到好处的安慰",
					  "info" : "心理学倾听情商心理咨询心灵疗愈情感心理自助 成功励志读物书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.148.4b957897rrdnaI&id=623927622947&rn=8ee7eb00ae304bbea7d2b2956f397e71&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01HvPMll1cw9nW92V7G_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 13,
					  "name" : "身体从未忘记",
					  "info" : "理创伤疗愈中的大脑心智和身体心理学心灵疗愈心态自我修复情绪治疗心灵释放自我调节书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.154.4b957897rrdnaI&id=621723596467&rn=8ee7eb00ae304bbea7d2b2956f397e71&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01eOHvuC1cw9gzmK99m_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 14,
					  "name" : "静观自我关怀 勇敢爱自己的51项练习",
					  "info" : "静观自我关怀（mindful self-compassion，MSC）是全球*个专门用于增强个人自我关怀能力的培训项目。你如何对待一个深陷困境的朋友，就如何对待自己，这就是自我关怀的内涵。",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.160.4b957897rrdnaI&id=628829908235&rn=8ee7eb00ae304bbea7d2b2956f397e71&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01Tkra5H1cw9oNuI0C9_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 15,
					  "name" : "应对焦虑 九种消除焦虑恐惧和忧虑的简单方法",
					  "info" : "走出社交恐惧症积极心理学书籍焦虑抑郁症自我治疗书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.163.4b957897rrdnaI&id=622736057502&rn=8ee7eb00ae304bbea7d2b2956f397e71&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i4/2208205833955/O1CN01crnshP1f5R5L66Omv_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 16,
					  "name" : "范蠡 从兵家奇才到东方商圣",
					  "info" : "传记政治人物 吴越之战 历史人物商训 社科类书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.151.4b957897rrdnaI&id=625869760528&rn=8ee7eb00ae304bbea7d2b2956f397e71&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/2208205833955/O1CN01gFImgO1f5R5JCow7J_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 17,
					  "name" : "研究是一门艺术",
					  "info" : "学经典书籍程啸写作技巧毕业写作指南社会科学理论适用毕业论文写作课教材撰写报告",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.175.4b957897rrdnaI&id=625869604674&rn=8ee7eb00ae304bbea7d2b2956f397e71&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01dkAjlu1cw9kLSVpAD_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 18,
					  "name" : "养育有安全感的孩子",
					  "info" : "安全感圆环法 养育男孩女孩正版 育儿书籍父母必读家庭教育孩子书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.111.3f106977c0eTA7&id=622625488910&rn=8e64c0ae62c8ec52f610146be836ba62&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i4/1049653664/O1CN01iCbnuD1cw9nUjUnPC_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 19,
					  "name" : "量化健身",
					  "info" : "肌减脂轻松拆解增肌减脂力量举训练健身教练健身饮食运动健身书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.138.3f106977c0eTA7&id=621723500664&rn=8e64c0ae62c8ec52f610146be836ba62&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i2/2208205833955/O1CN01BRorpF1f5R5PHBnzx_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 20,
					  "name" : "生酮饮食书 低碳水高脂肪饮食完全指南",
					  "info" : "健康饮食营养食疗书籍减肥瘦身教程图书健身食谱书科学饮食生活身体调理轻食一日三餐",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.126.3f106977c0eTA7&id=623292587128&rn=8e64c0ae62c8ec52f610146be836ba62&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/2208205833955/O1CN01VOZntP1f5R5Iat9Dv_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 21,
					  "name" : "烤箱料理萨巴厨房",
					  "info" : "美食零基础烤箱美食制作书料理书菜谱教程",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.153.609c6977YhFA0Y&id=629706480100&rn=73a12f3f7a0d3c90a27bb88fe70ef8ef&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/2208205833955/O1CN01J4UO6D1f5R4rGJHXd_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 22,
					  "name" : "深入学习习近平关于教育的重要论述",
					  "info" : "党政读物论述摘编选编党史文献党建类知识书籍学习读本",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.116.64326977uSZwvf&id=623974302070&rn=24d2ea7555e6f860c8adfc09e0585db8&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01Ttd9V61cw9nJImnMP_!!1049653664-2-lubanu-s.png_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 23,
					  "name" : "盛世大典",
					  "info" : "新时代党政读物党建书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.272.48fd6977QM2LcD&id=627651226666&rn=e0e64ce04c5392b70ddfcc01a7126af4&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i4/2208205833955/O1CN010zcrUe1f5R3xNtsvr_!!2208205833955.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 24,
					  "name" : "数字跃迁 数字化变革的战略与战术",
					  "info" : "数字化转型的框架与策略数字化时代企业经营管理的数字化升级",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.116.16536977hD5FLI&id=625102583764&rn=6281303bbd4b07e963cb49877808163b&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/1049653664/O1CN01F8frUO1cw9nfKakt5_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 25,
					  "name" : "60万米高空看中国",
					  "info" : "正版 60万米高空看中国 2020月榜中国好书 刘思扬主编 新华社卫星新闻实验室编著 建档100周年纪实巨献 新华社重磅打造 江苏科技",
					  "url" : "https://detail.tmall.com/item.htm?id=637959218660",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/2208205833955/O1CN01krCg6j1f5R6Efx5Zq_!!2-item_pic.png_430x430q90.jpg",
					  "sort" : 1,
					  "isDel" : 0
					}, {
					  "id" : 26,
					  "name" : "商业的本质和互联网",
					  "info" : "国内贸易经济经管励志企业管理书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.132.7e686977bovUzd&id=621909553078&rn=f8994d68514925acf429d900e4fd7a9a&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01r9TGzx1cw9lVgwYOy_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : 0,
					  "isDel" : 0
					}, {
					  "id" : 27,
					  "name" : "干法",
					  "info" : "司经营管理读物 企业经营管理",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.83.16536977hD5FLI&id=622524763676&rn=6281303bbd4b07e963cb49877808163b&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/1049653664/O1CN01aeUVlF1cw9kwCE0wj_!!1049653664.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 28,
					  "name" : "卓有成效的管理者",
					  "info" : "经典管理学有效实践管理学原理与实践企业战略管理领导力书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.146.7e686977bovUzd&id=621973077871&rn=f8994d68514925acf429d900e4fd7a9a&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/1049653664/O1CN015xxJCD1cw9hlPD01Q_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 29,
					  "name" : "运营管理",
					  "info" : "经济管理教材管理学 工商管理专业教材 战略人员技术运营工具书",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.209.7e686977bovUzd&id=622377601060&rn=f8994d68514925acf429d900e4fd7a9a&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i2/2208205833955/O1CN014sXCeb1f5R5IasD0F_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 30,
					  "name" : "私域流量",
					  "info" : "搭建私域流量池用户精细化运营IP打造教程流量变现私域流量运营书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.127.7e686977LFmTAW&id=621787112213&rn=85767c68a0e74509e9b7a98471500139&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01hQTU3L1cw9lVvh5BI_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 31,
					  "name" : "内在动机 自主掌控人生的力量",
					  "info" : "自我决定理论 自我激励方法方式 自我价值实现",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.5-b-s.w4011-22950817093.145.4b957897rrdnaI&id=624646168214&rn=8ee7eb00ae304bbea7d2b2956f397e71&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01Z4gfrI1cw9njxCZUI_!!0-item_pic.jpg_60x60q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 32,
					  "name" : "自驱型成长 如何科学有效地培养孩子的自律 科学有效培养孩子的自律",
					  "info" : "本书提供脑科学的前沿知识、行为疗法的*新发现、来自数千名儿童和青少年的案例研究，以及读者立刻可以采取行动的具体建议，教你如何让孩子走上自律自控自主的成功道路",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.108.3f106977c0eTA7&id=627956790746&rn=8e64c0ae62c8ec52f610146be836ba62&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i2/2208205833955/O1CN01dRVf0H1f5R5IatTyl_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 33,
					  "name" : "谷物大脑",
					  "info" : "康饮食保养保健食疗无麸质饮食法美国健康类书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.114.3f106977c0eTA7&id=621653968160&rn=8e64c0ae62c8ec52f610146be836ba62&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i4/2208205833955/O1CN01StU04B1f5R5HNsoYR_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 34,
					  "name" : "胆固醇 其实跟你想的不一样",
					  "info" : "降血脂甘油三酯总胆固醇高密度脂蛋白低密度脂蛋白生酮饮食营养指导健康科普读物",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.117.3f106977c0eTA7&id=624218798758&rn=8e64c0ae62c8ec52f610146be836ba62&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/2208205833955/O1CN01zHb04y1f5R3pR4r47_!!2208205833955.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 35,
					  "name" : "好喝的粥 萨巴蒂娜",
					  "info" : "萨巴厨房 熬粥煲粥食谱书 健康早餐食谱",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.174.609c6977YhFA0Y&id=630276054727&rn=73a12f3f7a0d3c90a27bb88fe70ef8ef&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01hntln71cw9h2DlxsO_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 36,
					  "name" : "谷物大脑完整生活计划",
					  "info" : "饮食营养食疗健康生活计划参考书籍心理学与生活谷物大脑实践指南",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.123.4eec6977g6We0v&id=622507739943&rn=bc37d95b3072174fbed9810e7969abb3&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/2208205833955/O1CN0136VOsM1f5R5QoEfTw_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 37,
					  "name" : "学会自我接纳 帮孩子超越自卑 走向自信",
					  "info" : "家庭教育自我接纳独立自主自信心培养心理辅导书籍",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.138.4eec6977g6We0v&id=623770518565&rn=bc37d95b3072174fbed9810e7969abb3&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i3/2208205833955/O1CN01RZlnHA1f5R5Cglw3A_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 38,
					  "name" : "张爱玲的33堂写作课",
					  "info" : "倾城之恋节选张爱玲作品 提高写作技能力",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.113.34056977m3aJpK&id=620835479264&rn=01210f3d3e0c4231394f93f0bca76076&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/1049653664/O1CN01pnxcvj1cw9mWMsJW0_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}, {
					  "id" : 39,
					  "name" : "土耳其蓝 希腊蓝",
					  "info" : "春暖花开系列旅游随笔认知世界认知自我之旅旅行历史哲学哲学魅力",
					  "url" : "https://detail.tmall.com/item.htm?spm=a1z10.3-b-s.w4011-22950730525.118.34056977m3aJpK&id=625026046592&rn=01210f3d3e0c4231394f93f0bca76076&abbucket=13",
					  "picUrl" : "https://img.alicdn.com/imgextra/i1/2208205833955/O1CN01VN85Tz1f5R5Ks0z6r_!!0-item_pic.jpg_430x430q90.jpg",
					  "sort" : -1,
					  "isDel" : 0
					}]
					setData(data);
				}
            }
        });
    }
    setBook(); 
	function setData(data){
		var tempNum = data.length;
		var bookHtml = "";
		$(data).each(function (i, item) {
			if(item.sort == -1){
				data[i].sort = tempNum;
				tempNum++;
			} 
		})
		data = data.sort(function(a,b){
			return (a.sort - b.sort)
		})			
		
		$(data).each(function (i, item) {
			if (i < 2) {
				bookHtml += '<li><a href="' + item.url + '" target="_blank"><div><img src="' + item.picUrl + '"></div><div class="book-tit">' + item.name + '</div></li>';
			}
		})
		$(".book ul").html(bookHtml)
		var bookListHtml = "";
		$(data).each(function (i, item) {
			if (i < 6) {
				bookListHtml += '<li><div class="pic"><a href="' + item.url + '" target="_blank"><img src="' + item.picUrl + '" alt=""></a></div><div class="title"><a href="' + item.url + '" target="_blank">' + item.name + '</a></div></li>';
			}
		})
		$(".bookList ul").html(bookListHtml)
	}  
})
