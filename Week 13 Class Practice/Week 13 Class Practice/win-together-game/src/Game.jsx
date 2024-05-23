import React, { useState } from "react";

export default function Game() {
    const [users, setUsers] = useState([]);

    const goForward = (index) => {
        setUsers(users.map((user, i) => {
            if (i === index && user.step < 3) {
                return { ...user, step: user.step + 1 };
            }
            return user;
        }));
    };

    const enabledUser = (user, step) => {
        return user.step === step;
    };

    return (
        <div className="container">
            <div>
                <button
                    onClick={() => {
                        if (users.length < 4) {
                            setUsers(prev => [
                                ...prev,
                                {
                                    userName: `user-${prev.length + 1}`,
                                    step: 1,
                                },
                            ]);
                        }
                    }}
                    disabled={users.length >= 4 || (users.length !=0 && users[users.length-1].step != 3)}>
                    Create User
                </button>
            </div>
            <div>
                {users.map((userItem, index) => (
                    <div key={index} style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
                        <div>{JSON.stringify(userItem)}</div>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <button disabled={!enabledUser(userItem, 1)}>Step 1</button>
                            <button disabled={!enabledUser(userItem, 2)}>Step 2</button>
                            <button disabled={!enabledUser(userItem, 3)}>Step 3</button>
                        </div>
                        <div>
                            <button
                                className="forward"
                                onClick={() => {
                                    goForward(index);
                                }}
                            >
                                Forward
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}