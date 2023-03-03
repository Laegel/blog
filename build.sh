cd docs/
rm -rf _next && rm -rf fonts && rm -rf idees && rm -rf images && rm -rf divers && rm -rf technos
cd ../ && npm run build && mv out/* docs
