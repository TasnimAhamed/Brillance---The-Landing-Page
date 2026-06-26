function IconComponent({ type }) {
    let icon;
    if (type == 'barChart') {
            icon = <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="1"
                    y="3"
                    width="4"
                    height="6"
                    stroke="#37322F"
                    stroke-width="1"
                    fill="none"
                />
                <rect
                    x="7"
                    y="1"
                    width="4"
                    height="8"
                    stroke="#37322F"
                    stroke-width="1"
                    fill="none"
                />
                <rect
                    x="2"
                    y="4"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="3.5"
                    y="4"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="2"
                    y="5.5"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="3.5"
                    y="5.5"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="8"
                    y="2"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="9.5"
                    y="2"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="8"
                    y="3.5"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="9.5"
                    y="3.5"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="8"
                    y="5"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
                <rect
                    x="9.5"
                    y="5"
                    width="1"
                    height="1"
                    fill="#37322F"
                />
            </svg>
        }
        else if (type === 'dollar') {
            icon = <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 1V11M8.5 3H4.75C4.28587 3 3.84075 3.18437 3.51256 3.51256C3.18437 3.84075 3 4.28587 3 4.75C3 5.21413 3.18437 5.65925 3.51256 5.98744C3.84075 6.31563 4.28587 6.5 4.75 6.5H7.25C7.71413 6.5 8.15925 6.68437 8.48744 7.01256C8.81563 7.34075 9 7.78587 9 8.25C9 8.71413 8.81563 9.15925 8.48744 9.48744C8.15925 9.81563 7.71413 10 7.25 10H3.5"
                        stroke="#37322F"
                        stroke-width="1"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
    }
    else if (type === 'squareGrid') {
        icon = <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            stroke-width="1"
                            fill="none"
                        />
                        <rect
                            x="7"
                            y="1"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            stroke-width="1"
                            fill="none"
                        />
                        <rect
                            x="1"
                            y="7"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            stroke-width="1"
                            fill="none"
                        />
                        <rect
                            x="7"
                            y="7"
                            width="4"
                            height="4"
                            stroke="#37322F"
                            stroke-width="1"
                            fill="none"
                        />
                    </svg>
        }
        else if (type === "X" || type === 'twitter') {
            icon = <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                            fill="#49423D"
                        />
                    </svg>
        }
        else if (type === "linkedIn") {
            icon = <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                            fill="#49423D"
                        />
                    </svg>
        }
        else if (type === "github") {
            icon =  <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z"
                            fill="#49423D"
                        />
                    </svg>
        }
        
    return icon;
}
export default IconComponent