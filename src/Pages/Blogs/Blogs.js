import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <main>
            <section className='blog-container'>
                <div className='blog'>
                    <h4>Difference between Javascript and NodeJS</h4>
                    <hr />
                    <p>
                        <b>Javascript</b>, on the other hand, is a scripting language.
                        The most popular abbreviation is JS.
                        Javascript is a more sophisticated version of the ECMA script.
                        Javascript is a high-level programming language that uses the Oops notion and is based on prototype inheritance.
                    </p>

                    <p>
                        On the other hand  <b>NodeJS</b> is an open-source, cross-platform Javascript runtime environment for server-side javascript execution.
                        Thanks to Nodejs, Javascript code can now run outside of the browser.
                        Nodejs is a programming language that is largely used in web development and comes with a huge number of modules.
                    </p>
                </div>



                <div className='blog'>
                    <h4>Differences between SQL and NoSQL databases</h4>
                    <hr />
                    <p>
                        A RELATIONAL DATABASE MANAGEMENT SYSTEM is <b>SQL</b> (RDBMS). These databases have a predefined or fixed schema.
                        These databases were not created with hierarchical data in mind. For storing hierarchical data, these databases are ideal. These databases are best suited for complex queries.
                        It can be scaled vertically.
                    </p>

                    <p>
                        On the other hand  A <b>non-relational</b> or <b>distributed database</b> system is known as <b>NoSQL</b>.
                        They have a flexible schema.
                        For storing hierarchical data, these databases are ideal.
                        For complex searches, these databases are inadequate.
                        It can be scaled horizontally.
                    </p>
                </div>



                <div className='blog'>
                    <h4> Purpose of JWT</h4>
                    <hr />
                    <p>JWT or JSON Web Token is an open standard that allows two parties to share security information: a client and a server.
                        JWTs ensure that once claims have been distributed, they cannot be modified.</p>

                    <div>
                        <h4>How Json Web Token Works</h4>
                        <hr />

                        <h6>A JWT is a three-part string with dots between them (.).
                            After decoding, two JSON strings are discovered:
                        </h6>
                        <p>1. The header and the payload </p>
                        <p>1. The seal of approval </p>

                        <p>
                            The payload is where the claims are kept. This is used by the server to determine who issued the token and how long it is valid.

                        </p>
                        <p>The signature ensures that the token was not tampered with. When the token is used, the receiving party ensures that the header and payload match the signature.</p>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default Blogs;