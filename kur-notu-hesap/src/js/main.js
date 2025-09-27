/*

This file is part of yk38spage.github.io.

yk38spage.github.io is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

yk38spage.github.io is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with yk38spage.github.io. If not, see <https://www.gnu.org/licenses/>.

*/

const replaceDotComma = (InsertedData) => {
    return InsertedData.toString().replace(/\./g, ',');
}

const calculate = () => {
    const q1 = document.getElementById("quiz1").value;
    const q2 = document.getElementById("quiz2").value;
    const q3 = document.getElementById("quiz3").value;
    const q4 = document.getElementById("quiz4").value;

    const quizzes = (parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4)) / 4;

    const proj = (document.getElementById("proj").value) / 20;
    const lms = (document.getElementById("lms").value) / 20;
    const perf = (document.getElementById("perf").value) / 20;
    const quizPoints = parseFloat(quizzes) / 5;
    const writ = (document.getElementById("writ").value) / 10;

    const inClass = parseFloat(proj) + parseFloat(lms) + parseFloat(perf) + parseFloat(quizPoints) + parseFloat(writ);

    const exit_use = (document.getElementById("exit_use").value) / 4;
    const exit_writ = (document.getElementById("exit_writ").value) / 10;
    const exit_lis = (document.getElementById("exit_lis").value) / 10;
    const exit_speak = (document.getElementById("exit_speak").value) / 10;

    const exit = parseFloat(exit_use) + parseFloat(exit_writ) + parseFloat(exit_lis) + parseFloat(exit_speak);
    const sum = parseFloat(inClass) + parseFloat(exit);

    if (!isNaN(sum)) {
        document.getElementById("summary").innerHTML = `
            <p><strong>Quiz ortalamanız:</strong> ${replaceDotComma(parseFloat(quizzes).toFixed(2))}</p>
            <p><strong>Quizlerden kazandığınız puan:</strong> ${replaceDotComma((parseFloat(quizzes) / 5).toFixed(2))}</p>
            <br>
            <p><strong>Kur içi (In-Class) notunuz:</strong> ${replaceDotComma(inClass.toFixed(2))}</p>
            <p><strong>Kur bitirme (Level Exit) notunuz:</strong> ${replaceDotComma(exit.toFixed(2))}</p>
            <br>
            <p><strong>Genel ortalamanız:</strong> ${replaceDotComma(sum.toFixed(2))}</p>
        `;
        if (parseFloat(sum) >= 69.5) {
            document.getElementById("passedOrNot").innerHTML = `
                <div class="notice-box success">
                    <div class="notice-box-content">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>Geçtiniz! ${parseFloat(sum) < 70 && `(${replaceDotComma(parseFloat(sum).toFixed(2))} -> 70) `}Varsa sonraki kurunuzdan, yoksa kendi bölümünüzden devam edeceksiniz.</p>
                    </div>
                </div>
            `;
        } else {
            document.getElementById("passedOrNot").innerHTML = `
                <div class="notice-box error">
                    <div class="notice-box-content">
                        <i class="fa-solid fa-circle-xmark"></i>
                        <p>Kaldınız. Kur tekrarı yapmanız gerek.</p>
                    </div>
                </div>
            `;
        }
        document.getElementById("newCalculation").innerHTML = `
            <section>
                <h3>Yeni bir hesaplama yapmak ister misiniz?</h3>
                <button type="button" class="btn btn-primary" onclick="window.location.reload()"><i class="fa-solid fa-arrows-rotate"></i>Buraya Tıklayın</button>
            </section>
        `;
    } else {
        document.getElementById("summary").innerHTML = `
            <div class="notice-box error">
                <div class="notice-box-content">
                    <i class="fa-solid fa-circle-xmark"></i>
                    <p>Lütfen tüm bölümleri doğru şekilde doldurunuz.</p>
                </div>
            </div>
        `;
        document.getElementById("passedOrNot").innerHTML = "";
        document.getElementById("newCalculation").innerHTML = "";
    }
}