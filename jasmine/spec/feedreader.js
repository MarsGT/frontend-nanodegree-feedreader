/* feedreader.js
 *
 * 此文件为 Jasmine 测试文件，包含所有需要在应用中运行的测试。
 */

// 把所有测试都放在 Ready 函数里，因为有些测试需要操作 DOM 元素。
$(function() {
    // 关于 allFeeds 数组的测试
    describe('RSS Feeds', function () {
        var isDefinedAndNotEmpty = function (str) {
            expect(str).toBeDefined();
            expect(str).not.toBe('');
        }

        // 用来确保 allFeeds 数组被正确定义且不为空
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // 循环遍历 allFeeds 数组成员，确保 URL 键已被定义且值非空
        it('URL defined and Not empty', function () {
            allFeeds.forEach(function (val) {
                var url = val.url;
                isDefinedAndNotEmpty(url)
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

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
