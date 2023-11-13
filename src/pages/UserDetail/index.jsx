c;

const UserDetail = () => {
  const param = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    handleGetDetail();
  }, []);

  const handleGetDetail = () => {
    axios
      .get("https://api.mudoapi.tech/menus/" + param.id)
      .then((res) => {
        console.log(res);
        setDetail(res.data.data.Data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <Container>
        <Card>
          <h1>{detail.name}</h1>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default UserDetail;
