class Solution:
    def isPalindrome(self, s: str) -> bool:
        strs = []

        for char in s:
            if char.isalnum(): 
                strs.append(char.lower())

        start = 0
        end = len(strs)-1

        print(strs)

        while(start <= end):
            if(strs[start] != strs[end]):
                return False

            start += 1
            end -=1

        return True

