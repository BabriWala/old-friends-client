import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl text-center f-m-w text-indigo-700 font-bold pt-0">
        Our Blogs
      </h1>
      <div className="pt-14 xl:px-0 px-4">
        <div className="w-full lg:flex">
          <div className="lg:w-full">
            <div className="mt-8 lg:mb-0 mb-8">
              <h1 className="f-m-m text-2xl font-semibold leading-7">
                What are the different ways to manage a state in a React
                application?
              </h1>
              <p className="text-base f-m-m leading-loose mt-2">
                The Four Kinds of React State to Manage
                <br />
                <br />
                When we talk about state in our applications, it’s important to
                be clear about what types of state actually matter.
                <br />
                <br />
                There are four main types of state you need to properly manage
                in your React apps:
                <br />
                <br />
                Local state
                <br />
                <br />
                Global state
                <br />
                <br />
                Server state
                <br />
                <br />
                URL state
                <br />
                <br />
                Let's cover each of these in detail:
                <br />
                <br />
                Local (UI) state – Local state is data we manage in one or
                another component.
                <br />
                <br />
                Local state is most often managed in React using the useState
                hook.
                <br />
                <br />
                For example, local state would be needed to show or hide a modal
                component or to track values for a form component, such as form
                submission, when the form is disabled and the values of a form’s
                inputs.
                <br />
                <br />
                Global (UI) state – Global state is data we manage across
                multiple components.
                <br />
                <br />
                Global state is necessary when we want to get and update data
                anywhere in our app, or in multiple components at least.
                <br />
                <br />
                A common example of global state is authenticated user state. If
                a user is logged into our app, it is necessary to get and change
                their data throughout our application.
                <br />
                <br />
                Sometimes state we think should be local might become global.
                <br />
                <br />
                Server state – Data that comes from an external server that must
                be integrated with our UI state.
                <br />
                <br />
                Server state is a simple concept, but can be hard to manage
                alongside all of our local and global UI state.
                <br />
                <br />
                There are several pieces of state that must be managed every
                time you fetch or update data from an external server, including
                loading and error state.
                <br />
                <br />
                Fortunately there are tools such as SWR and React Query that
                make managing server state much easier.
                <br />
                <br />
                URL state – Data that exists on our URLs, including the pathname
                and query parameters.
                <br />
                <br />
                URL state is often missing as a category of state, but it is an
                important one.
                <br />
                <br />
                In many cases, a lot of major parts of our application rely upon
                accessing URL state. Try to imagine building a blog without
                being able to fetch a post based off of its slug or id that is
                located in the URL!
                <br />
                <br />
                There are undoubtedly more pieces of state that we could
                identify, but these are the major categories worth focusing on
                for most applications you build.
                <br />
                <br />
                How to Manage Local State in React
                <br />
                <br />
                Local state is perhaps the easiest kind of state to manage in
                React, considering there are so many tools built into the core
                React library for managing it.
                <br />
                <br />
                useState is the first tool you should reach for to manage state
                in your components.
                <br />
                <br />
                It can take accept any valid data value, including primitive and
                object values. Additionally, its setter function can be passed
                down to other components as a callback function (without needing
                optimizations like useCallback).
                <br />
                <br />
                seReducer is another option that can be used for either local or
                global state. It is similar in many ways to useState under the
                hood, although instead of just an initial state it accepts a
                reducer.
                <br />
                <br />
                The benefit of useReducer is that it provides a built-in way to
                perform a number of different state operations with the help of
                the reducer function, which makes it more dynamic overall than
                useState.
                <br />
                <br />
                You can see the benefit of useReducer versus useState in this
                vote tracking example. All we have to do to update state is pass
                the callback function dispatch a string (which is then passed to
                the reducer) instead of the new state itself.
                <br />
                <br />
                How to Manage Global State in React
                <br />
                <br />
                Once you attempt to manage state across multiple components,
                things get a bit trickier.
                <br />
                <br />
                You will reach a point in your application where patterns like
                “lifting state up” and passing callbacks down to update your
                state from components lead to lots and lots of props.
                <br />
                <br />
                What do you do if you want to update a component’s state from
                basically anywhere in your app? You turn it into global state.
                <br />
                <br />
                To manage it, however, you should opt for a third-party
                solution. Many developers are inclined to use built-in React
                features like the Context API to manage their state.
                <br />
                <br />
                To be clear: the Context API is not a state management solution.
                It is a way to avoid problems like props drilling (creating a
                bunch of props in components that don’t need it), but it is only
                helpful for reading state, not updating it.
                <br />
                <br />
                The reason to not use Context for global state management lies
                in the way it works. The default behavior for Context is to
                re-render all children components if the value provided to it as
                a prop changes.
                <br />
                <br />
                How to Manage Server State in React
                <br />
                <br />
                Server state can be deceptively challenging to manage.
                <br />
                <br />
                At first, it seems you just need to fetch data and display it in
                the page. But then you need to display a loading spinner while
                you are waiting for the data. Then you need to handle errors and
                display them to the user as they arise.
                <br />
                <br />
                What happens when there is a network error? Do I really need to
                hit my server every time my user visits the home page if the
                data hasn’t changed? Do I need to add useState and useEffect in
                every component I want to fetch my data?
                <br />
                <br />
                To fix this, there are a couple of great libraries that make
                data fetching in React a breeze: SWR and React Query.
                <br />
                <br />
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 xl:px-0 px-4">
        <div className="w-full lg:flex">
          <div className="lg:w-full">
            <div className="mt-8 lg:mb-0 mb-8">
              <h1 className="f-m-m text-2xl font-semibold leading-7">
                How does prototypical inheritance work?
              </h1>
              <p className="text-base f-m-m leading-loose mt-2">
                Simply put, prototypical inheritance refers to the ability to
                access object properties from another object. We use a
                JavaScript prototype to add new properties and methods to an
                existing object constructor. We can then essentially tell our JS
                code to inherit properties from a prototype. Prototypical
                inheritance allows us to reuse the properties or methods from
                one JavaScript object to another through a reference pointer
                function.
                <br /> <br />
                All JavaScript objects inherit properties and methods from a
                prototype:
                <br /> <br />
                Date objects inherit from Date.prototype.
                <br /> <br />
                Array objects inherit from Array.prototype.
                <br /> <br />
                Player objects inherit from Player.prototype.
                <br /> <br />
                The Object.prototype is on top of the prototype inheritance
                chain. ​ Date objects, Array objects, and Player objects all
                inherit from Object.prototype.
                <br /> <br />
                Let’s walk through an example of prototypical inheritance you’re
                likely familiar with from grade school: all squares are
                rectangles, but not all rectangles are squares. If we think of
                this as a JS program, we could say that the rectangle is a
                prototype to the square: the square inherits all properties of a
                rectangle (i.e. four-sides and closed), while also adding a new
                feature (i.e. all sides are the same length).
                <br /> <br />
                We could not, however, construct this same concept using the
                square as a prototype, because there are properties of a square
                that do not apply to rectangles (i.e. all sides are the same
                length).
                <br /> <br />
                We can see how prototypal inheritance works on the basis of
                specifying categories within a group from least specific to most
                – from rectangle to square. In code, this concept can sometimes
                be lost in the syntax. If you find this happens, speak the
                relations between objects and listen to where you draw
                distinctions. If you hear, “all ___ are , but…not all ___ are”,
                that is where a new prototypical relationship should be added.
                <br /> <br />
                Cons of Prototypal Inheritance Prototypical inheritance clearly
                has a lot of benefits for JavaScript programmings, but, like all
                tools, it does have limitations. Let’s take a look at the key
                downsides to look out for as you write a prototype-based
                program:
                <br /> <br />
                Inheritance cannot flow in circles as this will create an error.
                For example, if user linked premiumFamily as a prototype in the
                above program, an error would occur as this would create a loop.
                <br /> <br />
                Objects cannot inherit from multiple prototypes. As we saw
                above, they can inherit multiple object’s properties through a
                chain, however another object linked as a prototype explicitly
                will cause an error. This is the case even if the additional
                prototype is within the same chain. For example, familyPremium
                could not have explicit links to both premiumUser and user.
                <br /> <br />
                Prototypical relationships can only be made to objects. This is
                because the __proto__ function works as a forwarder, directing
                the program where to find the value it is looking for. As the
                program either knows where to look or it doesn’t, the function
                can be only either null or an object. All other types will be
                discarded.
                <br /> <br />
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 xl:px-0 px-4">
        <div className="w-full lg:flex">
          <div className="lg:w-full">
            <div className="mt-8 lg:mb-0 mb-8">
              <h1 className="f-m-m text-2xl font-semibold leading-7">
                What is a unit test? Why should we write unit tests?
              </h1>
              <p className="text-base f-m-m leading-loose mt-2">
                A unit test is a way of testing a unit - the smallest piece of
                code that can be logically isolated in a system. In most
                programming languages, that is a function, a subroutine, a
                method or property. The isolated part of the definition is
                important. In his book "Working Effectively with Legacy Code",
                author Michael Feathers states that such tests are not unit
                tests when they rely on external systems: “If it talks to the
                database, it talks across the network, it touches the file
                system, it requires system configuration, or it can't be run at
                the same time as any other test."
                <br />
                <br />
                Modern versions of unit testing can be found in frameworks like
                JUnit, or testing tools like TestComplete. Look a little further
                and you will find SUnit, the mother of all unit testing
                frameworks created by Kent Beck, and a reference in chapter 5 of
                The Art of Software Testing . Before that, it's mostly a
                mystery. I asked Jerry Weinberg about his experiences with unit
                testing -- "We did unit testing in 1956. As far as I knew, it
                was always done, as long as there were computers".
                <br />
                <br />
                To justify any effort in business, there must be a positive
                impact on the bottom line. Here are a few benefits to writing
                unit tests: Unit tests save time and money. Usually, we tend to
                test the happy path more than the unhappy path. If you release
                such an app without thorough testing, you would have to keep
                fixing issues raised by your potential users. The time to fix
                these issues could’ve been used to build new features or
                optimize the existing system. Bear in mind that fixing bugs
                without running tests could also introduce new bugs into the
                system.
                <br />
                <br />
                Well-written unit tests act as documentation for your code. Any
                developer can quickly look at your tests and know the purpose of
                your functions.
                <br />
                <br />
                It simplifies the debugging process.
                <br />
                <br />
                Unit testing is an integral part of extreme programming. Extreme
                programming is basically a
                “test-everything-that-can-possibly-break” programming strategy.
                <br />
                <br />
                Unit tests make code reuse easier. If you want to reuse existing
                code in a new project, you can simply migrate both the code and
                tests to your new project, then run your tests to make sure you
                have the desired results.
                <br />
                <br />
                Unit testing improves code coverage. A debatable topic is to
                have 100% code coverage across your application.
                <br />
                <br />
                In the testing pyramid, unit tests are faster than integration
                and end-to-end. They are more assertive and return quick
                feedback. 
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-14 xl:px-0 px-4">
        <div className="w-full lg:flex">
          <div className="lg:w-full">
            <div className="mt-8 lg:mb-0 mb-8">
              <h1 className="f-m-m text-2xl font-semibold leading-7">
                React vs. Angular vs. Vue?
              </h1>
              <p className="text-base f-m-m leading-loose mt-2">
                Angular vs React
                <br />
                <br />
                If the choice you’re making is based on Angular vs React alone,
                then you’ll simply need to consider the pros and cons discussed
                for those libraries in this post. But overall, keep in mind that
                both libraries can be used for mobile and web apps, while
                Angular is generally better for more complex apps that are
                enterprise-ready.
                <br />
                <br />
                React often requires extra modules and components, which keeps
                the core library small, but means there’s extra work involved
                when incorporating outside tools. Angular, on the other hand, is
                more of a full-fledged solution that doesn’t require extras like
                React often does, though it does have a steeper learning curve
                for its core compared to React.
                <br />
                <br />
                React is more suitable for intermediate to advanced JavaScript
                developers who are familiar with concepts from ES6 and up, while
                Angular favors those same developers who are also familiar with
                TypeScript.
                <br />
                <br />
                React vs Vue
                <br />
                <br />
                The choice between React vs Vue is often debated and it’s not an
                easy one. Vue has a vibrant and ever-growing community and has
                taken over popularity vs. React in many respects. React
                developers are still churning out lots of new components and
                extras, so there’s no sign that React is on the decline either.
                <br />
                <br />
                Vue is generally more suited to smaller, less complex apps and
                is easier to learn from scratch compared to React. Vue can be
                easier to integrate into new or existing projects and many feel
                its use of HTML templates along with JSX is an advantage.
                <br />
                <br />
                Overall, Vue might be the best choice if you’re a newer
                developer and not as familiar with advanced JavaScript concepts,
                while React is quite well suited for experienced programmers and
                developers who have worked with object-oriented JavaScript,
                functional JavaScript, and similar concepts.
                <br />
                <br />
                Angular vs Vue
                <br />
                <br />
                In most cases, you probably wouldn’t be deciding between only
                Angular and Vue. They are vastly different libraries with very
                different feature sets and learning curves. Vue is the clear
                choice for less experienced developers, and Angular would be
                preferred for those working on larger apps.
                <br />
                <br />
                A large library like Angular would require more diligence in
                keeping up with what’s new, while Vue would be less demanding in
                this regard and the fact that the two most recent major releases
                of Vue are in separate repositories helps.
                <br />
                <br />
                It should also be noted that Vue was created by a developer who
                formerly worked on Angular for Google, so that’s another thing
                to keep in mind, though that wouldn’t have a huge impact on your
                decision.
                <br />
                <br />
                Angular:
                <br />
                <br />
                Angular has a steep learning curve, considering it is a complete
                solution, and mastering Angular requires you to learn associated
                concepts like TypeScript and MVC. Even though it takes time to
                learn Angular, the investment pays dividends in terms of
                understanding how the front end works.
                <br />
                <br /> React:
                <br />
                <br />
                React offers a Getting Started guide that should help one set up
                React in about an hour. The documentation is thorough and
                complete, with solutions to common issues already present on
                Stack Overflow. React is not a complete framework and advanced
                features require the use of third-party libraries. This makes
                the learning curve of the core framework not so steep but
                depends on the path you take with additional functionality.
                However, learning to use React does not necessarily mean that
                you are using the best practices.
                <br />
                <br />
                Vue:
                <br />
                <br />
                Vue provides higher customizability and hence is easier to learn
                than Angular or React. Further, Vue has an overlap with Angular
                and React with respect to their functionality like the use of
                components. Hence, the transition to Vue from either of the two
                is an easy option. However, simplicity and flexibility of Vue is
                a double-edged sword — it allows poor code, making it difficult
                to debug and test.
              </p>
              <div className="mt-6"></div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default Blog;
