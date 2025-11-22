# Script to switch between Git accounts
# Command: .\switch-git-account.ps1

function Show-CurrentAccount {
    Write-Host "`n=== Current Git Account ===" -ForegroundColor Cyan
    $currentName = git config user.name
    $currentEmail = git config user.email
    
    if ($currentName -and $currentEmail) {
        Write-Host "Name:   $currentName" -ForegroundColor Green
        Write-Host "Email:  $currentEmail" -ForegroundColor Green
    }
    else {
        Write-Host "No account configured" -ForegroundColor Yellow
    }
    Write-Host ""
}

function Set-GitAccount {
    param(
        [string]$Name,
        [string]$Email,
        [bool]$Global = $false
    )
    
    if ($Global) {
        git config --global user.name "$Name"
        git config --global user.email "$Email"
        Write-Host "`nAccount configured GLOBALLY:" -ForegroundColor Green
    }
    else {
        git config user.name "$Name"
        git config user.email "$Email"
        Write-Host "`nAccount configured for this REPOSITORY:" -ForegroundColor Green
    }
    
    Write-Host "Name: $Name" -ForegroundColor Cyan
    Write-Host "Email:  $Email" -ForegroundColor Cyan
}

# Definir tus cuentas aquí
$accounts = @(
    @{
        Name     = "Personal"
        UserName = "AndrxCR"
        Email    = "andrey.mata21@gmail.com"
    },
    @{
        Name     = "Work"
        UserName = "jose.a.mata.mena"
        Email    = "jose.a.mata.mena@accenture.com"
    }
)

# Mostrar cuenta actual
Show-CurrentAccount

# Mostrar menú
Write-Host "=== Switch Git Account ===" -ForegroundColor Cyan
Write-Host ""

for ($i = 0; $i -lt $accounts.Count; $i++) {
    Write-Host "$($i + 1). $($accounts[$i].Name)" -ForegroundColor Yellow
    Write-Host "   $($accounts[$i].UserName) <$($accounts[$i].Email)>" -ForegroundColor Gray
}

Write-Host "$($accounts.Count + 1). Configure custom account" -ForegroundColor Yellow
Write-Host "0. Exit" -ForegroundColor Red
Write-Host ""

# Leer selección
$selection = Read-Host "Select an option"

if ($selection -eq "0") {
    Write-Host "`Exiting..." -ForegroundColor Yellow
    exit
}

$selectionNum = [int]$selection

if ($selectionNum -gt 0 -and $selectionNum -le $accounts.Count) {
    $selectedAccount = $accounts[$selectionNum - 1]
    
    Write-Host "`n¿Configure global or only for this repository?" -ForegroundColor Cyan
    Write-Host "1. Global (all repositories)" -ForegroundColor Yellow
    Write-Host "2. Local (only this repository)" -ForegroundColor Yellow
    
    $scope = Read-Host "Select the scope"
    $isGlobal = $scope -eq "1"
    
    Set-GitAccount -Name $selectedAccount.UserName -Email $selectedAccount.Email -Global $isGlobal
    
}
elseif ($selectionNum -eq ($accounts.Count + 1)) {
    # Configuración personalizada
    Write-Host "`n=== Configure custom account ===" -ForegroundColor Cyan
    $customName = Read-Host "Enter your name"
    $customEmail = Read-Host "Enter your email"
    
    Write-Host "`n¿Configure global or only for this repository?" -ForegroundColor Cyan
    Write-Host "1. Global (all repositories)" -ForegroundColor Yellow
    Write-Host "2. Local (only this repository)" -ForegroundColor Yellow
    
    $scope = Read-Host "Select the scope"
    $isGlobal = $scope -eq "1"
    
    Set-GitAccount -Name $customName -Email $customEmail -Global $isGlobal
    
}
else {
    Write-Host "`nInvalid option" -ForegroundColor Red
}

Write-Host "`nDone! Press Enter to exit..." -ForegroundColor Green
Read-Host
