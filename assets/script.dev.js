"use strict";

var getUserData = function getUserData(userId) {
  var url, response, userData;
  return regeneratorRuntime.async(function getUserData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "https://discordlookup.mesalytic.moe/v1/user/".concat(userId);
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch(url));

        case 4:
          response = _context.sent;

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error('Network response was not ok');

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          userData = _context.sent;
          return _context.abrupt("return", userData);

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          console.error('Error fetching user data:', _context.t0);
          return _context.abrupt("return", null);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

var formatDate = function formatDate(dateString) {
  var date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

var displayUserInfo = function displayUserInfo(userData) {
  if (!userData) {
    console.log('User data not available.');
    return;
  }

  console.log("Username: ".concat(userData.username));
  console.log("ID: ".concat(userData.id));
  console.log("Created At: ".concat(formatDate(userData.created_at)));
  console.log("Global Name: ".concat(userData.global_name));
  console.log("Badges: ".concat(userData.badges.join(', ')));
  console.log("Accent Color: #".concat(userData.accent_color.toString(16).padStart(6, '0')));

  if (userData.avatar.link) {
    console.log("Avatar: ".concat(userData.avatar.link));
  }

  if (userData.banner.link) {
    console.log("Banner: ".concat(userData.banner.link));
  }
};

var handleButtonClick = function handleButtonClick() {
  var userData;
  return regeneratorRuntime.async(function handleButtonClick$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getUserData('1200520669570539620'));

        case 2:
          userData = _context2.sent;
          displayUserInfo(userData);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};