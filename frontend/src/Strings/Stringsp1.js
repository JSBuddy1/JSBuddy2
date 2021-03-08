import React from 'react';
import { link } from "react-router-dom";

function Stringsp1(props) {
    return (
        <div>
            <h1>Introduction to Strings</h1>
            <p>A string is a data type used in the programming languages which represents text.
            <br />
            It includes a set of characters that can also contain spaces and numbers.
            <br />
            For example, the word “hamburger” and the phrase “I ate three hamburgers” are both strings.
            <br />
            Typically, programmers must enclose strings in quotation marks for the data to recognize as a string.
            <br />
            In this article, we will discuss the details and usage of “String in JavaScript”
            covering across the following topics:
            <br />
            </p>

            <ul>
                <ol>What are strings in JavaScript?</ol>
                <ol>How to initialize Strings in JavaScript?</ol>
                <ol>What inbuilt functions are provided by Strings in JavaScript?</ol>
                <ol>Understanding String’s Html wrapper methods?</ol>
            </ul>


            <p>
                Similar to other programming languages, the String is one of the data types in Javascript,
                which represent a sequence of characters. Still, in JavaScript,
                String can be both a primitive data type and a composite data type.
                In actual, the string in JavaScript is an object which lets you work with a series of characters
                and possesses the following characteristics:
            </p>
            <ul>
                <ol>A string represents any text inside a quote pair, and the quote pair can consist of either double or single quotes.</ol>
                <ol>JavaScript doesn’t impose any limit on the number of characters that a string can hold,
                        but most of the old browsers support 255 characters only.</ol>
                <ol>In addition to the above, JavaScript doesn’t have a particular type that represents a single character of String.
                To represent a single character, we need to use a string of length 1.
                   </ol>
            </ul>

            <p>Lets deep dive further to understand how to declare and use strings in JavaScript.</p>
        </div>
    );
}

export default Stringsp1;