FROM microsoft/aspnetcore-build:2.0.5-2.1.4 AS build-env
WORKDIR /app

ENV ASPNETCORE_ENVIRONMENT="Development"
# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/aspnetcore:2.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "ASPNETReact.dll"]