var chatHub = $.connection.chatHub;


$.connection.hub.start().done();

chatHub.client.totalMessages = function (count) {
    $("#totalMessage").text(count);
    $("#totalMessageBar").css("width", count / 100 * 600 + "px");
}

chatHub.client.totalMymessages = function (count) {
    $("#totalMyMessage").text(count);
    $("#totalMyMessageBar").css("width", count / 100 * 600 + "px");
}

chatHub.client.todayMessages = function (count) {
    $("#todayMessages").text(count);
    $("#todayMessagesBar").css("width", count / 100 * 600 + "px");
}

chatHub.client.todayMyMessages = function (count) {
    $("#todayMyMessages").text(count);
    $("#todayMyMessagesBar").css("width", count / 100 * 600 + "px");
}

chatHub.client.totalMember = function (count) {
    $("#totalMember").text(count);
    $("#totalMemberBar").css("width", count / 100 * 600 + "px");
}

