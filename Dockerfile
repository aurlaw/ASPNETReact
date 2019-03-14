FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env
WORKDIR /app

ENV NODE_VERSION=10.15.1
ENV NODE_DOWNLOAD_SHA=ca1dfa9790876409c8d9ecab7b4cdb93e3276cedfc64d56ef1a4ff1778a40214

RUN curl -SL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz" --output nodejs.tar.gz \
    && echo "$NODE_DOWNLOAD_SHA nodejs.tar.gz" | sha256sum -c - \
    && tar -xzf "nodejs.tar.gz" -C /usr/local --strip-components=1 \
    && rm nodejs.tar.gz \
    && ln -s /usr/local/bin/node /usr/local/bin/nodejs

ENV ASPNETCORE_ENVIRONMENT="Production"
# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-alpine3.9
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "ASPNETReact.dll"]
# Heroku
# CMD ASPNETCORE_URLS=http://*:$PORT dotnet ASPNETReact.dll
