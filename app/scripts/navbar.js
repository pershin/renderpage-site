/*
 * The MIT License
 *
 * Copyright (c) 2015-2019 Sergey Pershin
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function (document) {
    var buttonElement, ulElement;
    buttonElement = document.querySelector(".navbar > button");
    ulElement = document.querySelector(".navbar > ul");

    buttonElement.addEventListener("click", function (event) {
        if (buttonElement.classList.contains("active")) {
            buttonElement.classList.remove("active");
            ulElement.classList.remove("mobile-block");
        } else {
            buttonElement.classList.add("active");
            ulElement.classList.add("mobile-block");
            event.stopPropagation();
        }
    });

    document.querySelector("body").addEventListener("click", function () {
        if (buttonElement.classList.contains("active")) {
            buttonElement.classList.remove("active");
            ulElement.classList.remove("mobile-block");
        }
    });
})(document);
