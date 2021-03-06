// metadata
export const version = "0.5.16"
export const title = "Visibility"
export const description = "An example of external, internal, private and public functions in Solidity"

const html = `<p>Functions and state variables have to declare whether they are accessible by other contracts.</p>
<p>Fucntions can be declared as</p>
<ul>
<li><code>public</code> - any contract and account can call</li>
<li><code>private</code> - only inside the contract that defines the function</li>
<li><code>internal</code>- only inside contract that inherits an <code>internal</code> function</li>
<li><code>external</code> - only other contracts and accounts can call</li>
</ul>
<p>State variables can be declared as <code>public</code>, <code>private</code>, or <code>internal</code> but not <code>external</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract Base {
    // Private function can only be called
    // - inside this contract
    // Contracts that inherit this contract cannot call this function.
    function privateFunc() private pure returns (string memory) {
        return "private function called";
    }

    function testPrivateFunc() public pure returns (string memory) {
        return privateFunc();
    }

    // Internal function can be called
    // - inside this contract
    // - inside contracts that inherit this contract
    function internalFunc() internal pure returns (string memory) {
        return "internal function called";
    }

    function testInternalFunc() public pure returns (string memory) {
        return internalFunc();
    }

    // Public functions can be called
    // - inside this contract
    // - inside contracts that inherit this contract
    // - by other contracts and accounts
    function publicFunc() public pure returns (string memory) {
        return "public function called";
    }

    // External functions can only be called
    // - by other contracts and accounts
    function externalFunc() external pure returns (string memory) {
        return "external function called";
    }

    // This function will not compile since we&#39;re trying to call
    // an external function here.
    // function testExternalFunc() public pure returns (string memory) {
    //     return externalFunc();
    // }

    // State variables
    string private privateVar = "my private variable";
    string internal internalVar = "my internal variable";
    string public publicVar = "my public variable";
    // State variables cannot be external so this code won&#39;t compile.
    // string external externalVar = "my external variable";
}

contract Child is Base {
    // Inherited contracts do not have access to private functions
    // and state variables.
    // function testPrivateFunc() public pure returns (string memory) {
    //     return privateFunc();
    // }

    // Internal function call be called inside child contracts.
    function testInternalFunc() public pure returns (string memory) {
        return internalFunc();
    }
}
</code></pre>
`

export default html
