cd docs/
rm -rf _aleph && rm -rf fonts && rm -rf idees && rm -rf images && rm -rf reflexions && rm -rf technos
cd /workspace/app && aleph build && mv docs/* ../docs
