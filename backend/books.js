var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//Fetch book from Bookmonkey server
function fetchBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var response, books, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:4730/books')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch book');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    books = _a.sent();
                    return [2 /*return*/, books];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching books', error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadBooksOnDisplay() {
    return __awaiter(this, void 0, void 0, function () {
        var books, bookList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchBooks()];
                case 1:
                    books = _a.sent();
                    bookList = document.getElementById('bookList');
                    if (!bookList)
                        return [2 /*return*/];
                    books.forEach(function (book) {
                        var bookDiv = document.createElement('div');
                        bookDiv.classList.add('book');
                        var title = document.createElement('h3');
                        title.innerHTML = "<em>".concat(book.title, "</em>");
                        bookDiv.appendChild(title);
                        var author = document.createElement('p');
                        author.textContent = "Author: ".concat(book.author);
                        bookDiv.appendChild(author);
                        var publisher = document.createElement('p');
                        publisher.textContent = "Publisher: ".concat(book.publisher);
                        bookDiv.appendChild(publisher);
                        var price = document.createElement('p');
                        price.textContent = "Price: ".concat(book.price);
                        bookDiv.appendChild(price);
                        if (book.cover) {
                            var coverImage = document.createElement('img');
                            coverImage.src = book.cover;
                            coverImage.alt = 'Book Cover';
                            bookDiv.appendChild(coverImage);
                        }
                        else {
                            var noImage = document.createElement('p');
                            noImage.textContent = 'No image!';
                            bookDiv.appendChild(noImage);
                        }
                        bookList.appendChild(bookDiv);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function (event) { return loadBooksOnDisplay(); });
