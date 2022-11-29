'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var router = require('next/router');
var jsxRuntime = require('react/jsx-runtime');

const Header = () => {
  const router$1 = router.useRouter();
  return /*#__PURE__*/jsxRuntime.jsx("button", {
    onClick: () => router$1.push('/about'),
    children: router$1.pathname === '/about' ? 'Home' : 'About'
  });
};

exports.Header = Header;
//# sourceMappingURL=index.js.map
