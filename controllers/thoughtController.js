const { userInfo } = require('os');
const { User, Thought } = require('../models');
const thoughtController = {
    async getAllThoughts(req, res){
        try {
            const thoughtData = await Thought.find()
            .sort({ createdAt: -1 })
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async getOneThought(req, res){
        try {
            const thoughtData = await Thought.findOne({
                _id: req.params.thoughtId
            })
            if(!thoughtData){
                res.status(404).json('No thought with that id found!')
            }
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async createThought(req, res){
        try {
            const thoughtData = await Thought.create(req.body)
            const userData = await User.findOneAndUpdate({
                _id: req.body.userId
            },
            {
                $push: { thoughts: thoughtData._id }
            },
            {  
                new: true
            })
            // if(!userData){
            //     res.status(404).json('No thought with that id found!')
            // }
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async updateThought(req, res){
        try {
            const thoughtData = await Thought.findOneAndUpdate({
                _id: req.params.thoughtId
            },
            {
                $set: req.body
            },
            {
                runValidators: true,
                new: true
            })
            if(!thoughtData){
                res.status(404).json('No thought with that id found!')
            }
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async deleteThought(req, res) {
        try {
            const thoughtData = await Thought.findOneAndDelete({
                _id: req.params.thoughtId
            });
    
            if (!thoughtData) {
                return res.status(404).json('No thought with that id found!');
            }
    
            const userData = await User.findOneAndUpdate(
                {
                    thoughts: req.params.thoughtId
                },
                {
                    $pull: { thoughts: req.params.thoughtId }
                },
                {
                    new: true
                }
            );
    
            // if (!userData) {
            //     return res.status(404).json('No user with that id found!');
            // }
    
            res.json(thoughtData);
        } catch (error) {
            console.error('Error in deleteThought:', error);
            res.status(500).json(error);
        }
    },
    async addReaction(req, res){
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                {
                    _id: req.params.thoughtId
                },
                {
                    $addToSet: { reactions: req.body }
                },
                {
                    runValidators: true,
                    new: true
                }
            )
            if(!thoughtData){
                res.status(404).json('No thought with that id found!')
            }
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    async removeReaction(req, res){
        try {
            const thoughtData = await Thought.findOneAndUpdate(
                {
                    _id: req.params.thoughtId
                },
                {
                    $pull: { reactions: { reactionId: req.params.reactionId } }
                },
                {
                    runValidators: true,
                    new: true
                }
            )
            if(!thoughtData){
                res.status(404).json('No thought with that id found!')
            }
            res.json(thoughtData)
        } catch (error) {
            res.status(500).json(error)
        }
    },
}

module.exports = thoughtController;