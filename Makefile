.PHONY: serve build clean

# Local preview — requires Docker Desktop running
serve:
	docker run --rm \
		-v "$(PWD):/srv/jekyll" \
		-p 4000:4000 \
		jekyll/jekyll:4 \
		jekyll serve --host 0.0.0.0

# One-off build into ./_site/
build:
	docker run --rm \
		-v "$(PWD):/srv/jekyll" \
		jekyll/jekyll:4 \
		jekyll build

clean:
	rm -rf _site .jekyll-cache .jekyll-metadata
