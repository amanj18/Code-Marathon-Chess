import React, { useState } from 'react';
import { addMatch } from '../Services/ChessAPIService';
import '../styling/AddMatchForm.css'; 

const AddMatchForm = () => {
    const [formData, setFormData] = useState({
        Player1Id: '',
        Player2Id: '',
        MatchDate: '',
        MatchLevel: '',
        WinnerId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        try {
            const result = await addMatch(formData);
            alert('Match added successfully!');
            
            console.log(result);
        } catch (error) {
            console.error(error);
            alert('Failed to add match. Please try again.');
        }
    };

    return (
        <form className="add-match-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label>Player 1 ID:</label>
                    <input
                        type="number"
                        name="Player1Id"
                        required
                        value={formData.Player1Id}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Player 2 ID:</label>
                    <input
                        type="number"
                        name="Player2Id"
                        required
                        value={formData.Player2Id}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Match Date:</label>
                <input
                    type="date"
                    name="MatchDate"
                    required
                    value={formData.MatchDate}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Match Level:</label>
                <input
                    type="text"
                    name="MatchLevel"
                    required
                    value={formData.MatchLevel}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Winner ID:</label>
                <input
                    type="number"
                    name="WinnerId"
                    required
                    value={formData.WinnerId}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddMatchForm;