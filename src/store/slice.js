import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data";

const todoSlice = createSlice({
    name: 'todo',
    initialState: data,
    reducers: {
        addTodo(state, action) {
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.chapters.forEach(chapter => {
                        if (chapter.id === action.payload.chapterId) {
                            project.taskIdCounter++;
                            chapter.tasks.push({
                                id: project.taskIdCounter,
                                name: action.payload.name,
                                description: action.payload.description,
                                priory: 1
                            })
                            return
                        }
                    });
                }
            });
        },
        deleteTodo(state, action){},
        completeTodo(state, action){
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.chapters.forEach(chapter => {
                        if (chapter.id === action.payload.chapterId) {
                            chapter.tasks.forEach((task, index) => {
                                if (task.id === action.payload.taskId) {
                                    chapter.tasks.splice(index, 1)
                                    return
                                }
                            });
                        }
                    });
                }
            });
        },
        showTodoAdding(state, action){
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.isTaskCreating = true;
                    project.chapters.forEach(chapter => {                        
                        if (chapter.id === action.payload.chapterId) {
                            chapter.isAddingTask = true;
                        } else {
                            chapter.isHiddenAddingTask = true;
                        }
                    });
                }
            });
        },
        closeTodoAdding(state, action){
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.isTaskCreating = false;
                    project.chapters.forEach(chapter => {
                        if (chapter.id === action.payload.chapterId) {
                            chapter.isAddingTask = false;
                        } else {
                            chapter.isHiddenAddingTask = false;
                        }
                    });
                }
            });
        },
        addChapter(state, action) {
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.chapters.forEach((chapter, index) => {
                        if (chapter.id === action.payload.chapterId) {
                            debugger
                            project.chapterIdCounter++;
                            project.chapters.splice(index + 1, 0, {
                                id: project.chapterIdCounter,
                                name: action.payload.name,
    
                                isClosed: false,
                                isAddingTask: false,
                                isHiddenAddingTask: false,
                                isAddingChapter: false,
                                isHiddenAddingChapter: false,
                                tasks:[]});
                            return
                        }
                        
                    });
                }
            });
        },
        closeAddingChapter(state, action) {
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.chapters.forEach((chapter) => {
                        if (chapter.id === action.payload.chapterId) {
                            chapter.isAddingChapter = false
                        } else {
                            chapter.isHiddenAddingChapter = false
                        }
                    });
                }
            });
        },
        showChapterAdding(state,action) {
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.chapters.forEach((chapter) => {
                        if (chapter.id === action.payload.chapterId) {
                            chapter.isAddingChapter = true
                        } else {
                            chapter.isHiddenAddingChapter = true
                        }
                    });
                }
            });
        },
        closeChapter(state,action){
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.chapters.forEach((chapter) => {
                        if (chapter.id === action.payload.chapterId) {
                            chapter.isClosed = true;
                            if (chapter.isAddingTask === true) {
                                chapter.isAddingTask = false;
                                project.isTaskCreating = false;
                            }                      
                            chapter.isHiddenAddingTask = true;
                        } else {
                            if (project.isTaskCreating) {
                                
                            }
                        }
                    });
                }
            });
        },
        openChapter(state,action){
            state.forEach(project => {
                if (project.id === action.payload.projectId) {
                    project.chapters.forEach((chapter) => {
                        if (chapter.id === action.payload.chapterId) {
                            chapter.isClosed = false;
                            if (!project.isTaskCreating) {            
                                chapter.isHiddenAddingTask = false;
                            } else {
                                chapter.isHiddenAddingTask = true;
                            }
                        }
                    });
                }
            });
        },
    }
})

export const {
    addTodo,
    deleteTodo,
    completeTodo, 
    showTodoAdding, 
    closeTodoAdding, 
    addChapter, 
    closeAddingChapter,
    showChapterAdding,
    closeChapter,
    openChapter} = todoSlice.actions

export default todoSlice.reducer