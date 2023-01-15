class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        # key에 문자 넣고, value에 카운트 값 넣음

        text=paragraph.lower()
        new_text = re.sub("[!?',;.]"," ", text)
        new_text = new_text.split()

        print(new_text)
        list_ = {}
        for i in new_text:
            if i in banned:
                continue
            if i not in list_:
                    list_[i] = 0
            else:
                list_[i] += 1

        max_key = max(list_, key = list_.get)
        
        return max_key