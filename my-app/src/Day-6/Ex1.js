const GREEN = "#73EC8B";
const RED = "#C62E2E";
const YELLOW = "#FEEC37";

const isPrime = (num) => {
    if (num < 2) {
        return true;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;
};

const classiFication = (num) => {
    if (!isPrime(num)) {
        return RED;
    } else if (num % 2 === 0) {
        return GREEN;
    } else if (num % 2 !== 0) {
        return YELLOW;
    }
};

const Ex1 = () => {
    const numberList = [];
    for (var i = 0; i < 32; i++) {
        numberList.push(i);
    }

    return (
        <>
            <h1>Number Generator</h1>

            <div>
                <ul className="list">
                    {numberList.map((num) => {
                        let color = classiFication(num);
                        return (
                            <li key={num} style={{ background: color }}>
                                {num}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default Ex1;
