<h1 align="center"> Highlights: </h1>

<h2 align="center"> Task # 1 </h1>
<p align="center">
  First step to left: 
  <img src="doc/task-1/firstStepLeft.JPG" alt="Task 1 Result Left Step" height="182px" width="810px">
</p>
<p align="center">
  First step to right:
  <img src="doc/task-1/firstStepRight.JPG" alt="Task 1 Result Right Step" height="90px" width="800px">
</p>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#task1"> ➤ Task 1: Iterate array spirally </a></li>
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

<p> :exclamation: I could also modify the function and make it iterate in counterclockwise manner, but it wasn't in technical assignment.</p>

<p>Function with basic parameters looks like this:</p>
<pre><code> function iterate2dArraySpirally(rows = 6, cols = 5, startingRow = 4, startingCol = 2, firstStepDirection = firstStepDirectionLeft) {}</code></pre>

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
  I decided to make unit testing of code and used <b><i>Jest</i></b> for this purpose.
  I also installed <b><i>babel</i></b> and <b><i>@babel/preset-env</i></b> to work with modules (it transpiles ES6 module to CommonJS module).
</p>

<p align="center"> :microscope: Tests results: </p>

<p align="center">
  <img src="doc/task-1/tests.PNG" alt="Tests Results" height="103px" width="305px">
</p>
