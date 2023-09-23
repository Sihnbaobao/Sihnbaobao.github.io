// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}


// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/RFfZXtbF/98975554-p0.jpg)" class="pimgbox" onclick="changeBg('url(https://i.postimg.cc/RFfZXtbF/98975554-p0.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/637WhTQ3/baitian.png)" class="pimgbox" onclick="changeBg('url(https://i.postimg.cc/637WhTQ3/baitian.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/VvRVrWcb/yewan.png)" class="pimgbox" onclick="changeBg('url(https://i.postimg.cc/VvRVrWcb/yewan.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/N0jCcqhq/110713201-p0.jpg)" class="pimgbox" onclick="changeBg('url(https://i.postimg.cc/N0jCcqhq/110713201-p0.jpg)')"></a>
    </div>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/43nT95sc/92771524-p1.png)" class="imgbox" onclick="changeBg('url(https://i.postimg.cc/43nT95sc/92771524-p1.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/wBPYcmjG/74540234-p1.jpg)" class="imgbox" onclick="changeBg('url(https://i.postimg.cc/wBPYcmjG/74540234-p1.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/ry52xzXf/background1.jpg)" class="imgbox" onclick="changeBg('url(https://i.postimg.cc/ry52xzXf/background1.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/x8nNmgTY/96145490-p0.jpg)" class="imgbox" onclick="changeBg('url(https://i.postimg.cc/x8nNmgTY/96145490-p0.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://i.postimg.cc/MK8vrzRT/76081770-p0.jpg)" class="imgbox" onclick="changeBg('url(https://i.postimg.cc/MK8vrzRT/76081770-p0.jpg)')"></a>
    </div>
    
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)" onclick="changeBg('linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg('linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg('linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)" onclick="changeBg('linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)" onclick="changeBg('linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #0583bf, #159bc5, #16b4cb, #0aced0)" onclick="changeBg('linear-gradient(25deg, #0583bf, #159bc5, #16b4cb, #0aced0)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #3e47d1, #8b5fb8, #ba7b9d, #df9980)" onclick="changeBg('linear-gradient(25deg, #3e47d1, #8b5fb8, #ba7b9d, #df9980)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #0e5c71, #15828f, #19a9ae, #1ad3ce)" onclick="changeBg('linear-gradient(25deg, #0e5c71, #15828f, #19a9ae, #1ad3ce)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" title="白" rel="noopener external nofollow" class="box" style="background: #f7f9fe" onclick="changeBg('#f7f9fe')"></a> 
    <a href="javascript:;" title="黑" rel="noopener external nofollow" class="box" style="background: #30303c" onclick="changeBg('#30303c')"></a> 
    <a href="javascript:;" title="锌灰" rel="noopener external nofollow" class="box" style="background: #7a7374" onclick="changeBg('#7a7374')"></a> 
    <a href="javascript:;" title="晶红" rel="noopener external nofollow" class="box" style="background: #eea6b7" onclick="changeBg('#eea6b7')"></a> 
    <a href="javascript:;" title="银灰" rel="noopener external nofollow" class="box" style="background: #918072" onclick="changeBg('#918072')"></a> 
    <a href="javascript:;" title="荷花白" rel="noopener external nofollow" class="box" style="background: #fbecde" onclick="changeBg('#fbecde')"></a> 
    <a href="javascript:;" title="冰山蓝" rel="noopener external nofollow" class="box" style="background: #a4aca7" onclick="changeBg('#a4aca7')"></a> 
    <a href="javascript:;" title="玉簪绿" rel="noopener external nofollow" class="box" style="background: #a4cab6" onclick="changeBg('#a4cab6')"></a> 
    <a href="javascript:;" title="松霜绿" rel="noopener external nofollow" class="box" style="background: #83a78d" onclick="changeBg('#83a78d')"></a> 
    <a href="javascript:;" title="淡绿灰" rel="noopener external nofollow" class="box" style="background: #70887d" onclick="changeBg('#70887d')"></a> 
    <a href="javascript:;" title="石绿" rel="noopener external nofollow" class="box" style="background: #57c3c2" onclick="changeBg('#57c3c2')"></a> 
    <a href="javascript:;" title="甸子蓝" rel="noopener external nofollow" class="box" style="background: #10aec2" onclick="changeBg('#10aec2')"></a> 
    <a href="javascript:;" title="清水蓝" rel="noopener external nofollow" class="box" style="background: #93d5dc" onclick="changeBg('#93d5dc')"></a> 
    <a href="javascript:;" title="蜻蜓蓝" rel="noopener external nofollow" class="box" style="background: #3b818c" onclick="changeBg('#3b818c')"></a> 
    <a href="javascript:;" title="碧青" rel="noopener external nofollow" class="box" style="background: #5cb3cc" onclick="changeBg('#5cb3cc')"></a> 
    <a href="javascript:;" title="星蓝" rel="noopener external nofollow" class="box" style="background: #93b5cf" onclick="changeBg('#93b5cf')"></a> 
    </div>
`;
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}