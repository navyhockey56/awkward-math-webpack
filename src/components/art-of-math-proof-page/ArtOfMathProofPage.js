import React from 'react';
import ArticleSection from '../common/articles/ArticleSection';
import MathText from '../common/math/MathText';

import './art-of-math-proof-page.css';

export default function ArtOfMathProofPage() {
  return (
    <div className="jumbotron">
      <div className="title-container">
        <h1>The Art of Mathematical Proof</h1>
      </div>
      <ArticleSection title="Introduction">
        <p>
          What is a math proof? That is, after all, why you are reading this article - to
          answer this innocent looking question. Well I’m not going to answer that, at
          least not right away. Instead, I want you to think about the following statements:
        </p>
        <ul>
          <li>The sum of two even integers is even.</li>
          <li>The sum of two odd integers is odd.</li>
          <li>The sum of an even and odd integer is odd.</li>
        </ul>
        <p>
          You know these statements to be true, but how do you know they are true, <i>why</i> are
          they true? Maybe you quickly added some examples in your head, each example affirming your
          belief in these statements. That may be good enough to have satiated any doubt you had;
          after all, patterns often arise in numbers - no doubt something you noticed in your math
          courses growing up. However, this form of confirmation doesn’t answer the more important
          question - <i>why</i> are these statements true? All of mathematical theory is focused
          around answering the question of <i>why</i>: <i>why</i> is this statement true; <i>why</i> is
          this impossible; <i>why</i> must this object exist; <i>why</i> will this process always
          yeild a correct result... you get the point. In order to answer every why we encounter, mathematics
          employs the mathematical proof. Quite simply, a mathematical proof is the ’proof’ that
          something must be, or can’t be possibly be true.
        </p>
        <p>
          We are all famaliar with the stereotypical child that is constantly asking <i>why</i>: <i>why</i> do
          I have to go to school; <i>why</i> is it important to get a job; <i>why</i> do we need
          money; etc. mathematicians share many things in common with this stereotype. They are constantly
          questioning why, and if the given explanation is not to their satisfaction, they will then question
          why the very explanation must be true, and continue on doing so until you’ve eliminated all doubt
          in their minds. However, unlike our imaginary child, it is possible to eliminate a mathematician’s
          doubt. But in order for us to do so, we must present our mathematician with a logical argument that
          demonstrates the validaty of our statement without leaving any possibility unaddressed. This logical
          argument is what mathematics refers to as a proof.
        </p>
        <p>
          Now that you have an idea of what a math proof is, you’re probably wondering what one looks like. A proof
          starts with the facts at hand ”I have two even integers, therefore I can represent the first number
          as <MathText>2 * j</MathText> and the second as <MathText>2 * k</MathText>, where <MathText>j</MathText> and <MathText>k</MathText> are
          integers because even numbers are defined to be <MathText>2</MathText> times some integer.”, then deduces what
          must be true given those facts, ”Therefor, I can represent their sum as <MathText>(2 * j + 2 * k)</MathText>”. With
          the new information, more facts can then be uncovered ”We can then factor out the <MathText>2</MathText> from this
          representation: <MathText>(2 * j + 2 * k) = 2 * (j + k)</MathText>. The number <MathText>(j + k)</MathText> must be an
          integer because the sum of two integers is an integer.” This process continues on until the truth of
          the statement is uncovered, ”I’ve shown that the sum of the two even numbers is equal to <MathText>2</MathText> times
          the integer <MathText>(j + k)</MathText>, which means that this number is even by definition.”.
        </p>
        <p>
          Don’t worry if you don’t see why the argument above does in fact prove that the sum of two integers is
          even, we’ll come back to it soon. Instead, focus on the nature of the argument. Notice that there’s no
          references to a specific example; that each step in the argument was coupled with a justification; that
          eveness was given an explicit definition - these are the hallmarks of a proof. Okay, that’s great, Will,
          can you now tell me exactly what a proof is, and how I can go about writing one? Well I can’t... there’s
          no easy way to define what a proof is, nor a simple set of rules I can give for writing one - it’d be
          like defining the color red, sure I could tell you its wavelength, but that doesn’t come close to
          explaining it. What I can do however is teach you how to recognize what is a proof and what’s not, as
          well as the tools to begin to start proving things on your own.
        </p>
      </ArticleSection>
    </div>
  );
}
