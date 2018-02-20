(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('express'), require('hbs'), require('open')) :
	typeof define === 'function' && define.amd ? define(['express', 'hbs', 'open'], factory) :
	(factory(global.express,global.hbs,global.open));
}(this, (function (express,hbs,open) { 'use strict';

function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

express = express && express.hasOwnProperty('default') ? express['default'] : express;
hbs = hbs && hbs.hasOwnProperty('default') ? hbs['default'] : hbs;
open = open && open.hasOwnProperty('default') ? open['default'] : open;

const port = 3000;

const app = express();

app.set("view engine", "html");
app.set("views", "./dist");


app.engine('html', hbs.__express);
app.use(express.static('dist'));

app.get('*', function (req, res) {
  res.render('index', {});
});

app.listen(port, function (err) {
  console.log(`Rollup app started at http://localhost:${port}/`); // eslint-disable-line no-console
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});

})));
//# sourceMappingURL=dev-server.js.map
