"use strict";
var Home;
(function (Home) {
    var Son;
    (function (Son) {
        var s = (function () {
            function s() {
            }
            return s;
        }());
    })(Son = Home.Son || (Home.Son = {}));
    var Header = (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = 'this is header';
            document.body.appendChild(ele);
        }
        return Header;
    }());
    var Content = (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = 'this is Content';
            document.body.appendChild(ele);
        }
        return Content;
    }());
    var Footer = (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = 'this is Footer';
            document.body.appendChild(ele);
        }
        return Footer;
    }());
    var Page = (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
