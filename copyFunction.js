function myFunction() {
    var copyText = "https://raw.githubusercontent.com/CarHubOfficial/CarHubOfficial/main/CarHub.lua"
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}