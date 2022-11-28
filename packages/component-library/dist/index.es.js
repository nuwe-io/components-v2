import { useRouter } from 'next/router';
import { jsx } from 'react/jsx-runtime';

const Header = () => {
  const router = useRouter();
  return /*#__PURE__*/jsx("button", {
    onClick: () => router.push('/about'),
    children: router.pathname === '/about' ? 'Home' : 'About'
  });
};

export { Header };
//# sourceMappingURL=index.es.js.map
