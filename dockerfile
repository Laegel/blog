FROM denoland/deno:alpine AS base
ENV TINI_SUBREAPER=1
WORKDIR /app

RUN deno run -A https://deno.land/x/aleph/install.ts
EXPOSE 8080
