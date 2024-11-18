
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80


FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src


COPY ["EvoltisTechnical_BE.csproj", "./"]
RUN dotnet restore "EvoltisTechnical_BE.csproj"


COPY . .
RUN dotnet publish "EvoltisTechnical_BE.csproj" -c Release -o /app/publish


FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "EvoltisTechnical_BE.dll"]
