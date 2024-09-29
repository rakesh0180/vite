import { useEffect, useId, useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ data }) => {
  const [add, setAdd] = useState("");
  const [todoList, setTodoList] = useState(data);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [error, setError] = useState({});

  useEffect(() => {
    if (editId) {
      setAdd("");
    }
  }, [editId]);

  const id = useId();

  const handleAdd = () => {
    if (add) {
      const newItem = {
        id,
        name: add,
      };
      setTodoList([...todoList, newItem]);
      setAdd("");
      setError({});
    } else {
      setError({ add: "field should not be empty" });
    }
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.name);
  };

  const handleDelete = (id) => {
    const filterData = todoList.filter((ele) => ele.id !== id);
    setTodoList(filterData);
  };

  const handleSave = (data) => {
    const updateData = todoList.map((todo) => {
      return todo.id === data.id ? { ...todo, name: editText } : todo;
    });
    setTodoList(updateData);
    setEditId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditId(null);
    setEditText("");
  };

  const handleInputChange = (e) => {
    setAdd(e.target.value);
    setError({});
  };

  const moveItem = (fromIndex, toIndex) => {
    const updatedTodoList = [...todoList];
    const movedTodoItem = updatedTodoList.splice(fromIndex, 1)[0];
    updatedTodoList.splice(toIndex, 0, movedTodoItem);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="todo-container">
      <div className="add-section">
        <div className="input-container">
          <input
            type="text"
            name="add"
            id=""
            value={add}
            onChange={(e) => {
              handleInputChange(e);
            }}
            disabled={editId}
          />
          {error.add && (
            <label htmlFor="add" className="error">
              {error.add}
            </label>
          )}
        </div>

        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="operation-section">
        {todoList?.map((todo, index) => (
          <ToDoItem
            editText={editText}
            setEditText={setEditText}
            handleEdit={handleEdit}
            handleCancel={handleCancel}
            handleSave={handleSave}
            handleDelete={handleDelete}
            todo={todo}
            index={index}
            editId={editId}
            key={todo.id}
            moveItem={moveItem}
          />
        ))}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          quo ipsum pariatur dolore et eos quam nostrum suscipit, eum
          necessitatibus culpa vitae. Optio, repudiandae libero. Architecto sit,
          quam ad quod consequuntur libero id placeat tenetur at? At, tempora
          aliquid illo minima dolore aliquam fugit inventore quo molestiae
          laboriosam similique impedit maiores sint iure vel id quae ea
          perspiciatis cumque velit reiciendis hic nesciunt quidem! Voluptate
          vero hic accusamus eum accusantium neque ducimus voluptatibus
          molestiae alias commodi optio, non cumque dicta aliquid unde maxime
          numquam odio explicabo voluptatum quia iste animi? Repellendus non
          saepe quaerat quas nostrum ipsum harum exercitationem odit facere
          voluptas inventore, tempore, impedit delectus obcaecati. Et
          consequuntur recusandae dignissimos hic obcaecati consectetur iusto
          minima illo repudiandae sed voluptate iste magnam soluta porro
          doloremque, dolorum ad tempora, aliquam nesciunt doloribus? Tempore
          deleniti error quaerat harum, fugiat repellat ullam dignissimos
          repellendus expedita est iste quas a facere nesciunt quibusdam
          accusamus inventore voluptatibus earum! Modi possimus, laudantium in
          officia laborum, necessitatibus et adipisci neque nisi nobis nesciunt
          sed. Recusandae ducimus fuga iste saepe at accusantium nobis fugit?
          Provident esse quos eos excepturi soluta quisquam vel consectetur
          aliquam harum in explicabo ipsam, accusantium ea expedita totam nisi
          dolorem nam, impedit pariatur tenetur minus commodi mollitia magnam.
          Nam quia corrupti obcaecati facere quisquam vero aliquam delectus
          cumque, accusantium assumenda quasi impedit adipisci rerum quas
          dolores veritatis? Ea, provident animi, ipsa, itaque est totam
          veritatis quis tenetur optio id voluptatum dolorem quasi non. Quis
          architecto hic repellat quam. Quis nihil corporis inventore excepturi
          repellat placeat recusandae. Quo nobis temporibus, ipsam, non,
          perspiciatis praesentium culpa qui illum esse repudiandae dicta veniam
          quaerat officia provident. Vero explicabo veniam modi ullam, soluta
          officiis magni debitis esse inventore nam deserunt magnam perferendis
          placeat sequi at. Cumque, illo voluptatum! Doloribus unde accusamus,
          praesentium nihil labore quidem ipsam, corrupti beatae a eum fugit
          rerum quia, reiciendis eligendi ut ab quae eveniet laborum vitae!
          Molestiae nobis earum iste distinctio dignissimos deserunt nulla,
          laboriosam consequuntur soluta. Id blanditiis fuga nemo. Omnis quis
          alias laborum harum nisi, incidunt quaerat odio, cupiditate fuga,
          animi blanditiis ut neque! Quas quisquam voluptates eius, consequatur,
          minus repellat corporis molestiae perspiciatis tenetur laudantium
          veritatis aliquid? Sint quia saepe beatae, laudantium nemo eum itaque
          laborum nulla fugiat corporis veniam, a, cupiditate fugit. Unde velit
          asperiores quisquam consequuntur delectus inventore at dignissimos
          nobis rem obcaecati quaerat, dolor omnis quod perferendis id non
          accusamus voluptates cupiditate suscipit tempore quos beatae?
          Veritatis expedita reprehenderit provident fugiat accusantium quia
          quaerat sequi minus facilis eum, magni totam ducimus non dolor cum
          modi nobis esse delectus, temporibus vel consequatur ullam, placeat
          tempore. Libero recusandae voluptatem doloribus aliquam possimus modi
          ab, nihil eveniet distinctio, facere ullam repellendus fugit.
          Provident repellendus consequatur eaque quia nisi ipsam debitis ipsa
          dolore, repudiandae animi voluptatem, consectetur adipisci nesciunt
          cupiditate impedit ut molestias ab sint, repellat ducimus maiores
          totam. Tempore possimus odio, qui iste deserunt veniam natus modi cum,
          unde fugit, eveniet officiis laborum. Molestiae, error ipsa?
          Asperiores dolorem aspernatur reprehenderit libero quo explicabo nemo
          ut, porro tempore modi dignissimos recusandae nulla minima nam
          voluptatibus beatae officia veritatis ipsa iure labore aliquid iste
          error sint. Explicabo placeat modi dicta commodi exercitationem. Id
          quidem iure ullam! Consequuntur assumenda quasi eum laboriosam
          voluptates nobis modi aliquam autem nostrum laudantium sequi dolorum,
          temporibus earum ea ipsam. Nesciunt in modi, architecto temporibus
          recusandae quis est doloremque non dignissimos molestias quos, sint
          asperiores sed, delectus deserunt. Veniam vero beatae reprehenderit
          dolore. Iure laboriosam voluptas pariatur impedit excepturi
          blanditiis, cumque ipsum explicabo deserunt aspernatur alias
          reprehenderit fuga, totam ipsam quis. Omnis voluptas magni alias
          molestias nostrum nam quod laboriosam error. Deserunt sint aperiam
          illo repudiandae nobis? At, sed porro, delectus reiciendis repudiandae
          rerum iusto exercitationem saepe officiis nam voluptates minima
          eveniet quidem doloribus suscipit quo quam ducimus sint eius minus,
          nostrum error! Beatae deserunt autem ad quidem! Numquam accusantium
          facilis porro pariatur eveniet delectus consectetur ex aliquam nisi
          hic est quia possimus corporis aperiam incidunt vitae harum repellat
          amet optio, aut omnis quasi voluptates totam enim. Ab, praesentium.
          Dolor quas odio culpa nihil beatae veniam, dicta, nisi quis
          accusantium dolores voluptatem illum reprehenderit repellat, aliquam
          rem at repudiandae sit aspernatur temporibus? Ipsam maxime architecto
          blanditiis quasi magnam illum perferendis, culpa assumenda totam
          nostrum ab! Veritatis qui quaerat, consectetur, consequatur nisi ex
          numquam odio at facilis doloremque incidunt possimus animi quia!
          Ducimus consectetur dolor similique voluptatem doloremque eum
          provident accusamus neque alias iure pariatur quia, soluta natus
          dignissimos totam numquam. Qui minima debitis vero recusandae fugiat
          obcaecati, inventore dicta incidunt velit exercitationem odit sit
          aspernatur, ratione accusamus accusantium commodi itaque adipisci
          tenetur, mollitia numquam id eligendi. Quo minus nesciunt quidem ea
          est quisquam perferendis magni sed, sint, magnam illo. Voluptate
          libero nihil itaque architecto sapiente rerum veritatis, voluptatem
          nesciunt explicabo accusamus ducimus hic obcaecati nostrum aspernatur
          amet earum asperiores nobis eum laudantium odio quaerat aut quod est
          magnam. Blanditiis architecto fuga modi! Tempore molestiae molestias
          maiores harum recusandae ratione voluptatem blanditiis repellat sed
          qui doloremque ducimus odio quas, consectetur officiis itaque. Neque,
          ipsum doloremque debitis porro tenetur doloribus corrupti optio
          facilis repellendus veritatis temporibus vitae provident mollitia ea.
          Ab veniam neque, quam magnam cumque nihil, unde laboriosam cupiditate
          nesciunt nisi temporibus quae sunt labore repellat mollitia, dolore
          quis illo accusantium eveniet pariatur. Aut, eveniet officiis
          laudantium consequatur magnam molestias quasi sint deleniti animi
          error. Velit excepturi blanditiis doloribus ratione debitis, odit
          distinctio consectetur dolor alias non obcaecati facilis impedit quasi
          at. Consectetur eius totam dolor autem quibusdam nam incidunt
          voluptatibus, earum odit pariatur nisi? Repudiandae accusamus nihil ea
          quae id quos nostrum animi, ex est tenetur rerum laborum quidem
          doloribus atque. Dolorum libero mollitia iure quis explicabo molestias
          ratione beatae aperiam ducimus adipisci assumenda ex, eaque quas
          eligendi deleniti error, quae pariatur tempora dignissimos nesciunt!
          Neque dolorum error earum eaque. Vel itaque a ducimus, dolorum dolore
          odio aut debitis deserunt natus optio possimus, corrupti beatae. Modi
          rerum rem nisi quo sapiente atque placeat possimus earum nihil! Optio
          asperiores libero quas fugit saepe eveniet atque velit officia
          perspiciatis quis eum, vel molestias nesciunt perferendis fugiat,
          nostrum maiores beatae error ab magni voluptatibus soluta nemo rem!
          Numquam rerum temporibus itaque ipsam odio mollitia dolorem? Iste
          deserunt veritatis delectus id aspernatur quam dolor amet sunt!
          Laborum suscipit aut distinctio tenetur ut aspernatur quisquam in
          porro ipsa esse rem totam, harum voluptatibus dolores voluptas
          sapiente nihil perspiciatis eligendi accusamus soluta veritatis ipsum.
          Quidem id consectetur, cupiditate mollitia corporis facere praesentium
          distinctio repellat quam doloremque culpa? Iusto eveniet quasi illum
          repellat quisquam quod praesentium dignissimos quo velit ratione
          aspernatur debitis facere, libero itaque minus ex id. Neque accusamus
          dicta aliquid cupiditate soluta corrupti architecto sit vitae,
          officiis corporis similique iste libero hic fuga iure id possimus
          provident, harum modi sed numquam nulla natus! Cumque hic consectetur
          aut molestiae. Veniam aspernatur recusandae assumenda quasi distinctio
          magni laudantium rem aliquid! Fugiat dolores ipsum debitis quaerat
          perspiciatis excepturi iusto, officiis voluptatibus fugit atque ex
          culpa quos a mollitia quas temporibus nulla iure beatae saepe cum
          exercitationem aperiam ratione, similique enim. Earum id corrupti fuga
          laborum, vitae, quidem optio et magni officiis similique modi ab
          recusandae rem repudiandae dolores, ad aut quasi inventore?
          Accusantium minus amet magnam consequatur, recusandae asperiores nobis
          incidunt ea beatae neque obcaecati, in nisi culpa numquam voluptatum
          quia. Nisi nesciunt fugit molestiae rerum soluta excepturi! Officiis
          laboriosam ipsum maiores nemo veniam tempora commodi at modi iusto,
          vel error animi impedit provident corrupti beatae dolorem illo
          possimus illum explicabo, pariatur molestias cupiditate eos
          asperiores! Qui voluptate neque consequuntur vel quo dolores ex a
          delectus aut hic et aliquid animi aspernatur porro dolorum,
          necessitatibus quia nihil doloribus? Voluptatem repellat rem eveniet
          provident recusandae dolorum harum sint? Voluptatibus porro veniam
          incidunt quas tempore sunt adipisci beatae provident labore dolore
          minus veritatis repellendus, mollitia magnam ipsam quos cum asperiores
          maxime voluptatum. Modi nesciunt amet cupiditate dicta sit illo omnis
          soluta, nulla necessitatibus doloremque, earum repellendus porro qui
          quisquam reprehenderit quidem laborum animi. Nihil dignissimos numquam
          nesciunt quod tenetur blanditiis, reprehenderit ratione, quasi odio
          sequi tempora distinctio ut, reiciendis enim quis quas molestiae
          libero! Commodi excepturi cumque dolorem voluptas expedita aspernatur
          consequuntur perspiciatis ipsam. Alias earum ad rem repudiandae culpa
          ipsum in possimus nam dolorem a nihil veritatis, voluptatibus, fugit
          iusto ipsa officia. Molestias quas, consequuntur labore iusto quia
          repellat sapiente, animi nesciunt vitae adipisci nisi cumque
          repellendus blanditiis, rem dolorem illo quam? Similique, corporis
          corrupti nemo laboriosam laudantium ipsa quia incidunt explicabo
          blanditiis nostrum ut perferendis mollitia dolorem sit quis, dolores
          amet error facilis quidem porro, aspernatur voluptatem esse tenetur!
          Mollitia eligendi quod dolor, ducimus officiis tempore alias?
          Blanditiis, in? Vel aspernatur quasi, id a ex exercitationem autem
          maiores, illo, officia laudantium mollitia odio delectus quia dicta
          repellendus reiciendis sunt! Nihil iure ipsa vel quas, deleniti minus
          repellendus sint suscipit aut sunt harum architecto quo doloremque.
          Beatae, dolor harum? Magni voluptatem pariatur cupiditate porro
          numquam, quibusdam dolorum odio nam provident eaque ratione autem amet
          rerum, nostrum dolorem odit eos. Eligendi necessitatibus alias
          pariatur vitae sint dolores autem libero fuga facilis id sit possimus
          doloremque neque quaerat culpa non laudantium ipsum, veritatis
          quisquam voluptatem magni. Tempora, commodi corrupti. Beatae
          laboriosam esse eligendi, deleniti minus vero quam enim inventore
          optio, tempore sunt blanditiis perferendis earum, ex non. Deleniti
          reprehenderit quaerat quasi corporis iusto facere, impedit minima,
          quos vel autem voluptate numquam dolorem error similique modi eveniet
          praesentium. Molestiae veritatis aut labore fugiat, rerum iusto illum
          ex sit nobis consequuntur placeat voluptate adipisci iure cumque
          soluta maxime ratione nesciunt? Minus dolorem quas, dolor possimus
          enim aliquid accusamus. Eaque provident vero facere, temporibus
          voluptatum neque eveniet laudantium sint saepe, voluptates id nostrum
          consequatur quidem quibusdam asperiores. Ratione quibusdam fugit,
          quasi eos ab ipsa? Modi similique officiis itaque odit, numquam ipsum
          harum molestiae atque aliquam iste perspiciatis enim quod esse
          necessitatibus saepe hic natus fuga obcaecati? Perferendis illo labore
          dolorum adipisci numquam! Aliquid reprehenderit amet quis aspernatur a
          in provident consectetur molestiae nobis quia, impedit ipsa
          praesentium, quas temporibus ducimus debitis. Non, deleniti!
          Dignissimos quas vero voluptas, quo earum laboriosam, et provident
          animi delectus, amet eos nostrum repudiandae doloribus ab pariatur.
          Excepturi in rem, aperiam, natus rerum deserunt magnam aut ex quod
          iste expedita optio corporis laudantium voluptates esse consequuntur
          sequi possimus nobis qui animi. Cupiditate quod aliquam quos,
          doloribus ut autem quae repellendus sequi nobis deserunt dignissimos,
          pariatur unde nemo odit rerum est amet. Repellat libero neque sequi
          vel accusamus facere obcaecati quibusdam dolores, illum, saepe est
          corporis odio ipsam. Eveniet officia rem provident aliquid minus fugit
          explicabo soluta totam maiores sunt. Aliquam nemo quas reiciendis ea
          recusandae optio perspiciatis debitis. Qui nihil, quae cum voluptatum
          adipisci inventore architecto itaque aliquam, eaque officia similique
          doloremque praesentium hic facilis. Qui repellendus, delectus mollitia
          obcaecati eligendi architecto alias sed ut optio assumenda possimus
          reiciendis quibusdam odio voluptas aliquid placeat consequuntur fugiat
          repellat distinctio neque non vitae voluptatem, dignissimos magni?
          Quisquam esse itaque perspiciatis debitis illo suscipit nam aspernatur
          ipsum tenetur ducimus, voluptatibus possimus totam, sed nobis
          provident numquam eveniet rerum, recusandae earum facere molestias
          beatae at. Voluptatum quaerat maiores dolores omnis iure non animi in
          voluptas, perferendis nulla adipisci. Quae nisi voluptas quasi error,
          aut voluptates asperiores libero iure corporis aspernatur maiores?
          Molestiae iste tenetur praesentium quasi nemo ea, odio quibusdam
          suscipit dolor tempora illo consequuntur assumenda a repudiandae
          officia, accusamus, vitae fuga. Minima magni repellat accusantium,
          itaque eius quidem delectus distinctio deserunt nisi autem optio modi
          inventore, sit alias reprehenderit possimus incidunt repellendus sequi
          rerum magnam dicta. Veniam omnis dolorem maiores aut incidunt
          asperiores commodi id rem, cum neque, optio accusamus labore quis
          laudantium! Sequi facilis odit neque officiis culpa officia
          voluptatibus nobis, tempore deserunt doloremque dolor corrupti
          aspernatur alias earum placeat. Facere adipisci quasi ex dolorem
          sapiente provident rem fuga similique non unde sit nemo veritatis modi
          perspiciatis maiores, delectus hic incidunt? Provident molestias
          voluptate at, saepe quo placeat, iste ipsum incidunt dolores amet
          itaque eius blanditiis ducimus fugiat cum omnis ullam, animi alias id
          sint pariatur distinctio. Autem, ipsum nam. Voluptate necessitatibus
          fuga odio laboriosam possimus qui ipsam iste sit optio vel, aliquid
          aperiam porro sunt nihil eum perferendis repellat nesciunt fugit
          placeat expedita quas ab quos quisquam dolor. Incidunt, aliquam est,
          qui nam distinctio vitae doloremque esse provident inventore
          voluptatibus consequuntur illum, dolorum facere maxime? Est a dolore,
          assumenda rem saepe, sequi expedita quod esse deleniti illo
          consectetur reprehenderit tempora dolorem, temporibus soluta officia
          voluptas qui suscipit velit. Eligendi quibusdam hic praesentium
          perspiciatis nobis animi, voluptas maxime consectetur odit dolore
          repudiandae ad quis, tenetur eos rem impedit fuga! Expedita dolorem
          ullam aliquid optio accusantium, in possimus dignissimos adipisci quos
          aspernatur modi autem, pariatur ducimus iure culpa sunt, magni
          voluptatum odio repellendus hic cum. Animi odio voluptatibus autem
          illo voluptas, nam explicabo dolores! Earum recusandae repudiandae
          molestias doloribus in tempore doloremque, officiis sed, deleniti, at
          consequatur neque maxime ea alias debitis aliquam perspiciatis laborum
          nobis ducimus quae dolorem. Alias aliquid corporis exercitationem,
          quaerat molestias nihil earum ipsa voluptatum! Repellat magnam porro
          fuga eos quos impedit, atque placeat sit veritatis et ipsa laborum
          nesciunt officia, recusandae aliquid ad tenetur doloremque omnis
          blanditiis nostrum deleniti sed praesentium. Vero placeat, cum culpa
          veniam laudantium ducimus laborum perferendis illo eum nulla nesciunt
          consectetur odio consequuntur velit distinctio suscipit in incidunt
          temporibus officiis odit quis? Facilis quo laboriosam sequi! Qui
          deleniti, aspernatur fugiat, voluptate saepe aut nisi, dolor optio
          harum nostrum magnam! Molestias impedit culpa, possimus ipsum eaque
          quo pariatur, aut suscipit neque molestiae nemo. Id soluta eum vel
          molestias voluptatum minima blanditiis alias cumque ut voluptate,
          maxime ducimus, voluptatibus numquam obcaecati autem in laborum
          delectus quam sed quis eius aperiam dolorum ipsum. Nulla repellendus
          omnis accusamus fugit dignissimos quam molestiae provident doloribus.
          Culpa sunt nisi, debitis soluta rem recusandae vel ex atque
          consequuntur doloribus saepe aspernatur exercitationem consequatur
          vero. Consectetur inventore exercitationem nobis laborum sint, dolor
          asperiores a molestias dolore est odit aspernatur vero quam non eum
          neque dignissimos repellendus sunt. Nihil quasi ducimus eum. Magni,
          corrupti ipsa totam consectetur mollitia non consequuntur dolorem
          deleniti id quis nihil commodi impedit, minima minus at cum veritatis!
          Eos consequuntur quo corrupti odit expedita optio reiciendis magni
          illo maiores, atque laboriosam aspernatur dolore sint soluta totam,
          dignissimos harum possimus sunt vitae animi excepturi esse quae. Minus
          voluptates cupiditate accusantium obcaecati distinctio unde delectus
          culpa, in aut, impedit rerum nesciunt amet! Est qui unde cum,
          necessitatibus dolorem minima delectus. Aliquam vero fugiat recusandae
          ratione dolorum, commodi voluptatibus eius eum magni ab praesentium
          doloribus harum laboriosam maiores autem aspernatur illo quasi dolores
          nostrum assumenda rerum ducimus. Minima molestias enim accusantium
          doloribus aut sunt ratione voluptates dolorum expedita repellat
          distinctio suscipit omnis, similique ipsa reiciendis consectetur quia.
          Alias nisi facilis mollitia minima! Iure officiis, ipsum consequatur
          quas ullam modi explicabo magnam eveniet dolorem sint commodi sapiente
          repellat veniam alias quibusdam esse quidem quo aperiam quam
          voluptatibus? Voluptatum quas est reiciendis porro sapiente ab quidem,
          vel maiores similique molestiae incidunt modi iure obcaecati ipsam
          totam delectus libero, cum amet tenetur doloribus dolore ea accusamus
          eligendi beatae. Pariatur quia obcaecati illum ipsam consectetur
          quisquam tempora quo adipisci eveniet laudantium. Nihil saepe aliquam
          dolorum autem placeat quibusdam aut incidunt! Alias non obcaecati eos
          suscipit quo illo ex inventore labore incidunt mollitia distinctio
          quod quia voluptatum nulla neque in reiciendis praesentium repellendus
          reprehenderit blanditiis, rerum ut totam sed deleniti! Porro
          blanditiis, culpa consequuntur minus, laboriosam excepturi neque
          tenetur dolores alias est ipsa sapiente iusto assumenda magni,
          exercitationem tempore error voluptatibus recusandae inventore
          repellendus! Repudiandae, quia totam. Cum eius repellat similique quas
          distinctio doloremque omnis fugit voluptatem temporibus suscipit est
          ut quasi unde exercitationem deserunt, ad non esse, iure magnam earum.
          Amet eligendi corporis tempora voluptas eaque cumque nesciunt omnis
          ducimus? Fuga rem minima voluptatem saepe officiis perferendis, dolor
          iure quis ipsa, delectus temporibus non voluptas obcaecati velit
          distinctio. Excepturi possimus a tenetur dolor pariatur, asperiores
          laborum. Aliquam, cupiditate! Numquam tenetur quasi expedita, autem
          nulla, adipisci, quo rerum labore ut facilis alias. Necessitatibus
          quibusdam quod atque quas quasi officiis velit provident doloremque
          nesciunt dolor eveniet nam impedit repellat voluptate quidem, iure
          voluptates hic obcaecati laboriosam sequi eos rerum expedita
          accusamus! Cum, dignissimos libero nihil in quo quaerat minima?
          Numquam dolor ipsa dicta quisquam porro, fugit alias sed eos maxime
          nisi minus incidunt aliquid nostrum ullam molestiae doloribus esse
          suscipit. Accusantium assumenda numquam ex quis deserunt dicta
          quibusdam, molestiae autem, porro doloribus reprehenderit soluta
          pariatur odit voluptatum. Quo officiis blanditiis aliquam ab quos. Et
          officiis, quaerat facilis corrupti suscipit quasi vero quidem sed quia
          perferendis expedita architecto assumenda adipisci ut commodi voluptas
          reprehenderit laboriosam repudiandae eius libero molestias! Vel,
          excepturi perspiciatis. Vero magni perspiciatis totam quas consequatur
          deserunt dolorum doloremque et accusantium quia hic dicta consequuntur
          quae, aspernatur vitae. Repudiandae quia culpa natus qui distinctio
          vel voluptatibus autem provident hic necessitatibus aliquid repellat
          rem, sapiente recusandae, ut perspiciatis? Dolorem dolorum, commodi,
          dolor aliquid exercitationem tenetur perferendis minus et doloribus
          eius inventore delectus accusantium quaerat impedit nostrum odit!
          Nobis ratione mollitia nulla illo porro tempora et voluptatibus
          necessitatibus sunt impedit, autem iusto beatae, harum eveniet, neque
          alias repellat. Porro vero velit, consectetur voluptatum et
          repudiandae amet explicabo quis sed distinctio ratione saepe voluptate
          repellat obcaecati dignissimos quisquam enim voluptatibus est eum
          tempore delectus aspernatur. Consequatur, quas quae voluptatibus
          officiis soluta deleniti suscipit culpa beatae autem odio facilis
          consectetur ex officia quaerat voluptate modi temporibus? Dolorum
          laudantium sunt rerum iste neque ipsam incidunt nulla modi placeat
          praesentium, vero nesciunt cupiditate animi veritatis? Cupiditate
          ducimus consequuntur quibusdam dicta ipsam obcaecati recusandae
          voluptates libero sequi quam, architecto, labore dolor unde eius
          debitis voluptate adipisci, optio rerum officiis ratione! Quos
          obcaecati nulla incidunt architecto, fugit veritatis quas ipsa,
          explicabo assumenda saepe eum. Praesentium veniam explicabo ducimus,
          dolorem fugit, fuga neque suscipit, at deserunt delectus eveniet cum
          natus exercitationem? Placeat quo tempora animi minima adipisci ipsa
          aliquam laboriosam, fuga voluptatum error harum totam eos unde earum
          amet quam rem eaque magni! Obcaecati, nulla dolores sunt consectetur
          alias et ipsa eum aliquid unde rerum cupiditate officiis nihil
          facilis. Cupiditate, ducimus laboriosam quo illo esse facilis earum
          architecto fugit autem velit laudantium, reprehenderit assumenda amet,
          maiores accusamus. Culpa, perspiciatis sit corporis ratione excepturi
          itaque, quis laborum doloremque asperiores veniam repellendus rerum.
          Modi qui saepe nisi tenetur ut accusamus, eligendi vero consectetur
          reprehenderit, quia doloribus quam tempore tempora sunt, temporibus
          fuga quasi nobis eum nostrum sed rem nihil? Tempora voluptates
          architecto earum quibusdam quasi! Voluptatibus consequatur nemo
          aperiam cum maxime harum deleniti commodi sit unde obcaecati eos
          voluptates quod, consequuntur quos aliquid itaque quidem beatae fuga
          delectus reiciendis fugiat similique odit. Mollitia explicabo
          praesentium voluptas ad laboriosam, corrupti iste autem cum
          reprehenderit atque velit odit eius vero pariatur dolor aut suscipit
          maiores, exercitationem dolore ullam impedit, inventore voluptatem.
          Unde voluptatum iure inventore quo possimus exercitationem neque
          aperiam, molestiae nesciunt sequi, quibusdam, magnam totam a. Fuga
          ullam corporis architecto repellendus velit quibusdam asperiores earum
          voluptates, vitae sed sapiente doloribus totam nihil amet. Tenetur
          facilis perspiciatis impedit totam excepturi perferendis odit, quasi
          alias sit ut, earum est tempore aspernatur soluta corporis quas cum
          labore vitae voluptates repudiandae, magni minus similique sed!
          Reiciendis dolorum voluptatem ipsa molestiae exercitationem! Debitis
          vitae iusto ipsa temporibus dolorum repudiandae expedita ipsum amet.
          Deleniti aspernatur numquam dolore hic nesciunt, ipsa explicabo
          provident recusandae incidunt iure nobis nihil eos vel. Illo eaque
          harum officia vel provident, quis molestiae, qui quos aliquam dolor
          omnis dolorem non repellendus debitis, nemo nihil dolore consequatur?
          Sit modi atque quibusdam dolorem nihil rem, a magnam vitae aspernatur
          ratione nulla, repellendus placeat voluptatem deserunt eligendi quo
          sapiente itaque corporis. Quae sint corporis rerum totam unde eveniet
          magni asperiores praesentium veniam laboriosam in explicabo nesciunt
          illum enim mollitia eum nemo necessitatibus nihil alias assumenda,
          recusandae temporibus omnis dolorum sequi! Veritatis porro consequatur
          totam accusamus numquam itaque nostrum nihil magnam! Distinctio, quis
          pariatur. Nesciunt omnis deleniti modi, quisquam autem sequi culpa hic
          nemo beatae iure quaerat quae ex aut debitis delectus non dignissimos
          rem consequuntur, aliquid voluptatem excepturi natus. Et, pariatur.
          Doloremque voluptate quas at reiciendis quibusdam eligendi, ex quam.
          Quasi animi molestiae excepturi commodi tempora, porro harum quidem
          quaerat natus consequatur saepe. Praesentium recusandae quasi eius
          laudantium ullam hic iure modi eos. Modi quo recusandae cupiditate
          debitis ipsa, consequuntur soluta officiis amet voluptatem culpa?
          Eligendi eos accusantium commodi eum voluptatem inventore voluptates
          cupiditate non, maxime minima illum ex quam suscipit enim ipsum in rem
          nam autem pariatur molestiae iusto ullam fuga quibusdam. Nisi
          reiciendis nostrum doloremque dignissimos autem alias. In soluta
          repellendus nihil corrupti magnam delectus illo veniam officia magni
          excepturi nemo est adipisci illum error, ea nesciunt distinctio
          provident quisquam tenetur quasi unde voluptatibus necessitatibus
          sequi. Maiores dolore incidunt cupiditate distinctio. Aliquam facilis
          iste repellat minus quo quis ipsam molestias harum asperiores quidem
          ex ratione autem quae consequatur, provident fugit impedit ea mollitia
          similique magni blanditiis. Minima, nisi! Quam, corporis hic. Dolor,
          omnis ad obcaecati odio animi asperiores in molestias iste repellat
          nobis tempore! Sit quibusdam recusandae autem? Adipisci rem non, ut
          quam tempora, officiis at corrupti incidunt delectus voluptas
          quibusdam vel culpa magni quo libero atque error repudiandae? Iure
          eveniet voluptates tempora similique, expedita consequuntur, doloribus
          dolor harum amet quia impedit architecto culpa provident nostrum
          aperiam dolorum vitae reiciendis tenetur quam nisi aliquam. Enim ipsum
          harum consectetur rem quisquam impedit quam. Quas debitis voluptatem
          ea impedit velit magni quaerat, laborum explicabo facilis soluta! Quas
          voluptas aliquam vel illum doloribus officia mollitia. Dicta illo
          fugiat magnam, sunt debitis libero. Cupiditate, nam! Eaque dolorum
          magni rerum quisquam, aut voluptate unde maiores cumque at fugit
          tempore perspiciatis aspernatur voluptatibus dignissimos explicabo
          voluptates autem, aliquam ut quae non qui nostrum optio alias
          doloribus? Perferendis, hic et fuga non sunt eaque, culpa asperiores
          quos cupiditate enim harum! Esse sed nobis pariatur similique deleniti
          corporis nisi laudantium, assumenda reprehenderit? Mollitia magni
          saepe molestiae. Tempora vel, ab earum officia unde reprehenderit sunt
          repellat beatae. Earum deserunt quae quis? Autem, recusandae. Facilis
          rerum illo similique eligendi temporibus, animi, ut dolorem itaque
          quam quibusdam illum ipsa ad dolore nemo optio iusto minima sit quia
          id? Corporis placeat, repellat distinctio deleniti laboriosam, omnis
          temporibus illum quod, itaque quidem iure assumenda unde quia
          consequatur? Voluptatum aliquid ipsum facere officiis consectetur
          obcaecati error. Rerum necessitatibus, itaque numquam sunt minus optio
          aperiam sequi, sint ratione obcaecati eos expedita deleniti magni
          doloribus cumque culpa! Illo excepturi reiciendis eveniet sed odio,
          iusto porro architecto possimus totam ad, optio voluptatum harum
          explicabo. Impedit reprehenderit deleniti adipisci neque, saepe
          pariatur praesentium eveniet dolor illum soluta temporibus repellat,
          earum distinctio quasi cumque, explicabo iure amet eum nesciunt
          voluptatibus maiores molestiae. Quo repellat, laborum vero quos dicta
          rem architecto consequatur minima, maxime earum ex, commodi hic eaque
          labore adipisci maiores velit voluptatem in delectus vel! Id eum porro
          praesentium inventore explicabo consequuntur commodi voluptates,
          deserunt eius quisquam veniam, cumque dicta doloribus suscipit,
          dolorem at similique repellat fuga molestiae? Sunt eaque porro
          voluptatum, rerum amet suscipit vitae quis laborum at quam! Fugit
          ipsam, commodi, earum iure doloribus distinctio aspernatur autem
          veritatis repellat nisi iste delectus? Nobis suscipit hic quae veniam,
          labore numquam. Sequi temporibus labore sapiente autem laborum commodi
          ipsam iusto modi ut iste saepe quidem, perferendis optio similique ad
          tempora, possimus nobis? Culpa libero laborum, vero veritatis
          aspernatur, expedita doloremque repellendus nam quo quas doloribus
          voluptatum obcaecati modi aut quidem consequuntur quasi fugit id ab
          molestias explicabo! Dicta nemo et eveniet adipisci, ab temporibus in
          ea necessitatibus amet delectus! Atque, ducimus exercitationem. Quam
          iure esse nobis quibusdam. Perspiciatis esse culpa amet explicabo,
          error quos minus optio non autem quidem dolorem reiciendis magnam
          voluptatibus id repellat et adipisci excepturi illo atque vero, vitae
          placeat aperiam deleniti magni. Nulla, necessitatibus tempore ut harum
          quia error alias facere molestias quam reprehenderit a aut magni,
          aperiam hic totam laborum? Sunt inventore, similique optio ut eos quo
          necessitatibus minus minima, culpa in voluptatem alias vel tenetur
          autem explicabo non aliquid perspiciatis, animi architecto itaque. Quo
          aut soluta similique pariatur est blanditiis, libero iure! Quod id ea,
          iusto error dolorem consequatur facere officiis atque a eligendi
          laboriosam possimus temporibus perferendis quaerat ab earum assumenda
          culpa voluptate aut nisi voluptatem! Accusantium, accusamus? Cum,
          illo. Optio nisi sapiente odio, perspiciatis doloribus eligendi fuga
          quibusdam quasi voluptas sequi alias quos blanditiis inventore
          quisquam temporibus, recusandae libero error maxime accusantium fugiat
          omnis est maiores a! Ad deleniti quasi assumenda, porro ipsa officiis
          reprehenderit unde dicta maiores quia, eum alias. Id voluptatibus quis
          enim reprehenderit dignissimos ut vel possimus laborum est consequatur
          adipisci aliquid ipsum, soluta illum nobis. Deserunt voluptatem enim
          in tempora dolores ab accusamus ea distinctio, vero placeat molestiae
          laudantium, numquam amet consequuntur. Voluptatum commodi laudantium
          fugiat itaque, iure consequatur dolores dolorum mollitia nihil ipsam
          expedita obcaecati esse aliquam! Expedita doloremque id, ducimus
          fugiat, quas sapiente quis aspernatur at laboriosam laborum pariatur,
          illum quisquam non odio praesentium optio neque eveniet ipsa voluptate
          inventore! Eligendi atque quas odio, corrupti optio, expedita
          praesentium odit quam hic dicta amet temporibus? Repellendus quia
          itaque quisquam error magnam alias odio facilis veritatis ut autem
          aspernatur nesciunt corporis sunt, distinctio doloremque voluptas nam
          omnis deserunt iste nemo nulla maxime iure? Placeat veritatis eveniet
          explicabo, atque at deserunt, illum commodi fugiat recusandae quaerat
          omnis repellat blanditiis maxime ullam ducimus voluptatum vitae nihil.
          Omnis aliquid velit, repudiandae, laboriosam autem, eaque nobis
          dolores ut ratione iure molestias voluptas deserunt animi mollitia.
          Accusantium sequi, recusandae ipsam saepe facere eveniet velit debitis
          obcaecati. Omnis, voluptate. Officia corrupti quam id pariatur,
          provident maiores error laborum dolore ratione laudantium
          exercitationem repellat et distinctio explicabo similique nostrum
          accusamus nobis? Explicabo nulla, repudiandae doloribus maxime est
          laboriosam sapiente! Voluptates itaque at recusandae pariatur rem
          quaerat consequatur, corrupti officiis delectus doloremque molestiae
          dolorum cupiditate in voluptatum iure amet excepturi deleniti minus
          placeat. Dolor fugiat possimus earum eveniet! Dolorem, placeat ex
          eius, repellat dignissimos vero eligendi quia culpa unde obcaecati,
          tenetur veritatis non voluptatibus. Dolorum ducimus ea consectetur
          explicabo quo earum alias necessitatibus sequi rerum assumenda odit
          aperiam, quam, ad incidunt voluptates molestiae expedita eum,
          laudantium cumque labore nulla debitis? At eligendi tempore incidunt.
          At totam fugit, iusto repudiandae ipsum eveniet eos, soluta ea nulla
          omnis quisquam fuga sit ullam! Iusto accusamus reiciendis neque
          commodi a obcaecati nemo illo, harum et aspernatur dolorum recusandae
          voluptas sunt at assumenda. Sint, laborum assumenda doloribus
          praesentium veritatis quisquam asperiores aliquam officia maiores
          incidunt reprehenderit dicta. Praesentium perspiciatis quae dolorem
          animi aspernatur autem suscipit, temporibus facere assumenda ipsam
          iste iusto veniam aliquid earum delectus nulla magnam quo voluptatibus
          pariatur reiciendis sapiente cum error! Beatae ipsum sint tempore quod
          asperiores omnis ut ratione quam quos nulla! Voluptatum, modi esse,
          non animi impedit quisquam iure laudantium commodi ipsum eaque rerum
          nesciunt, delectus nemo. Eaque exercitationem sapiente nihil deleniti
          soluta illo repellendus omnis ipsam harum eum, ab necessitatibus ipsum
          molestias delectus quisquam totam magni? Vero distinctio ea modi
          molestias odio delectus nulla natus deserunt, assumenda dicta
          quibusdam. Itaque sunt cum optio, veniam et doloribus nisi odio
          tempora voluptas aliquid? Quibusdam voluptatibus totam repellat
          voluptatem modi! Accusamus velit repellendus possimus explicabo
          repellat, esse quasi assumenda, sequi ab at animi. Non possimus sunt
          placeat fugiat impedit iure ipsa? Consequuntur eos, molestias
          repudiandae facere amet mollitia! Ad harum doloribus officia veritatis
          blanditiis quidem! Odit itaque ullam quae iure quos. Quo molestias,
          saepe laboriosam veritatis illum doloremque aliquam quos
          necessitatibus eveniet dolorem tempora tenetur inventore animi sed
          officia quaerat unde, dolores optio voluptas officiis, adipisci
          placeat velit iusto incidunt. Minus minima eveniet modi reiciendis
          nostrum obcaecati quas illum, aliquam distinctio et alias suscipit
          laudantium asperiores quo ab nulla ratione explicabo nihil repellat
          temporibus repellendus, consectetur culpa? Reprehenderit provident
          fuga quidem earum beatae illo distinctio natus, voluptatibus voluptate
          id totam aliquam quas deleniti? Assumenda labore sunt corrupti eaque
          error culpa, magni eius perspiciatis quis quidem eligendi facilis non
          temporibus ex ut, exercitationem reiciendis! Suscipit eligendi dolore
          praesentium corrupti at amet consequatur, fugiat, nesciunt modi error
          consectetur? Ipsa inventore, sapiente, repellendus ab magnam optio,
          illum nobis quia nemo neque et numquam rem. Tenetur libero praesentium
          rerum dolore accusantium quis, fuga vel sunt architecto, maiores
          minima facilis explicabo, officiis porro expedita iure error
          consectetur cum dicta similique vero ad voluptate adipisci. Molestias
          possimus veniam earum reprehenderit numquam quos, impedit soluta
          explicabo quod assumenda dicta repellendus omnis, odit necessitatibus
          porro consequatur doloremque? Quia rerum praesentium quas illum
          provident impedit totam ut quo, nemo repellendus quod laudantium
          dolorum, accusantium aliquid, animi saepe quidem eaque nesciunt ad a
          aperiam ullam quibusdam eum. Autem recusandae saepe facilis quam
          delectus beatae, porro qui consectetur at nemo laborum harum velit
          impedit! Est ipsa quis nisi asperiores consectetur corporis. Nihil
          laudantium modi sit excepturi alias ipsum, quae quos consequuntur?
          Voluptate, iste sapiente quae debitis ullam mollitia ratione cum enim
          laborum ut eveniet fuga quidem, deleniti omnis aliquid exercitationem
          voluptatibus commodi, quis aliquam impedit cupiditate. Doloremque
          repellat ducimus inventore consequatur! Autem assumenda, molestiae
          ipsum nemo iusto asperiores quia temporibus ut commodi. Animi nesciunt
          dignissimos eum architecto qui optio inventore aliquam voluptatibus
          excepturi omnis ipsam recusandae nihil, non unde similique minus
          tempore placeat, doloribus assumenda labore id blanditiis magni error
          corrupti? Hic quas veniam molestias odio similique ipsam explicabo ex.
          At corrupti repellat voluptas, adipisci eaque eum rerum porro
          distinctio inventore cumque modi odit accusamus provident quod?
          Deleniti molestiae amet quibusdam labore optio sit facere illo dolor
          dignissimos laboriosam cumque autem alias, doloremque consectetur
          delectus magnam cum maxime aliquam id! Impedit, voluptas vitae
          corporis provident, quam voluptates illum eius consequatur aperiam
          dolorum, expedita quaerat quae necessitatibus. Mollitia, at
          temporibus? Ad ipsum cupiditate nihil veniam deserunt dolores neque
          non. Natus laboriosam ad possimus, doloribus inventore adipisci fuga
          cupiditate aut quam assumenda. Aliquam repellat impedit reiciendis
          molestiae sequi ea autem nulla velit, voluptas dolores error incidunt
          ratione consequuntur, molestias quas voluptatum fugit. Consectetur
          quae aliquid esse accusamus reiciendis veritatis adipisci, nam
          laudantium magnam! Facere numquam recusandae, odio dolorum maxime
          veniam sapiente illum provident quaerat veritatis inventore libero
          assumenda excepturi voluptates, dolores eveniet laudantium nesciunt
          necessitatibus? Eaque quis perspiciatis eveniet exercitationem aliquid
          quibusdam? Doloremque natus hic quam consequuntur illo assumenda iste
          accusamus voluptate neque numquam eaque deleniti est nam dolorem,
          veritatis repudiandae magni, harum ab error accusantium ut
          voluptatibus? Ipsa quisquam ipsum dolores doloribus sit dolor eius
          itaque eveniet recusandae ratione reiciendis repudiandae alias
          voluptas sunt ullam dignissimos quaerat, impedit, rem sapiente
          voluptatibus obcaecati quasi quo laborum. Quam libero voluptatum eius
          dolorum, numquam quibusdam eum! Minima, qui? Cum eaque minus nihil ad
          tempore a, repudiandae necessitatibus nesciunt sunt sapiente magnam
          veniam minima fugiat distinctio animi iusto, ducimus labore quaerat
          voluptatum.
        </p>
      </div>
    </div>
  );
};

export default ToDoList;
