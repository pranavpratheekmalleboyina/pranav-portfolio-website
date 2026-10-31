# pranav-portfolio-website

A website which describes everything about my professional journey.

## Getting started

```bash
npm ci          # install the exact dependencies from package-lock.json
npm run dev     # start the dev server at http://localhost:3000
```

## Verify the installation

Run these after installing to confirm dependencies are correct:

```bash
npm ls next react react-dom   # prints the installed versions; any "missing" or "invalid" line means a broken install
npm audit                     # reports known vulnerabilities in installed packages
npm run build                 # confirms the site compiles with these dependencies
```

If `npm ls` reports problems, delete `node_modules` and run `npm ci` again.

## Security and maintenance

In December 2025, a critical vulnerability in React Server Components
("React2Shell", CVE-2025-55182) affected Next.js. This project was upgraded
to patched versions. Do not downgrade `next`, `react` or `react-dom`.

If the Vercel dashboard or `npm audit` flags a vulnerable dependency, run
this from the project root:

```bash
npx fix-react2shell-next
```

Then repeat the verification steps above and commit `package.json` together
with `package-lock.json`.

Details: https://vercel.com/react2shell