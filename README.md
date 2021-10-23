<h1 align="center"> Highlights: </h1>

<h2 align="center"> Task # 1 </h1>

<p align="center"> First step to left: </p>
<p align="center">
  <img src="doc/task-1/firstStepLeft.JPG" alt="Task 1 Result Left Step" height="182px" width="810px">
</p>

<p align="center"> First step to right: </p>
<p align="center">
  <img src="doc/task-1/firstStepRight.JPG" alt="Task 1 Result Right Step" height="90px" width="800px">
</p>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#task1"> ➤ Task 1: Iterate array spirally </a></li>
    <li><a href="#task2"> ➤ Task 1: Drag & Drop </a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- TASKO1 -->
<h2 id="task1"> :small_orange_diamond: Task 1: Iterate array spirally </h2>

<p>I created a function, that generates matrix and iterates all it's elements spirally in clockwise order.</p>

<p>You're able to:</p>
<ul>
  <li>Set a number of <code> rows </code> and <code> cols </code> of matrix.</li>
  <li>Set a starting point of iteration, by modifying <code> startingRow </code> and <code> startingCol </code> of matrix.</li>
  <li>Set a starting direction of iteration, by modifying <code> firstStepDirection </code>.</li>
  <p>You're able to choose "left" (<code> firstStepDirectionLeft </code>) or "right" (<code> firstStepDirectionLeft </code>).</p>
</ul>

<p>Function with basic parameters looks like this:</p>
<pre><code> const iterate2dArraySpirally = (rows = 6, cols = 5, startingRow = 4, startingCol = 2, firstStepDirection = firstStepDirectionLeft) => {}</code></pre>

<h2> Results </h2>

<p> First step to left: </p>
<p align="center">
  <img src="doc/task-1/firstStepLeft.JPG" alt="Task 1 Result Left Step" height="182px" width="810px">
</p>

<p> First step to right: </p>
<p align="center">
  <img src="doc/task-1/firstStepRight.JPG" alt="Task 1 Result Right Step" height="90px" width="800px">
</p>

<h3> :small_orange_diamond: Tests: </h3>

<p> 
  I decided to make unit testing of code in purpose of learn and used <b><i>Jest</i></b> for this.
  <br>
  I also installed <b><i>babel</i></b> and <b><i>@babel/preset-env</i></b> to work with modules (it transpiles es6 module to cjs module).
  <br>
  After playing around with modules, couple of simple tests was made.
</p>

<h4> :microscope: Tests results: </h4>

<p align="center"> App Module Tests: </p>
<p align="center">
  <img src="doc/task-1/app-test.PNG" alt="App Module Tests Results" height="222px" width="952px">
</p>

<p align="center"> Matrix Generator Module Test: </p>
<p align="center">
  <img src="doc/task-1/create2dArray-test.PNG" alt="Matrix Generator Module Test Results" height="139px" width="611px">
</p>

<p> 
  All tests are passed and results are valid.
</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- TASKO1 -->
<h2 id="task2"> :small_orange_diamond: Task 1: Drag & Drop </h2>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit nisi, inventore a minima aperiam?</p>
