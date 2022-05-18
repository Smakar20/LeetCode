/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
*/

var canFinish = function(numCourses, prerequisites) {
    const adjList = {}
    
    
    for(const preReq of prerequisites){
        if(!adjList.hasOwnProperty(preReq[0])){
            adjList[preReq[0]] = []
        }
        adjList[preReq[0]].push(preReq[1])
    }
    
    const visited = new Set()
    
    const dfs = (course) => {
        //base cases: 1) no adj list
        if(!adjList.hasOwnProperty(course) || adjList[course] == []){
            return true
        }
        //base cases: 2) visited
        if(visited.has(course)){
            return false
        }
        
        visited.add(course)
        
        for(const adjCourse of adjList[course]){
            if(!dfs(adjCourse)){
                return false
            }
        }
        visited.delete(course)
        adjList[course] = []
        return true
        
    }


    for(const course of Object.keys(adjList)){
        if(!dfs(course)){
            return false
        }
    }
    
    return true
    
};
