cd docs/
rm -rf _aleph && rm -rf fonts && rm -rf idees && rm -rf images && rm -rf divers && rm -rf technos
cd ../app && aleph build && mv docs/* ../docs
