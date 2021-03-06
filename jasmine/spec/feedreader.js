/* feedreader.js
 *
 * 此文件为 Jasmine 测试文件，包含所有关于该应用的测试用例。
 */

// 关掉jasmine默认的随机排序
var jasmineEnv = jasmine.getEnv();
    jasmineEnv.configure({
        random: false
    });

// 把所有测试都放在 Ready 函数里，因为有些测试需要操作 DOM 元素。
$(function() {
    // 关于 allFeeds 数组(Feed资源列表)的测试
    describe('RSS Feeds', function () {
        var isDefinedAndNotEmpty = function (str) {
            expect(str).toBeDefined();
            expect(str).toEqual(jasmine.anything()); // 不为 null 或 undefined
            expect(str).toEqual(jasmine.notEmpty());
        }

        // 用来确保 allFeeds 数组被正确定义且不为空
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // 循环遍历 allFeeds 数组成员，确保 URL 键已被定义且值非空
        it('URL defined and Not empty', function () {
            allFeeds.forEach(function (val) {
                var url = val.url,
                    urlVeri = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
                
                isDefinedAndNotEmpty(url);
                expect(url).toMatch(urlVeri); // URL 合法性校验（使用正则）
            });
        });


        // 循环遍历 allFeeds 数组成员，确保 name 键已被定义且值非空
        it('name defined and Not empty', function () {
            allFeeds.forEach(function (val) {
                var name = val.name;
                isDefinedAndNotEmpty(name);
            });
        });
    });


    // 抽屉菜单功能测试
    describe('The menu', function () {
        // 测试菜单的初始状态是否是隐藏的
        it('element is hidden by default', function () {
            var isHidden = $('body').hasClass('menu-hidden');
            expect(isHidden).toBeTruthy();
        });

         // 测试菜单点击后是否可以正常做显示/隐藏的切换
        it('changes visibility when the menu icon is clicked', function () {
            var menu = $('.menu-icon-link');
            
            $.when()
                .done(function () {
                    menu.trigger('click'); // 主动触发 click 事件
                })
                .done(function () {
                    var isVisible = !$('body').hasClass('menu-hidden');
                    expect(isVisible).toBeTruthy();
                })
                .done(function () {
                    menu.trigger('click');
                })
                .done(function () {
                    var isHidden = $('body').hasClass('menu-hidden');
                    expect(isHidden).toBeTruthy();
                })
        });
    });

    var ajaxDelay    = 6000, // 等待Ajax加载内容的延迟时间
        jasmineDelay = 6500; // 自定义的jasmine异步延迟等待时间

    // 初始加载feed内容功能测试
    describe('Initial Entries', function () {
        // 测试 app.js 中的 loadFeed() 在初始化阶段是否被正常调用并加载出了内容
        it('loadFeed() is called and completes its work', function (done) {
            // 由于Ajax涉及异步操作，所以这里需要延迟后再执行测试
            setTimeout(function () {
                var entryNum = $('.feed').find('.entry').length;
                expect(entryNum).toBeGreaterThan(1);
                done();
            }, ajaxDelay);
        }, jasmineDelay); // 调整默认超时时间
    });

    // 再次加载feed内容功能测试
    describe('New Feed Selection', function () {
        // 测试 app.js 中的 loadFeed() 在变更数据源后是否还可以正常工作
        it('loadFeed() still works properly', function (done) {
            var oldContent = $('.entry').eq(0).children('h2').text(), // 缓存旧内容，1个就够
                cb = function () {
                    var newContent = $('.entry').eq(0).children('h2').text();
                    expect(newContent).not.toEqual(oldContent);
                    done();
                }
            loadFeed(2, cb);
        }, jasmineDelay);
    });
}());
