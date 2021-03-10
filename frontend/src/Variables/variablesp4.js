import React from 'react';

function variablesp4(props) {
    return (
        <div>
            <h1>Name things right</h1>
            <p>Talking about variables, there’s one more extremely important thing.</p>

            <p>A variable name should have a clean, obvious meaning, describing the data that it stores.</p>

            <p>Variable naming is one of the most important and complex skills in programming.
            A quick glance at variable names can reveal which code was written by a beginner
               versus an experienced developer.</p>
            <br />

            <p>In a real project, most of the time is spent modifying and extending
            an existing code base rather than writing something completely separate from scratch.</p>
            <p>When we return to some code after doing something else for a while,
            it’s much easier to find information that is well-labeled.
               Or, in other words, when the variables have good names.</p>

            <p>Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.</p>

            <h3>Some good-to-follow rules are:<h3>

                <p>Use human-readable names like userName or shoppingCart.</p>
                <p>Stay away from abbreviations or short names like a, b, c, unless you really know what you’re doing.</p>
                <p>Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing.</p>
                <p> It’s only okay to use them if the context of the code makes it exceptionally obvious
     which data or value the variable is referencing.</p>
                <p>Agree on terms within your team and in your own mind.</p>
                <p>If a site visitor is called a “user” then we should name related
      variables currentUser or newUser instead of currentVisitor or newManInTown.</p>
                <p>Sounds simple? Indeed it is, but creating descriptive and concise variable names in practice is not. Go for it.</p>


                <h2>Summary</h2>
                <p>We can declare variables to store data by using the var, let, or const keywords.

                <p>let – is a modern variable declaration.</p>
                    <p>var – is an old-school variable declaration. Normally we don’t use it at all, </p>
                    <p>but we’ll cover subtle differences from let in the chapter The old "var", just in case you need them.</p>
                    <p>const – is like let, but the value of the variable can’t be changed.</p>
                    <p>Variables should be named in a way that allows us to easily understand what’s inside them.</p>
        </div>
    );
}

export default variablesp4;