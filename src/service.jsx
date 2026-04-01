
export default function Service() {
  return (
<>    <section className="bg-gray-100 py-8 px-6">
       <h4 className="text-yellow-700 items-center text-2xl justify-center flex">Service</h4>
      
      <div className="max-w-7xl mx-auto text-center">
       
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
          what we provide<br></br>
        </h2>
 <p className="font-2xl  text-gray-700 mb-8">is more then what i provide</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "SEO (Serach Engine opmizer)",
              desc: "SEO services help improve your website ranking and visibility on search engines. SEO services help improve your website ranking and visibility on search engines.SEO services help improve your website ranking and visibility on search engines.",
              img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxAPDxASDw8PDw8PDQ0PEA8ODg4PFREYGBURFRUYHSkgGBolHRUXITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFxAQGy8lHSUtLS4tLS0tKy0tLS0vMC0tLS0uLS0tLS0tLS83LS0tNy0tLS0tLS0tKzUtLS0tNSstLf/AABEIAKABOwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAYFB//EADwQAAIBAwIDBgUDAgQFBQAAAAECAwAEERIhBRMxBjJBUWFxFCKBkbEHI6FCUiQzwdEVQ1NigkRyorLx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKxEAAgEDAwMEAQQDAAAAAAAAAAECAxESBCExE0FRFCJh8HGRobHRMkKB/9oADAMBAAIRAxEAPwDw9+p9zTac/U+5ptABRRRQAUUUUAFFFFABS0lFAC5pcim0UDuP2pwC+dRUuKVilL4Jgg86XlCoMUb0rfJamu8SxyRRyagDmnCU0rMpTp90S8mjk0wTmnC4pWkWpUWHJoMNOE4pwlFK8isaTIuVScqp9Yo1Cnkx9KDK5ipDHVnakwKMmS6EStopNNWSKaVp5GbolfFJU5WmlKq5m6bRFRTytNIpkNNCUUUUCCiiigAooooAKtQ90fX81Vq1D3R9fzQBXfqfc02nP1PuabQAUUUUAFFFFABTwaZRQNOxMAKOVUQNSrJUu5rGUXyhphNNKGrKvUmAanJo16EZcMo0A1cMINRtb01NES001wRB6eMU0xGm4Ip7MlOUeUTaBQYqjV6kWSpdzWLg+RDFTTFU4anUsmadGDKnLpChrQ9ouAPZPCkjpIZ7aG6UxkkBJM4U7ddvxXJMdCqXI9PdXRT3o1GrRiphiqskZuhJEGs0vMNPMVMKU9iGpoOZS8ymYpKdkRlIfzKTXTaKLBkx2qkzSUUxXCiiigQUUUUAFFFFABVqHuj6/mqtWoe6Pr+aAK79T7mm09xufc03FA7MSilxSUCCiilxQAlFLird/wALlgWF5U0LcxCe3OpW5kRYqG2Jxup2ODtQBTopcUYoAVWqZJKgoFJq5pCbiXVepVaqKtUqPWTidtOv5LZUGmNBSLJVqziaWRIoxqeRlRFHixOAKh3R1rCfJQaCmck+AJ2J232HU12l4fK0zW6xs8yuyGNAXbUpww28iKkjWS0nIYFJEyk0ecFkYfPG2PAqcH3oVUznpIv/ABM/0qa2jaR1jjUs8jKiKOrMxwAPqa2Vv2WUXEU0Uw+HDpKuc80KCGC9MH3/AIrUWNhaQ3DXUcWJmZm1FmYIW7xUE7E5P32rnqa6nFbbs51RknscH9VuHSRSWUjOJUFlDaGRVVQJoQdQIUAb5yPHqPCsMHr0vhMBaC6gvjzkmu5ZVByDue+pG65O4A6fWqHHOzcb28UNoRFypHkKyMzLIXCgknc5GgY8KinqoR9kn/3sXHJLbgw6oSCQCQuCxAJCgnAyfCm4rscYT4KMWschZ5gHvGXKoyg/txgeQOo79dq5rWMyxLOYZBA/dn0NyjvjvdOu1dUWpK647FKquGQFKYY6t/CScgXOk8kymDmbY5unVp+1QaqpMq0ZEDR1G0dW6aVqlJmcqEWUjHTSKulKjMdWpnNLT+CrRUzR0wpVXRg6bQyilIpKZAUUUUAFFFFABVqHuj6/mqtWoe6Pr+aABl3PuaTTQzbn3NJqrPc6/aGmk0UuqlzRuHtECVZseHtMWVMaljaRU+bVJp3KoADlsZbG2ynxwDpIez4CGBkMk4mt5i0Y+Z7Z4SdCeucj6Z6Vzbq6aC8EsUJtWgdGjhOrUpQggsTuSf8AWh3QRUZbIi4X2aubqPm20LTLzRCRGMlXK5BbwVcHqTitl2z7JvJBarZ67uTh0S8Ovo411FJv83WigZKZmZc+Gketaq27VIANIWNWbUVVWBAK5JIC4Lav48aSLtKi62UKryHmSECQB5dIXJOncYVRn0qrIybbfB5EeBSC4ltnKo8HM57trMcQQfMzEKTjOBnHUjzrm8uvS+3vHxLByowBzpVMrhcM6RgFVbIBPzb+PdFZrh/DRPb7W8gZH3ukzy2TxR8nAPqOm2cdahveyOmELxykjMGOk5daTj/DAjNPEAsMk80cSYII0Y1HHgM6hjwxXGMdJzsXHTqSuinopcVaMdNMdGYvTtEK1reCQLaw2XEhl2F0yyxjf9s5QaR5jST66h5Vzez9qUkju3Qm2huI1nkAyIy3QkeX/wCeIrRvw9kmmjgikubdp0ltYrb+jMQZ5lbBUKBIAvgTjByprGrK/t/X+hWcSyZ7uGa7ubSAO9xI+uQ6GESAnCRjILN0JO4ztg4zWJmmYuxkyXLMZC2dRcn5s+ua63aCWK3/AGreC8spdi6yytGGU+JTJ1Z88j61nC5zknJO5J3JpU6ff7/LNqdbE2HBbhzCvewjMBpeEBl8iGYHqf4FXjI2GH7g1dDrtcptjb5/zWEWSpFkrGelTdzZOMmbgzNkHD4AI08y2wTtv36ZzXwB+5s2otzLTJGc6T8/TwrHB6dgGo9NFGnRT4ZFxZ2eeVn7xcgjIOANgMjY7AVoOyl9fC3lt4YBc2smpXjlIRFLDDBHJABPlvvvXBaKprGcxuNRl5Wf3I4pWhLD3FdUrOGJzT0zW5pZlxZQcLAI518cSNp1RoCGYPjbmDJHkQMjY1le0FqtvdzQoSUR8ITudJAIB9RnH0rYJZoipPb8Pu4oCVd53yypjuz8v5mYDJyRjKlvOqPEuE/4OG3A53Eru6eR0XDSHS0i6vRMDY7A5J6VNOVn8P8AnycrujHiSnCSq7qQSD1BwabqrrxRHXaLeqlzVMSVZsIHmljhjGXldI1zsNTMFGT4DJFLAtahMU00rV+54ZLbos8ypo57xLGz/NM0bEPhRvpBBBbbc13uG9m7dwXeYsjmN4dHyvoIJKvnbJ2G39v0qJSUVdlp5uyM3xTh4hMYDh+ZbwTkgY0GWMNo6+GcZqgUr0niPDIboq8zKrxh4oRFgIYBnkKw6nSPI7gVkLrhgWWK0Ro3nkYFpS2hAWHyRhicY8cn+4UQqqWyM6lKy3OEVptda94NNDG0kqaAtw9q6kjUsyIHIx5YYb1zcVsmc7gR0VJijTRcWDI6tQ90fX81DoqzCvyj6/mi4sGVXO59zTdVK/U+5ptMV2O1VquwlkWeS6CiVrQLIbQgarmB9UcujPUrqG3risnXq/Yvh7Nw62ZVFynPnkglg0i9sb3lsptihOGWQBWXJAzjI6UBdnL4xKlrbKfknO0duLiyuzsu2uO5ZlU4HQqDsF3OM1hzKSckkk9SSSTWl/U6VheiFuYOREilJrw30qMeocglEbYZVNh5+WRDUmrlwniaHgfZy7vcm2geRQcGTZIgfLW2Bn0G9dq6/TviMaluQJMDJWKRHf6L1PsM1zuGdvLu1sksrVlgVXkd5lUNM5c5xlhhQPQZ9a1P6X9sr6fidvazTtcRXBkV0kwxXEbMHVsZGNPtjPpicUbKvPlHn5BBIIIIJBBGCCOoIro8GvhFINao8bHDrNGZ41Ge/wAvUMke9aP9aLNIOLuIwAZYIZpQP+qdSk+hIVT9c+NYhXrJxszuhVU47npg4dzGMC5eSeP4eFntp7SKCJyWkmEcu5wq4yCf6BtWAuI1V3VW1qrsquOjqCQGHvXoHZxTPw6J2jnlij5kFwIrwzRaQpKxyQu2qAsyoAVypz64Ge/UGF0v25piWVo42ktoN47P5dKW2rxZUVckADJomtrhpqlpuLM5po0UA09T9fTzrE9FKLN5wKzextF5yfE2PGIljV4x81vcspUKy+O5O4/t23GKm121rG2eLzRtCnw8dpZDUSY8gsdQ0ks+ps7AasZrsC2eyW3SGT4vg8+u9t9eOdbTQRtcBQwGNzH5f3DAO55na6a6t+GRQ/D23DreXSht1kMt9cAbks2nYeLZOd8HriudSu/y/vJ52OckvJ5jdu0js7szsxyXkYu7e5PWq5SrrJTGjrsUzeemK1vA0jpGgy8jKiLsMsxwBv6mvWOyn6bxRaZb8ieTqLdSeQh/7j1c+mw96814dIIp4ZWB0xTRSMBucK4Jx67Vp+Idtri6uIY4yYIDPFlFP7kg5g77eXoNvesNR1ZWjB2XdnM6bibjtjwSzj4fdPFaW8cixEo6QorKcjcEDavFlkr2Xtlc54fdjziP5FeJVnoLypvJ9x5uD2LivTwapB6kWSutwOiGoT5Np2Pv4dLwXN/eWaH/ACzA2YAPEEYJU+o2ru8PuY7YtcwN/wATu5AOHWsiKwLyZLRySat1ymlT1zyuuCSMb2N4lNBewtbzRQyOeXruM/DkN/RJgE6SQBnwODtjNejcSubm3upJDw+CG+028ts0TmS0upeb8NzNOAdQF2epH9OfXmmrO3kwrYuWx5V2p7PvY3Bt5XV5RHG8ujOlXddWnPjjI3rhvHXoH6jcIFtPGJrg3N/MrT37bCNGYjQiDGwADdfDTsOlY54q6adW8UzN6VSjdHLIrfdkuEmKHJQma4VWKAoGNq2iSCaJiQAwkicHLDGM+AzkEtQzKrMI1ZlDSEEhFJwWIHUDrXqnGozbWs8ojMQjRhEENlNZxuwAXkSTAnQx5jqqKSBIR8lbOV0ccqTpvc897ZX8ck3LjRMxEq9wFKSSN4qQsroQPMY+1c+x4jPhYotTHoqIHZj47AGucRWh7J9rZ+Gif4ZImecRgvKpcoE1d0Ajrq8c9KprYyUnfwQXV9eQ45qSRZ7vMSWPPtmuY10Wk5jqJDqBZG1aXx4HBBxt4GvW+xvbVuIi4tuLxRPamEnnCPl4fIGnrjoSQRgjTXj84AZgpyoYhWPUrnY0o2u9hzvZO+x6bYTpdQa0ASKSOS3k2ijitQ+hZmVOa7lhGrFSQP5xXn/G7E287ppZFP7kIfZ+S+8ZYeBKkHB33rQ/p1OzSTWw1MZI+ZFGos2Z5YyCAFnA1H0R1bAOM1L+pdqFeCTAV5BLqDtrvJ8Pj4iX+xD3UX+1PDpQlZhJ3VzFaqcHplFXYjJkgerULfKPr+ao1ah7o+v5pWKzZXfqfc02nP1PuabTICvZ+x1sZuH20ptYbki3ntfibWc29wyr84sbsaQUzy8LKCflx57+MVv/ANPr1WiaP4S1mmt35iSc4Wl88TgiWPJXTMhUsuGIxq9sAHH/AFEiC376OQYyqBPg4uVZLp+VkhP/ADApBUv4sGrMV6F+o0PPRZ1IZ7VUilKgxW8FuTi0toU89GZG8tfhsK89oAUV7X+nnDrfgNnJxjiRxdSRlLW0/wCaqtvox/1GwM/2jr1NY3sJbW0SrdSMrT6m5auVCxYONQHi3qenh510uPWMF7Lzbi8kYjZEEkQjjXyUY2/JoAxXaHjkl9dz3k2OZPIXYDuoAAFQegUAfSqKvV/tLw2G3kRYJDIrJqYsUYhskY+WufZQNLJHEpAaR0jUtsoLMACT4DepcTWFVo9U7BW+bOIiJJZg8zroU2/EraPlyMrIf/UwSaNP/a7eONuB+oqcq6jt+Tb2qwQIq2dtJz2gySSLiXA1zHqeu2nc9a1Ng+II7dYRPFBHyeRNOLeSykY5voDcEE8klEIwCSJzg4GR5p2hvlmupXjiggQMUjitR+wqrsCpwC+euo9c/SlJbF0Z++5Cr1PbThXViocKysUbuuAc6T6HpXPD1LHMVIYHBBBBHUEdDWLielGuerWnw+8vC7nRHLbXeqweXItpzC2mXQ3QAggtv6HBrg9sWgKryZZr+ZSBdcSkeSSMHHywp/Tjcnx9zvUy8VhlktpLi1e1unPKadYgsE6yxmMknbqGz0288VV47M8tkMKLW0tWEcFvs0lxMG0M7eAx83n0br1riimpK/3+/tyoTtK5mM0tQB6cHroxO1VUyQrUtkv70R8pYz/8hUAep7Vv3E/96/kUnew5YyRv+0dxqtJx5xn8ivMGjrd8WmzBKPNf9ax5WubRO0H+Tlp0lNMoFKbirzR1E0Vd6mZT0zXA7hO88QMJuRrBa3XVqlQbso075xnpXpMTqeZ/w6/k+HNroEFzIeZwub4mAA/P8yKBq6dNHU7Vguz9oXuo1SXkSA6oZcagJV3UH0OMVqeIXsUpme+haKRnt7S6W3+f4ko3NBTx30oD44xvWNV3kvv7HNOMlycztrLZI0cFm5uZVLPeX7u0rTSHGFDZwR1Jx5jckGsyJK6vbDiPMeOOO1+DgiUmGIxiJ31HeRh49MePQ77ms9rrWnD2K446jHY6dpclJEkVirI6OrLgspVgQRnbNaTi3EhLFKoEasyFWaKAQsV5nMI+bPLUs+Sq95j1xWKEtde0l1qp1DIIU6nU4PQEKd/H13xTcWinVjN7nMeEU2ING6uvVTkZ6Zq1dRlD0Ok7rnwBGQD64I+9XeC8YSAOksCzxyFSVYgFSM7jII8aq7sROFOQcOvpLl+RIMh1YfLqHQZ33rh3sHLlePOdDFc+xrXydp7eNT8LZrHIwxzGK7fQDf71lZE5jEnLO7ZPmzE/70U9m9rIyq07xW92XuytwY5ZH2I5Lq6MiSo6tjZ4z306ZxgjYjpVztbxMypHGCoUSSSFY4yoZj8od5DvI+AB5AbVXs7PQo33bDbkL4ZBBPQj5gR/vXMv3LOepA+UZbXsPI/7Vad5GEoOMSpRS4orQxEq1D3R9fzVWrUPdH1/NAEDqcn3NN0mrLEZPuabkVORt0l5IMVY4fc8mRX5ccmOscyCSNgfMGkyKNqMg6XybNeJqVGhoX0rI1vBFzRGjtGygOG6Y1HSTjqRttjJcat0iuJI4iSiFQCeudI1fzmpLa+kjUpHIyq2dSg46/ile4LhQ4V9JGGbOor/AGMw3K/yPCjIaoNnNorVdpJ7B54msYJFgVFEySnRJIysRgEMwAKhd+uSc5rQ9vuHcIjtov8Ah0izzq4hfTLnlKBrJIx+5kkjUNv4oyQujLb5PM60nZtEWJ5D3m51vNnJCRNGCrgDcsHGwG5+mRY4k9i1jbxwQul6hHxMrZ5TAg6tB1kk5Cd4eJxXOS9lUgxtygowqR7IB47eJ9Tk0s0UtLUZ0+0HF1Kaf8NcO4KrIQ8s8S+LEkaQ5OSSMbnptWVFXZ1Z2LuSzMcsx6movh6M0UtNNEINPBp/JpOXSui1CaNPwS8uZLZoUMMsa/LypSwkQeGkjG3kc7Y8MVcnugSZ7gFsIBb2hHyrdMSJAF8Tq3zvs/tWUsSFkBdnRehaI4cV3opIEdALgyhnV1EuolJB0OrGwPQ59/CuOpC0tv2X67mqb7nDuoWicxv3lC5AOcZAOP5qMPXau+HtIseQPiri4fKnbQqggj0UYBrgspBIIwQSCPIitoSUl8l5tEwerFm+ZIx5un/2FUM1JBNodXG5VlYA9CQc03HYtVmb3jEJFvKfJf8AUVjQ9dO+7WyTRPEYolDjBZdeRv4ZNcESVzaehKEWpGlOviXQ1LVQSVfsISQJmA5KyxpIT4ZPj6f71rJWVzoWoXc6fDIUVSswws6gwyjrHKhOMHwO9dGC4uBpKojuqZknmyDzWAz0O5Cqqk+h9aoyARakkIWKOYchmyQXK507dQpbJ+3jVTiEsYTC3DysdyAf2/Un/auazk/yZNxmzmcUleWV5JG1uTgsO7gbDT6Vz3iroahTWUGuyMrbEVNNGXBy2WprC8aJ8gnB2cAISV9NQIH2qy8NQPBWqmnycFTTTi7ot3/EI5VKgSJpJdC2lzI2kAh8AYOwwRn186m4jweOKKzdbuGRrofuINX+GOR/mYBIAVlPTPXAIrjtERTOlWkuxzyck9zUdp+yvwUlshuYn+IVAxGv9t9g7H5d0BOx6keFU+LWcVpdtGtyLmOMJIk0AyJG2IQE7e5GR9dq4ss7N33ZsEkamLbnqd/Oo6FHyJ1PB2b3jIZNMYZC2eYrcpk366Tp1DJOc5rk66ZRQopcCdSTJNdGuo6KdgzZLqFWIWGkfX81Sq1D3R9fzRYM2V36n3NNpz9T7mm0yApc0lFAC6qcJDTKKBqTRKJzUi3NVqKnFGirTXcurcipFnFc6ipdNG0dZNHVDinjFckMaesxqXSOiOvXdHUxRoFc9bo1Mt3UOnJHRHV0nyWuXWj7OXsj6bRIbaRnyqGbTEOn9R2Dfk+tZdboVIJxWc4NqzNcqU1sz0duBSWbxSX8ltHINSW7rIwVlIxypFKghRnZxnHjtWC4zwmaCVluIykjEv0+RwTnWjDZl36ioA4q5JxKV4Ut2lZoI3LxxMcrGxGDpzuo9BtUQTi7iWnXm5zfhG0GTSdAYIXx8oYgkLnzwp+1QmOvTbDtfapwv4V4gbowy4k+GhMHODERal/qbSF+bHXGfGuD2CSNr+GGa3juY52ETLKM6M78weG2PHqM+9Uqrs21wZujtJ24MrdWTxFRIpQvGsqZ/qjbusPQ1HBbs7rGil3chUVRksT0Ar2/9Tns/gDNDHbXcglFoJVZHNrkMT3T1+XAHTJzv0rA9geOw2E0slynMQxftqsSPNztQA0O2NA0ls770QruUMrb+DFU3KOSRia23ZzhTC1MV5pgjvJI2tUldYZ7nB306u6hIUaz64ySKodqeKrNxBrq1CpGrxvbjkxx4K4bLpjDNqzknOfauNxK6luJXmuJGmlkOXkc6mPp6AeAGwrR+9K+xDpTN3xyyveGxme6trOSI4SLRIQ0Sk7IA4Bcewz1Jrzy9vzLI0hVELf0xqEQewqN0z9Bgeg8qjMdOnTjH8mbVRDhPThcVXKUwrWuKZDrVIl0XFLzhVCjNHTQ1rJl8uKYyA1T1Gl1nzowE9SnyiZofKo2iNJzDRzDVJMylKm+w0ikp/Mo1+lMztHyMop+oeVGRQGPyMq1D3R9fzUG1WYcaR9fzTDErONz7mk0mrDdT7mm5qcjXpLyQ6TRpNT5ozRkHSXkg0mk0mp80ZoyDpLyQ6TRoNTg08GlkUqKfcrcs0cs1bFOGKWZotMvJS5Zo5Zq8AKXSKXUK9IvJQ0GjSa6HLFHKFHUH6J9mUKUGr3JFIbcUdRB6Sa4KgkNPExqY21NNtSyix9GtHgFuTUi3lRG2NMMBotFlKdeJcW7/nr604Tg1zzEaaVNLpxK9ZUXKOnrHnRtXM1GgTEUukP16/2R0itMMdUhdGnC8NHTkh+rpPksGOozFTReelL8UKdpEupRl3GNFUbRVY+IWk5i+dUnIxlCk+GVTHTSKtlh5004qlIxlRXZlWipyopugVVzJ02iKipNFGgUXFgyOipNI86MCi4YEdWoe6Pr+ahyKsQt8o28/wA0CxXkgd9z7mm66HU5Ox6nwpNJ8j9qLBkxddGqk0nyP2o0nyP2osGTF1UaqTSfI/ajSfI/aiwZMXXThJTNJ8j9qNJ8j9qLAptEokp4kqvpPkftRpPkftSxNFWaLQenCSqm/kftSgnyP2qcDVakuB6cHqkGPkftS6z5H7UsDRapF0PTtdUhIfI/Y0vMPkfsaXTNFq0XddGuqfNPkfsaOb7/AGNLplrVryXdVGqqfN9/tRzff7UumyvVxLmRSbVV53v9qOd7/ajBh6qBZKimmJfKoOd7/Y0c73+1PGRLr0nzYkNutMNqPOm870P2NHOPkfsadpGTnQfYQ2vrTTbHzFO5x8j9jSc0+R+1V7jJ9AjMBpDEfKpeafI/ak5p8j9qr3GbjS7MhKHypMVMXPkftTSx8qe5m1DsyOkqXJ8v4oyfL+KCbLyR0lS59P4o/wDH+KAsvJFRUv8A4/xRk/2/xTCy8kVWoe6Pr+ahyfL+Kswk6Rt5/mkFl5P/2Q==",
            },
            {
              title: "PPC (Google Ads) service",
              desc: "SEO services help improve your website ranking and visibility on search engines. SEO services help improve your website ranking and visibility on search engines.SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "Social Media Management",
              desc: "SEO services help improve your website ranking and visibility on search engines. SEO services help improve your website ranking and visibility on search engines.SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "SEO (Serach Engine opmizer)",
              desc: "SEO services help improve your website ranking and visibility on search engines. SEO services help improve your website ranking and visibility on search engines.SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "PPC (Google Ads) service",
              desc: "SEO services help improve your website ranking and visibility on search engines.",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
            {
              title: "Social Media Management",
              desc: "lorem is best specail use ",
              img: "https://images.pexels.com/photos/50987/printer-printing-paper-output-50987.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
            >
              <p className="text-xl float-left ml-6 font-semibold p-2">0{index+1}</p>
              <div className="p-8 float-left text-gray-400 w-full">
                
                 <hr className="mt-[-20px] mb-2"></hr>
                <h3 className="text-xl float-left font-semibold p-2 text-gray-900">
                  {product.title}
                </h3><br></br>
              
            <p className="mt-2 text-gray-600 float-left flex ml-2 text-left ">{product.desc}</p>
            
            <button type="button" className="text-xl   mt-2 text-gray-900 float-left flex ml-2 text-left">More,  <span className="  "> → </span></button>
            
            </div>
              <img
                src={product.img}
                alt={product.title}
                className="h-48 w-full object-cover"
              />
              
            </div>
          ))}
        </div>
      </div>
    </section>
</>  );
}
